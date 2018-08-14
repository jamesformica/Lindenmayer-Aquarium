import random from 'lodash/random'

const SPACING = 200

export const getLoops = (canvas) => {
  if (canvas.height > canvas.width) {
    return random(2, 3)
  }

  return Math.floor(canvas.width / SPACING)
}

export const getX = (index, canvas) => {
  if (canvas.height > canvas.width) {
    const padding = canvas.width * 0.2
    return random(padding, canvas.width - padding)
  }

  const min = index * SPACING
  const max = min + SPACING
  return random(min, max)
}

export const getAngle = (angle) => {
  if (!angle) return console.error('tree must have an angle defined')

  if (angle.push) {
    if (angle.length === 2) {
      return random(angle[0], angle[1])
    }
    return console.error('angle array must have exactly 2 values')
  }
  return angle
}

export const getDistance = (distance, canvas) => {
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
