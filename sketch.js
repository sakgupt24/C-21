var fixedRect, movingRect;
var box1;
var box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  box1=createSprite(100,200,50,50);
  box2=createSprite(600,200,50,50);

  box1.velocityX=2
  box2.velocityX= -2
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect, fixedRect);
  bounceOff(box1, box2);
  drawSprites();
}

