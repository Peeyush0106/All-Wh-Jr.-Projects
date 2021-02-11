var fixedBox, movingBox;


function setup() {
  createCanvas(800, 400);
  fixedBox = createSprite(100, 200, 50, 100);
  movingBox = createSprite(300, 200, 100, 50);
  fixedBox.shapeColor = "green";
  movingBox.shapeColor = "green";
  // fixedBox.debug = true;
  // movingBox.debug = true;
}

function draw() {
  background(255, 255, 255);
  movingBox.x = mouseX;
  movingBox.y = mouseY;
  // console.log((movingBox.width + fixedBox.width) / 2);
  // console.log(movingBox.x - fixedBox.x);
  // console.log(fixedBox.x - movingBox.x);

  console.log((movingBox.height + fixedBox.height) / 2);
  // console.log(movingBox.y - fixedBox.y);
  // console.log(fixedBox.y - movingBox.y);

  if (movingBox.x - fixedBox.x < (movingBox.width + fixedBox.width) / 2 &&
    fixedBox.x - movingBox.x < (movingBox.width + fixedBox.width) / 2 &&
    movingBox.y - fixedBox.y < (movingBox.height + fixedBox.height) / 2 &&
    fixedBox.y - movingBox.y < (movingBox.height + fixedBox.height) / 2) {
    fixedBox.shapeColor = "red";
    movingBox.shapeColor = "red";
  }
  else {
    fixedBox.shapeColor = "green";
    movingBox.shapeColor = "green";
  }

  drawSprites();
}