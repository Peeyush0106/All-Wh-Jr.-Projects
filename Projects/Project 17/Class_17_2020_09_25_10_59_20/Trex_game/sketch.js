var trex, trex_running, edges;
var groundImage, ground, invisibleGround;
var score;
var cloud, cloudImage, obstacle, obstacleImage, cloudImageNumber;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  cloudImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);
  score = 0;
  // creating trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  ground = createSprite(200, 175);
  ground.addImage(groundImage);
  invisibleGround = createSprite(300, 190, 600, 10);
  invisibleGround.visible = false;
  edges = createEdgeSprites();

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw() {
  //set background color 
  background(160);
  
  console.log(obstacleImage);
  
  spawnClouds();

  // score += frameRate/30;

  ground.velocityX = -1 * (5 + (3 * score / 2));

  //logging the y position of the trex
  console.log(trex.y)

  //reset the ground
  if (ground.x < 200) {
    ground.x = ground.width / 2;
  }


  //jump when space key is pressed
  if (keyDown("space") || keyDown("up")) {
    if (trex.y > 160) {
      trex.velocityY = -10;
    }
  }

  trex.velocityY = trex.velocityY + 0.5;

  //stop trex from falling down
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloudY = random(80, 110);
    cloud = createSprite(620, cloudY);
    cloud.addImage(cloudImage);
    cloud.scale = random(0.4, 0.7);
    cloud.setVelocity(random(-5, -8), random(-2.3, 0));
  }
}
