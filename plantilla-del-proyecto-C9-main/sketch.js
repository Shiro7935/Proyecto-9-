
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(185,185,30,30);

}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) {
    background("red")

  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

