var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(600,400,50,80);
fixedRect.shapeColor = "green";

movingRect = createSprite(400,200,80,30);
movingRect.shapeColor = "green";

gameObj1 = createSprite(100,200,50,50);
gameObj1.shapeColor = "green";

gameObj2 = createSprite(200,200,50,50);
gameObj2.shapeColor = "green";
}

function draw() 
{
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,gameObj1))
  {
  gameObj1.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,gameObj2))
  {
  gameObj2.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    gameObj1.shapeColor = "green";
    gameObj2.shapeColor = "green";

  }


   


  drawSprites();
}
function isTouching(object1,object2){


  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2)
    {
      return true;
    }

    else
    {
      return false;
    }




}
