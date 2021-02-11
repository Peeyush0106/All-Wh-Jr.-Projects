var trex, trex_running, edges;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(400,400);
  trex = createSprite(200,350,20,50);  
  trex.addAnimation("running",trex_running);
  edges = createEdgeSprites();
}


function draw(){
  background("white");
  
  if(keyDown("space") || keyDown("up")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(edges[3])
  drawSprites();
}