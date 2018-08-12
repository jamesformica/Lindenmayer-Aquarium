import random from 'lodash/random'
import range from 'lodash/range'
import sample from 'lodash/sample'

import Tree from './tree'
import paintScene from './scene'
import trees from './trees.json'

const CANVAS_ID = 'ft'
const SPACING = 200

const getX = (index, canvas) => {
  const min = index * SPACING
  const max = min + SPACING
  return random(min, max)
}

const getAngle = (angle) => {
  if (!angle) return console.error('tree must have an angle defined')

  if (angle.push) {
    if (angle.length === 2) {
      return random(angle[0], angle[1])
    }
    return console.error('angle array must have exactly 2 values')
  } else {
    return angle
  }
}

const getDistance = (distance, canvas) => {
  if (!distance) return console.error('tree must have a distance defined')

  let dist
  if (distance.push) {
    if (distance.length === 2) {
      dist = random(distance[0], distance[1])
    } else {
      return console.error('distance array must have exactly 2 values')
    }
  } else {
    dist = distance
  }

  return Math.min(canvas.height * 0.01, dist)
}

window.onload = () => {
  const canvas = document.getElementById(CANVAS_ID)
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight

  const skyLine = canvas.height * 0.8

  requestAnimationFrame(() => paintScene(canvas, skyLine))

  const loops = Math.floor(canvas.width / SPACING)

  range(0, loops - 1).map((i) => {
    const tree = sample(trees.trees)

    const options = {
      y: skyLine,
      x: getX(i, canvas),
      distance: getDistance(tree.distance, canvas),
      angle: getAngle(tree.angle),
      iterations: tree.iterations
    }

    requestAnimationFrame(() => new Tree(CANVAS_ID, tree.axiom, tree.rules, options))
  })
}
