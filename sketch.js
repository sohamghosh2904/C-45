const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var canvas;
var terrorist1;
var terrorist2;
var terrorist3;
var terrorist4;
var terrorist5;
var terroristImg;
var soldier1;
var soldier2;
var soldier3;
var soldierImg;
var lives=3;
var terroristLeft=5;
var backgroundImg;
var bullet1;
var bulletImage;
var scene;




function preload(){
backgroundImg=loadImage("bg.jpg");
terroristImg=loadImage("terrorist.jpg");
soldierImg=loadImage("soldier1.jpg");
bulletImage=loadImage("bullet2.png");


}


function setup() {
canvas=createCanvas(displayWidth-100,displayHeight-170);

scene=createSprite(0,0,displayWidth,displayHeight);
scene.addImage(backgroundImg);
scene.scale=2;
scene.x=scene.width/2;

engine=Engine.create();
world=engine.world;

terrorist1=createSprite(200,500,20,20);
terrorist1.addImage(terroristImg);
terrorist1.scale=0.1;

terrorist2=createSprite(200,200,20,20);
terrorist2.addImage(terroristImg);
terrorist2.scale=0.1;

terrorist3=createSprite(100,350,20,20);
terrorist3.addImage(terroristImg);
terrorist3.scale=0.1;

terrorist4=createSprite(400,150,20,20);
terrorist4.addImage(terroristImg);
terrorist4.scale=0.1;

terrorist5=createSprite(400,350,20,20);
terrorist5.addImage(terroristImg);
terrorist5.scale=0.1;

soldier1=createSprite(1100,300,20,20);
soldier1.addImage(soldierImg);
soldier1.scale=0.15;

soldier2=createSprite(1100,600,20,20);
soldier2.addImage(soldierImg);
soldier2.scale=0.15;
soldier2.visible=false;

soldier3=createSprite(1100,600,20,20);
soldier3.addImage(soldierImg);
soldier3.scale=0.15;
soldier3.visible=false;


 

}

function draw() {
background(0); 
if(scene.x<0){
scene.x=scene.width/2;
}
Engine.update(engine);

if(keyDown("UP_ARROW")){
soldier1.velocityY=-3;
soldier1.velocityX=0;

}

if(keyDown("DOWN_ARROW")){
soldier1.velocityY=3;
soldier1.velocityX=0;
}

fill("red");
textSize(15);
text("Terrorists Left ="+terroristLeft,100,50);

fill("red");
textSize(15);
text("Lives left ="+lives,1000,55);

fill("green");
textSize(35);
text("Army Escape",500,100);


createBullet();
drawSprites();
}

function createBullet(){
bullet1=createSprite(displayWidth/2,displayHeight/2,40,20);
bullet1.addImage(bulletImage);
bullet1.scale=0.02;
bullet1.x=displayWidth-350;
bullet1.y=soldier1.y;

}