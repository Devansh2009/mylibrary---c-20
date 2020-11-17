var movingRect, fixedRect, rect1, rect2, rect3, rect4


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(200, 300, 50, 50);
  movingRect.shapeColor = "green"
  rect1 = createSprite(300, 400, 50, 50)
  rect1.shapeColor = "green"
  rect2 = createSprite(100, 100, 50, 50)
  rect2.shapeColor = "green"
  rect3 = createSprite(300, 100, 50, 50)
  rect3.shapeColor = "green"
  rect4 = createSprite(200, 400, 50, 50)
  rect4.shapeColor = "green"
}

function draw() {
  background(0,0,0);
  movingRect.y = World.mouseY
  movingRect.x = World.mouseX
  
  if (isTouching(movingRect,rect4)) {
    movingRect.shapeColor = "red"
    rect4.shapeColor = "red"
  }
  else {
    movingRect.shapeColor = "green"
    rect4.shapeColor = "green"
  }


  drawSprites();
}

function isTouching(object1,object2) {
  if (object1.x-object2.x < object1.width/2+object2.width/2 && 
    object2.x-object1.x < object1.width/2+object2.width/2 &&
    object1.y-object2.y < object1.height/2+object2.height/2 &&
    object2.y-object1.y < object1.height/2+object2.height/2) {
      return true
  }
  else {
    
    return false
  }
  //console.log(object1.x-object2.x)

}