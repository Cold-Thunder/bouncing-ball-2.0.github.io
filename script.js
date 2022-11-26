
let canvas = document.querySelector('canvas');

canvas.height = innerHeight;
canvas.width = innerWidth;


let c = canvas.getContext('2d');

let mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('mousemove', (e)=>{
	mouse.x = e.x;
	mouse.y = e.y;
})


class Circle{
	constructor( x, y, ra, dx, dy, r, g, b){
		this.x = x,
		this.y = y,
		this.ra = ra,
		this.dx = dx,
		this.dy = dy,
		//color code
		this.r = r,
		this.g = g,
		this.b = b
	}

	draw(){
		c.beginPath()

		this.r;
		this.g;
		this.b;

		c.fillStyle = `RGB(${this.r}, ${this.g}, ${this.b})`;
		c.strokeStyle = `RGB(255, 255, 255, 0)`;
		c.arc(this.x, this.y, this.ra, 0, Math.PI*2, false);
		c.fill()
		c.stroke();

	}

	update(){

		if(this.x >= innerWidth - this.ra || this.x < 0 + this.ra){
		this.dx = -this.dx;
		}

		if(this.y >= innerHeight - this.ra || this.y < 0 + this.ra){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;


		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
			if(this.ra < 40){
				this.ra += 5;	
			}
			
		} else if(this.ra > 15){
			this.ra -= 3;
		}
    }


}


let cirArr = [];

for(let i = 0; i <= innerWidth/2; i++){
	let ra = Math.random()*30;
	let x = Math.random()* innerWidth;
	let y = Math.random()* innerHeight;
	let dx = Math.random()*5;
	let dy = Math.random()*5;
//color code start
	let r = Math.random() * 255;
	let g = Math.random() * 255;
	let b = Math.random() * 255;
//color code end
	let circle = new Circle(x, y, ra, dx, dy, r, g, b)

	cirArr.push(circle);
}


const anim = () => {
	requestAnimationFrame(anim);
	c.clearRect(0,0,innerWidth, innerHeight);
	

	for(let i = 0; i < cirArr.length; i++){
		cirArr[i].draw();
		cirArr[i].update();
	}
}

anim()

