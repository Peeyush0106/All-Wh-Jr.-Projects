var ball, paddle, ballImage, paddleImage;

function preload()
{
    ballImage = loadImage("ball.png");
    paddleImage = loadImage("paddle.png");
}

function setup()
{
    createCanvas(400, 400);
    ball = createSprite(200, 200);
    ball.addImage(ballImage);
    paddle = createSprite(340, 200);
    paddle.addImage(paddleImage);
}

function draw()
{
    background(240);
    drawSprites();
}