const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;

function setup() {
  createCanvas(500, windowHeight-5);
  engine = Engine.create();
  world = engine.world;

  //criando o solo
  ground = new Ground(width / 2, height - 10, width, 20);

  //configurações do jogo
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display()
}
