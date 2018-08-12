const paintScene = (canvas, landY) => {
  const context = canvas.getContext('2d')

  context.save()

  context.beginPath()
  context.fillStyle = "black"
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.strokeStyle = 'white'
  context.lineWidth = 2
  context.moveTo(0, landY)
  context.lineTo(canvas.width, landY)
  context.stroke()
  context.closePath()

  context.restore()
}

export default paintScene
