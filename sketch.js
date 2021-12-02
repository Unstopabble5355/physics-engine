
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var rock;
function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world
var ball_options={
restitution:0.95,
frictionAir:0.01

}

ball=Bodies.circle(100,10,20,ball_options);
World.add(world,ball);

var rocks={
restitution:0.85,

}

var groundes={
  isStatic:true 
}


ground=Bodies.rectangle(200,390,400,20,groundes);
World.add(world,ground);

rock=Bodies.circle(300,20,10,rocks);
World.add(world,rock);
}

function draw() 
{
  background(51);
 Engine.update(engine);                                                                                                                                                                      
 ellipse(ball.position.x,ball.position.y,20)
 rect(ground.position.x,ground.position.y,400,20)
ellipse(rock.position.x,rock.position.y,10);
}
