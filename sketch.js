
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,ground1,wall1,wall2,wall3;
var sound

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	paperball = new Paper(100,650,70,70);
    ground1 = new ground(800,650,2000,20);
	wall1 = new Dustbin(1000,630);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground1.display();
  paperball.display();
  wall1.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperball.body,paperball.body.position,{x:190,y:-320});
	}
}