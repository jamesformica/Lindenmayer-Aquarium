const paintScene = (canvas, landY) => {
  const ctx = canvas.getContext('2d')

  ctx.save()

  ctx.beginPath()
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = 'white'
  ctx.lineWidth = 4
  ctx.moveTo(0, landY)
  ctx.lineTo(canvas.width, landY)
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

export default paintScene
