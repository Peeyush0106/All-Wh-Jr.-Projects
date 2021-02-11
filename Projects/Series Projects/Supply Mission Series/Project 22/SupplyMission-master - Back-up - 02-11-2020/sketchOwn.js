const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground, pack_options, ground_options, copter_options;

var helicopterImage, helicopterImageX, helicopterImageY, packImage, packImageX, packImageY;

function preload() {
    helicopterImage = loadImage("helicopter.png");
    packImage = loadImage("package.png");
}

function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    pack_options = {
        restitution: 0.4, isStatic : false
    }
    ground_options = {
        isStatic: true
    }
    copter_options = {
        isStatic: true
    }
    // http://amrita.olabs.edu.in/
    pack = Bodies.circle(400, 200, 5, pack_options);
    ground = Bodies.rectangle(400, 675, 800, 50, ground_options);
    copter = Bodies.rectangle(400, 200, 100, 70, copter_options);

    Engine.run(engine);
    World.add(world, ground);
    World.add(world, pack);
    World.add(world, copter);

}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    // print("Pack X: " + pack.position.x);
    // print("Pack Y: " + pack.position.y);

    // pack = Bodies.circle(400, 200, 50, pack_options);
    // ground = Bodies.rectangle(400, 675, 800, 50, ground_options);
    // copter = Bodies.rectangle(400, 200, 100, 70, copter_options);

    // World.add(world, ground);
    // World.add(world, pack);
    // World.add(world, copter);

    helicopterImageX = (copter.position.x - (100 / 2));
    helicopterImageX = (copter.position.y - (70 / 2));

    packImageX = (pack.position.x - (100 / 2));
    // packImageY = ((pack.position.y - (70 / 2)) + 40);
    packImageY = pack.position.y;

    packImage.width = 80;
    packImage.height = 80;

    rect(ground.position.x, ground.position.y, 800, 50);
    image(helicopterImage, helicopterImageX, helicopterImageX);
    image(packImage, packImageX, packImageY);

    // rect(copter.position.x, copter.position.y, 100, 70);
    // ellipse(pack.position.x, pack.position.y, 50);
}

function keyPressed() {
    // print(keyCode);
    if (keyCode === DOWN_ARROW) {
        print("Down Arrow Pressed");
        pack.position.y = 200;
        // Matter.Body.setStaic(pack, false);
        // pack_options = {
            // restitution: 0.4, isStatic: false
        // }
        print(pack_options.isStatic);
    }
}

function print(logs) {
    console.log(logs);
}

// function displayObjectImagesAtCanter(imageName, centerX, centerY, assignedObjectRequiredWidth, assignedObjectRequiredHeight, imageScale) {
//     // imageName.width = imageScale * imageName.width;
//     // imageName.height = imageScale * imageName.height;
//     imageName.scale = imageScale;
//     image(imageName,
//         (centerX - (assignedObjectRequiredWidth / 2)),
//         centerY - (assignedObjectRequiredHeight / 2));
// }