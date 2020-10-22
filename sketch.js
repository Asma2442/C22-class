const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var options = {
    isStatic: true
  }
  object = Bodies.rectangle(100,200,50,50,options)
  World.add(world,object)
  console.log(object)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(object.position.x,object.position.y,50,50)
}