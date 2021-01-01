const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var g,d1,d2,d3,d4,d5,d6,d7;
function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  g = new Ground(400,780,900,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}