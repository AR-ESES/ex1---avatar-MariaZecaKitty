let posX;
let posY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {

	background(255,192,203);
	posX = mouseX;
	posY = mouseY;
	noFill();
	stroke(0);
	strokeWeight(5);

    fill(255, 215, 0)
	circle(posX, posY, height/3);

    fill(255)
	circle(posX - height/3/4, posY - height/18, height/12);
	circle(posX + height/3/4, posY - height/18, height/12);

    fill(0)
    circle(posX - height/3/4, posY - height/18, height/20);
	circle(posX + height/3/4, posY - height/18, height/20);

    fill(255,0,0)
    circle(posX + height/3/25, posY - height/70, height/30);
    


}