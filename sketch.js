
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(600,100)
	bob1=new Bob(600,400)
	bob2=new Bob(500,400)
	bob3=new Bob(700,400)
	bob4=new Bob(400,400)
	bob5=new Bob(800,400)
	thread1 =new Rope(bob1.bob,ground1.body,600,100)
	thread2= new Rope(bob2.bob,ground1.body,500,100)
	thread3= new Rope(bob3.bob,ground1.body,700,100)
	thread4= new Rope(bob4.bob,ground1.body,400,100)
	thread5= new Rope(bob5.bob,ground1.body,800,100)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
 
  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  thread5.display();
}
 


function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(bob4.bob,bob4.bob.position,{x:-200,y:-200}); 
}
 }	


