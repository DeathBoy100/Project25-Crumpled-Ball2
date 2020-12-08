
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball1,ground;
var dustbin_img

function preload()
{
 dustbin_img = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);
	
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	
	

	
	engine = Engine.create();
	world = engine.world;
   
	//box1 = new box(750,600,20,100,1)
	//box2 = new box(600,600,20,100,2)
	//box3 = new box(660,640,170,20,3)
	box3 = new box(600,640,170,20,3)
	ball1 = new ball(100,630,10)
	ground = new Ground (width/2, 700, width, 20);
    
	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  //keyPressed();
  background("lightblue");
  //box1.display(1)
  //box2.display(2)
  ground.display();
  box3.display(3)
  ball1.display();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (ball1.body,ball1.body.position,{x:13,y:-14});
				
	}
}
