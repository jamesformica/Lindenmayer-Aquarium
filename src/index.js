import range from 'lodash/range'
import sample from 'lodash/sample'
import without from 'lodash/without'

import Tree from './tree'
import trees from './trees.json'
import paintScene from './scene'
import { getLoops, getX, getAngle, getDistance } from './helpers'

const CANVAS_ID = 'ft'
const COLOURS = ['white', 'greenyellow', 'magenta', 'aquamarine', 'fuchsia', 'coral', 'yellow', 'indianred']

global.window.onload = () => {
  const canvas = global.document.getElementById(CANVAS_ID)
  canvas.width = global.document.documentElement.clientWidth
  canvas.height = global.document.documentElement.clientHeight

  let colours = [...COLOURS]
  const skyLine = canvas.height * 0.9

  paintScene(canvas, skyLine)

  range(0, getLoops(canvas)).forEach((i) => {
    const tree = sample(trees.trees)
    const colour = sample(colours)

    const options = {
      y: skyLine,
      x: getX(i),
      distance: getDistance(tree.distance, canvas),
      angle: getAngle(tree.angle),
      iterations: tree.iterations,
      colour,
    }

    colours = without(colours, colour)
    new Tree(CANVAS_ID, tree.axiom, tree.rules, options).paintTree()
  })
}
