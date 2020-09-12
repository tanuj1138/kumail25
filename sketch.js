
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Ball = new Paper(50,360,30);

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	boxPosition=width/2+200
 	boxY=610;

	boxBase=createSprite(boxPosition, boxY+40, 200,10);
	boxBase.shapeColor=color(255);
	 
	boxBottomBody = Bodies.rectangle(boxPosition, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

	boxLeftSprite=createSprite(boxPosition+100, boxY-5, 10,100);
 	boxLeftSprite.shapeColor=color(255);


	boxLeftBody = Bodies.rectangle(boxPosition+100, boxY-5, 10,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

	boxRightSprite=createSprite(boxPosition-100 , boxY-5, 10,100);
 	boxRightSprite.shapeColor=color(255);
	
	boxRightBody = Bodies.rectangle(boxPosition-100 , boxY-5, 10,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	 Engine.run(engine);
  
}


function draw() {

  background("skyblue");

  rectMode(CENTER);
  
  Ball.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85});
}

}



