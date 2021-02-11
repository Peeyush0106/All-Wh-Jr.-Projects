 // Perform some actions when the player is just seeing the game
 if(gameState === PLAY[1])
 {
   // Automated gaming mode has been entered
   monkey.visible = true;
   monkeyHand.visible = true;
   singlePlayerButton.visible = false;
   automatedPlayingButton.visible = false;
   
   // Spawn the objects
   spawnStones();
   spawnBananas();
   time += Math.round((World.frameRate/30));
   
   // Check for the conditions and perform the actions
   if(ground.velocityX === 0)
   {
     monkey.setAnimation("monkey_jump");
   }
   if(monkey.y < 320){
     monkey.setAnimation("monkey");
   }
   
   if(monkey.isTouching(stones))
   {
     gameState = END;
   }
   
   if(monkey.isTouching(bananas) || monkeyHand.isTouching(bananas))
   {
     bananas.destroyEach();
     score += 5;
   }
       
   if(monkeyAutomatedCollider.isTouching(stones) &&  monkey.y > 320)
   {
     monkey.velocityY = -11.3;
   }

   if(monkeyAutomatedCollider.isTouching(bananas) && monkey.y > 320)
   {
     monkey.velocityY = -11.3;
   }

   if(monkey.y < 320 || ground.velocityX === 0)
   {
     monkey.setAnimation("monkey_jump");
     monkeyHand.visible = true;
     monkeyHand.rotationSpeed = 16;
   }
   else
   {
     monkey.setAnimation("monkey");
     monkeyHand.visible = false;
   }
  
 }
