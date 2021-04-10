const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow1 , snow2 , snow3, snow4, snow5;
var bgImg;

function preload() {
  bgImg = loadImage("sprites/snow3.jpg");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  snow1 = new Snow(505,450,10);
  snow2 = new Snow(515,450,10);
  snow3 = new Snow(510,450,10);
  snow4 = new Snow(525,450,10);
  snow5 = new Snow(530,450,10);
}

function draw() {
  Engine.update(engine);
  background(bgImg);  
  drawSprites();
}