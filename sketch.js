function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(220,125, random(255));
 ellipse(mouseX, mouseY, mouseX, mouseY);
}