// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// checkPlayerMovement.js

function checkPlayerMovement()
{
    // store movement state
    let isPlayerMovingLocal = ourPlayer.x !== playerPrevX || ourPlayer.y !== playerPrevY;

    // return movement state
    return isPlayerMovingLocal;
}

