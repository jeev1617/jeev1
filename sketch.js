var fixedRect,movingRect,object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  object1=createSprite(100,100,30,60);
  object1.shapeColor="yellow";
  object2=createSprite(200,200,30,60);
  object2.shapeColor="yellow";
}

function draw() {
  background(255);  
  console.log(movingRect.x-fixedRect.x);
  
if(isTouching(fixedRect,object2)){
  object2.shapeColor="red";
    fixedRect.shapeColor="red";
}
else {
  object2.shapeColor="yellow";
    fixedRect.shapeColor="green";
}

  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
      return true;
    }
  else {
    return false;
  }
}