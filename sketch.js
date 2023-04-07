var boy
var path
var pathimg

function preload () { 
  pathimg = loadImage("cloud.png")

}

function setup() {
  createCanvas(800,400);
  path = createSprite (random (200, 600), -150)
  path2 = createSprite (random (100, 200), -150)
  path3 = createSprite (random (400, 600), 100)
  path4 = createSprite (random (620, 780), 50)

  path.addImage("cloud", pathimg);
  path.scale =  0.2
  path.velocityY = 5
  path2.velocityY = 8
  path3.velocityY = 8
  path4.velocityY = 8

  

  boy = createSprite(400, 350, 50, 50);

}

function draw() {
  background("blue");  
if (path.y > height) { 
  path.y = height/2
}

if (path2.y > height) {
  path2.y = height/4
}

if (path3.y > height) {
  path3.y = height/3
}

if (path4.y > height) {
  path4.y = height/6
}

boy.x = World.mouseX
drawSprites();
}