
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5,roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
  rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0) 
 
  bobObject2=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
  rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0) 

  bobObject3=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
  rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0) 

  bobObject4=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
  rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0) 

  bobObject5=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
  rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0) 

  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  


  roof.display();
  


  drawSprites();
 
}



