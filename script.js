const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
})

const mouse = {
	x: undefined,
	y: undefined
}

canvas.addEventListener("click", event => {
	mouse.x = event.x
	mouse.y = event.y
	for (let i = 0; i < 10; i++) {
		particles.push(new Particle())
	}
})

canvas.addEventListener("mousemove", event => {
	mouse.x = event.x
	mouse.y = event.y
	for (let i = 0; i < 10; i++) {
		particles.push(new Particle())
	}
})

class Particle {
	constructor () {
		this.x = mouse.x
		this.y = mouse.y
		//this.x = Math.random() * canvas.width
		//this.y = Math.random() * canvas.height
		this.size = Math.random() * 15 + 1
		this.speedX = Math.random() * 3 - 1.5
		this.speedY = Math.random() * 3 - 1.5
	}

	update () {
		this.x += this.speedX
		this.y += this.speedY
		if (this.size > 0.2) this.size -= 0.1
	}

	draw () {
		ctx.fillStyle = "hsl"
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
		ctx.fill()
	}
}

const particles = []

function init () {
	for (let i = 0; i < 100; i++) {
		particles.push(new Particle())
	}
}

function handleParticles () {
	for (let i = 0; i < particles.length; i++) {
		particles[i].update()
		particles[i].draw()
		if (particles[i].size < 0.3) {
			particles.splice(i, 1)
			i--
		}
	}
}

function animate () {
	//ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	handleParticles()
	requestAnimationFrame(animate)
}

//init()
animate()