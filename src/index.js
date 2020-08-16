import './index.css'

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let number = 0
let scale = 10
let tick = 0

function drawFlower() {
  let angle = number * 1
  let r = scale * Math.sqrt(number)
  let posX = r * Math.sin(angle) + canvas.width / 2
  let posY = r * Math.cos(angle) + canvas.height / 2

  switch (true) {
    case tick < 500:
      ctx.lineWidth = 2 * angle
      ctx.strokeStyle = 'black'
      ctx.fillStyle = 'white'
      break
    case tick < 900:
      ctx.lineWidth = r * 6
      ctx.strokeStyle = 'black'
      ctx.fillStyle = 'darkcyan'
      break
    case tick < 1500:
      ctx.lineWidth = 4 * angle
      ctx.strokeStyle = 'darkcyan'
      ctx.fillStyle = 'white'
      break
    case tick < 1550:
      ctx.lineWidth = 8 * r
      ctx.strokeStyle = 'white'
      ctx.fillStyle = 'black'
      break
    case tick < 2200:
      ctx.lineWidth = 0.8
      ctx.fillStyle = 'darkcyan'
      ctx.strokeStyle = 'white'
      break
    default:
      ctx.lineWidth = r / 0.5
      ctx.strokeStyle = 'black'
      ctx.fillStyle = 'black'
  }
  ctx.beginPath()
  ctx.arc(posX, posY, 10, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  number++
}

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawFlower()
  tick++
  if (tick < 2500) {
    console.log(tick)
    requestAnimationFrame(animate)
  }
}
animate()
