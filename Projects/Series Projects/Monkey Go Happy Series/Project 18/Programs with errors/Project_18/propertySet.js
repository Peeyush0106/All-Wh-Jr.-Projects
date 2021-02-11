function setPropertiesOfObjects()
{
  // Set the properties of the objects
  stones.setVelocityXEach((ground.velocityX * 5) / 8);
  bananas.setVelocityXEach((ground.velocityX * 5) / 8);
  monkeyHand.setCollider("rectangle", 0, 0, 20, 25, monkeyHand.rotation);
  monkey.collide(ground);
  monkeyHand.x = monkey.x + 10;
  monkeyHand.y = monkey.y - 5;
  monkeyAutomatedCollider.x = monkey.x 
  + monkeyAutomatedColliderMonkeyXAddNumber;
  monkeyAutomatedCollider.y = monkey.y;
  if(ground.velocityX <= 0 && ground.velocityX > -23)
  {
    ground.velocityX = -1 * ((3 + 2 * time / 50));
  }
  stones.collide(ground);
  bananas.collide(ground);
  monkey.velocityY += 0.8;
  if(ground.x < 100)
  {
    ground.x = 300;
  }

}