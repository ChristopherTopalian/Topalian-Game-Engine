// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// worldVariables.js

let ourPlayer =
{
    x: 100,
    y: 200,
    width: 50,
    height: 100,
    speedMultiplier: 2,
    id: 'thePlayer',
    playerColor: 'rgb(73, 100, 150)',
    texture: 'url("media/textures/player001.png")',
    texturePos: '0% 0%',
    velocityY: 0,
};

//-//

let backgroundSizeX = 250000;

let backgroundSizeY = 250000;

//-//

let collisionColor001 = "rgb(0, 255, 255)";

let collisionColor002 = "rgb(170, 170, 170)";

// initial X position
let playerPrevX = 0;

// initial Y position
let playerPrevY = 0;

// distance traveled by player
let distanceTraveled = 0;

// initial player speed
let playerSpeed = 0;

