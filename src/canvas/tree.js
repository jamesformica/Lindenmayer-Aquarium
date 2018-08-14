import get from 'lodash/get'

class Tree {
  constructor(canvasId, axiom, rules, options) {
    this.canvas = global.document.getElementById(canvasId)
    this.context = this.canvas.getContext('2d')

    this.setOptions(axiom, rules, options)

    this.sentence = this.axiom
    this.stateStack = []
    this.paintStack = []

    this.generateSentence()
    this.buildPaintStack()
  }

  setOptions(axiom, rules, options) {
    this.axiom = axiom
    this.rules = rules
    this.iterations = get(options, 'iterations', 2)
    this.startX = get(options, 'x', this.canvas.width / 2)
    this.startY = get(options, 'y', this.canvas.height)
    this.distance = get(options, 'distance', 15)
    this.angle = get(options, 'angle', 20)
    this.colour = get(options, 'colour', 'white')
  }

  generateSentence() {
    for (let f = 0; f < this.iterations; f += 1) {
      let nextSentence = ''

      for (let i = 0; i < this.sentence.length; i += 1) {
        const char = this.sentence.charAt(i)
        let found = false

        for (let j = 0; j < this.rules.length; j += 1) {
          if (char === this.rules[j].from) {
            found = true
            nextSentence += this.rules[j].to
          }
        }

        if (!found) {
          nextSentence += char
        }
      }

      this.sentence = nextSentence
    }
  }

  buildPaintStack() {
    let heading = 0
    let x = this.startX
    let y = this.startY

    for (let i = 0; i < this.sentence.length; i += 1) {
      switch (this.sentence.charAt(i)) {
        case 'F': {
          const oldX = x
          const oldY = y
          const size = Math.max(5 - this.paintStack.length / 2, 1)

          x += (Math.sin(heading) * this.distance)
          y -= (Math.cos(heading) * this.distance)

          this.paintStack.push({ oldX, oldY, x, y, size })
          break
        }
        case '-': {
          heading -= this.angle * Math.PI / 180
          break
        }
        case '+': {
          heading += this.angle * Math.PI / 180
          break
        }
        case '[': {
          this.stateStack.push({ x, y, heading })
          break
        }
        case ']': {
          ({ x, y, heading } = this.stateStack.pop())
          break
        }
        default: {
          break
        }
      }
    }
  }

  paintTree(drawIndex = 0) {
    global.requestAnimationFrame(() => {
      let newDrawIndex = drawIndex
      for (let i = 0; i < 4; i += 1) {
        this.paintBranch(this.paintStack[newDrawIndex])
        newDrawIndex += 1

        if (newDrawIndex >= this.paintStack.length) return
      }

      this.paintTree(newDrawIndex)
    })
  }

  paintBranch(coords) {
    this.context.beginPath()
    this.context.strokeStyle = this.colour
    this.context.lineWidth = coords.size
    this.context.moveTo(coords.oldX, coords.oldY)
    this.context.lineTo(coords.x, coords.y)
    this.context.stroke()
    this.context.closePath()
  }
}

export default Tree
