const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
})

ctx.fillStyle = "blue"
ctx.strokeStyle = "red"
ctx.lineWidth = 15
ctx.beginPath()
ctx.arc(100, 100, 50, 0, Math.PI * 2)
ctx.stroke()
ctx.fill()