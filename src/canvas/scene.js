const BORDER = 12
const BORDER_DBL = BORDER * 2

const paintScene = (canvas, landY) => {
  const ctx = canvas.getContext('2d')

  ctx.save()

  ctx.beginPath()
  const water = ctx.createLinearGradient(0, 0, 0, landY)
  water.addColorStop(0, 'steelblue')
  water.addColorStop(1, 'midnightblue')

  ctx.fillStyle = water
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const sand = ctx.createLinearGradient(0, landY, 0, canvas.height)
  sand.addColorStop(0, 'burlywood')
  sand.addColorStop(1, 'hotpink')

  ctx.fillStyle = sand
  ctx.fillRect(0, landY, canvas.width, canvas.height)
  ctx.closePath()

  ctx.strokeStyle = 'black'
  ctx.lineWidth = BORDER
  ctx.rect(BORDER, BORDER, canvas.width - BORDER_DBL, canvas.height - BORDER_DBL)
  ctx.stroke()

  ctx.restore()
}

export default paintScene
