// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// updateSpeedometer.js

function updateSpeedometer()
{
    // calculate player speed based on change in pos
    let deltaX = ourPlayer.x - playerPrevX;

    let deltaY = ourPlayer.y - playerPrevY;

    let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    // if game is running at 60fps
    playerSpeed = distance * 60;

    return playerSpeed;
}

