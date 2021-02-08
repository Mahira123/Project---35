var balloon;
var bgImg;


function preload(){
bgImg = loadImage("Hot Air Ballon-01.png");



}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}