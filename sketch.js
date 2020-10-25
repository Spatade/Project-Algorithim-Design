var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite (25,40,80,30);
}

function draw() {
  background(180);  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if( movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 
  && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
  && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)

  {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }

  else 
  {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";

  }
  drawSprites();
}