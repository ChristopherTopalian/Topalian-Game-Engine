// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// calculateDistanceTraveled.js

function calculateDistanceTraveled()
{
    // calculate distance moved in current frame
    let distanceX = Math.abs(ourPlayer.x - playerPrevX);

    let distanceY = Math.abs(ourPlayer.y - playerPrevY);

    // player previous pos
    playerPrevX = ourPlayer.x;
    playerPrevY = ourPlayer.y;

    // update total distance traveled
    distanceTraveled += Math.sqrt(distanceX ** 2 + distanceY ** 2);
}

