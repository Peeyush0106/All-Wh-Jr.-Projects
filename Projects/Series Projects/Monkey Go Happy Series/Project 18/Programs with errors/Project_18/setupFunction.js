function doSetup()
{
  // The setup for all the globally defined variables and other things
  ground = createSprite(200, 325);
  ground.width = 800;
  ground.y = 400 - (ground.height / 2);
  
  forest = createSprite(200, 325);
  forest.width = 800;
  
  monkeyHand = createSprite();
  monkeyHand.setAnimation("monkey_jump_hand");
  monkeyHand.scale = 0.1;
  monkeyHand.rotation = 180;
  
  reset = createSprite(200, 275);
  reset.visible = false;
  
  monkey = createSprite(100, 180);
  monkey.scale = 0.1;
  
  monkeyAutomatedCollider = createSprite(0, 0, 65, 305);
  monkeyAutomatedCollider.visible = false;
  monkeyAutomatedColliderMonkeyXAddNumber;
  
  score = 0;
  time = 0;
  PLAY = ["Solo", "Automated"];
  END = 0;
  gameState = "notStarted";
  
  stones = createGroup();
  bananas = createGroup();
  
  textSize(20);
  fill("black");
  
  singlePlayerButton = createSprite(130, 220);
  singlePlayerButton.setAnimation("single_player");
  singlePlayerButton.scale = 1.7;
  automatedPlayingButton = createSprite(270, 220);
  automatedPlayingButton.setAnimation("automated_gaming_mode");
  automatedPlayingButton.scale = 1.7;
}
function spawnBananas()
{
  if(World.frameCount % 110 === 0)
  {
    //Spawn the bananas when the condition is true
    bananas.destroyEach();
    var bananaY = random(190, 290);
    var banana = createSprite(450, bananaY);
    banana.setAnimation("banana");
    banana.scale = 0.1;
    bananas.add(banana);
    
    banana.velocityY += 0.5;
    
    monkeyAutomatedColliderMonkeyXAddNumber = random(70, 90);
  }
}

function spawnStones()
{
  if(World.frameCount % 180 === 0)
  {
    //Spawn the stones when the condition is true
    var stone = createSprite(500, 200);
    stone.setAnimation("stone");
    stone.scale = 0.1;
    stone.setCollider("circle", 0, 0, 105);
    stone.rotationSpeed = ground.velocityX * 5 / 3;
    stone.velocityY += 10;
    stones.add(stone);
    monkeyAutomatedColliderMonkeyXAddNumber = random(70, 90);
  }
}