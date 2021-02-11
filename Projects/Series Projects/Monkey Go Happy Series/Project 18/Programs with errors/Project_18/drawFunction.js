//Call all the functions and set the background
function draw() {
  background("white");
  //External functions
  setPropertiesOfObjects();
  controlGameWithGameStates();
  // Draw the sprites
  drawSprites();
}