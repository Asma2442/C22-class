const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,400,400,20,ground_options)
  World.add(world,ground)
  console.log(ground)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,400,20)
}
