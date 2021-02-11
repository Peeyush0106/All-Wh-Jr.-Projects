  
  //When the player wants to control the game himself
  if(gameState === PLAY[0])
  {
    //Set some properties
    time += Math.round((World.frameRate/30));
    monkey.visible = true;
    monkeyHand.visible = true;
    singlePlayerButton.visible = false;
    automatedPlayingButton.visible = false;
    // Spawn the objects
    spawnStones();
    spawnBananas();
    
    if(ground.velocityX === 0)
    {
      monkey.setAnimation("monkey_jump");
    }
    if(keyDown("space") || keyDown("up"))
    {
      if(monkey.y > 320)
      {
        monkey.velocityY -= 11.3;
      }
    }
    else
    {
      monkey.setAnimation("monkey");
    }
    
    if(monkey.isTouching(stones))
    {
      gameState = END;
    }
    
    if(monkey.y < 320 || ground.velocityX === 0)
    {
      monkey.setAnimation("monkey_jump");
      monkeyHand.visible = true;
      monkeyHand.rotationSpeed = 16;
    }else
    {
      monkey.setAnimation("monkey");
      monkeyHand.visible = false;
    }
    if(keyWentDown("space") || keyWentDown("up"))
    {
      monkeyHand.pointTo(190, 390);
    }
    
    if(ground.velocityX === 0)
    {
      bananas.setVelocityYEach(0);
    }
    
    if(monkey.isTouching(bananas) || monkeyHand.isTouching(bananas))
    {
      bananas.destroyEach();
      score += 5;
    }
    
  }
