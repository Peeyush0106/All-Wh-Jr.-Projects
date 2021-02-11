//Declare all global variables
var ground, monkeyHand, reset,
    monkey, monkeyAutomatedCollider, gameState,
    monkeyAutomatedColliderMonkeyXAddNumber,
    waitageTime, score, time, PLAY, END, stones, bananas, singlePlayerButton, automatedPlayingButton;

var groundImage, monkeyHandImage, resetImage, monkeyImage, singlePlayerButtonImage, automatedPlayerButtonImage, bananaImage, stoneImage, monkeyJumpImage;

function preload() {
    groundImage = loadImage("ground.png");
    monkeyHandImage = loadImage("monkey_jump_hand.png");
    resetImage = loadImage("reset.png");
    monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
    singlePlayerButtonImage = loadImage("single_player.png");
    automatedPlayerButtonImage = loadImage("automated_gaming_mode.png");
    bananaImage = loadImage("banana.png");
    stoneImage = loadImage("stone.png");
    monkeyJumpImage = loadImage("monkey_jump.png");
}

function setup() {
    createCanvas(400, 400);
    // The setup for all the globally defined variables and other things
    groundImage.width = 800;
    groundImage.height = 80;
    ground = createSprite(200, 200);    
    ground.addImage("ground", groundImage);
    ground.width = 800;
    ground.height = 80;
    ground.y = 300;

    groundImage.width = 800;
    groundImage.height = 80;
    ground = createSprite(200, 200);    
    ground.addImage("ground", groundImage);
    ground.width = 800;
    ground.height = 80;
    ground.y = 300;
}

function draw() {
    background("lightblue");
    //External functions
    // Draw the sprites
    drawSprites();
}

