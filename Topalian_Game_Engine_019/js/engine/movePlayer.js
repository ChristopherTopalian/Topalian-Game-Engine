// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// movePlayer.js

function movePlayer(xPos, yPos)
{
    if (ge(ourPlayer.id))
    {
        ourPlayer.x += (xPos || 0) * ourPlayer.speedMultiplier;

        ourPlayer.y += (yPos || 0) * ourPlayer.speedMultiplier;

         ge(ourPlayer.id).style.left = ourPlayer.x + "px";

         ge(ourPlayer.id).style.top = ourPlayer.y + "px";
    }
}

