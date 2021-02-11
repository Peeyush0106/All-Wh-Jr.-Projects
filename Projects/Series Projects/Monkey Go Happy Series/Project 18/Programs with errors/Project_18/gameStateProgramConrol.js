
function controlGameWithGameStates()
{
  //When the game is not yet started
  if(gameState === "notStarted")
  {
    waitageTime += 1;
    ground.velocityX = 0;
    // Print all the texts
    textSize(15);
    text('Press these buttons to start playing, control the monkey with'
    +' the arrow keys and spacebar if you are not in '
    +'automated gaimng mode.'
    +' Else, if you are, enjoy watching!', 5, 290, 395);
    textSize(18);
    fill("black");
    text("Play with", 85, 195, 180, 235);
    text("Controlling", 85, 220, 180, 235);
    textSize(13);
    text("Enter Automated ", 222.5, 205, 200);
    text("Gaming mode", 222.5, 230, 200);
    textSize(15);
    //Set some properties for the objects when game is not started
    monkey.visible = false;
    monkeyHand.visible = false;
    singlePlayerButton.visible = true;
    automatedPlayingButton.visible = true;
    reset.visible = false;
    score = 0;
    time = 0;
    //Check which button is pressed to start the game
    if(mousePressedOver(singlePlayerButton))
    {
      gameState = PLAY[0];
    }
    
    if(mousePressedOver(automatedPlayingButton))
    {
      gameState = PLAY[1];
    }

  }
  
  //Do something when the game state is not equal to not started
  if(gameState != "notStarted")
  {
    //Write some texts when the game state is not equal to not started
    textSize(20);
    fill("black");
    text("Survival Time: " + time, 100, 50);
    text("Score: " + score, 100, 120);
 }
  
   
  // When the game has been ended, perform the following actions
  if(gameState === END)
  {
    //Player lost!
    monkey.setAnimation("monkey_jump");
    monkey.rotation = -120;
    monkey.y += 0.4;
    monkeyHand.visible = true;
    monkeyHand.rotationSpeed = 0;
    ground.velocityX = 0;
    stones.setVelocityXEach(-14);
    bananas.setVelocityXEach(-8);
    text("Game Over! Don't you want to play again?"+
    "                                  :D", 15, 195, 385);
    reset.visible = true;
    reset.setAnimation("reset");
    if(mousePressedOver(reset))
    {
      gameState = "notStarted";
      monkey.rotation = 0;
    }
  }
}