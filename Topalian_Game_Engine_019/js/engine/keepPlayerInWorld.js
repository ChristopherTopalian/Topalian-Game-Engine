// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// keepPlayerInWorld.js

function keepPlayerInWorld()
{
    if (ge(ourPlayer.id))
    {
        // if left
        if (ourPlayer.x <= 0)
        {
            ourPlayer.x = 0;
        }

        // if right
        if (ourPlayer.x > backgroundSizeX)
        {
            ourPlayer.x = backgroundSizeX;
        }

        // if top
        if (ourPlayer.y <= 0)
        {
            ourPlayer.y = 0;
        }

        // if bottom
        if (ourPlayer.y >= backgroundSizeY)
        {
            ourPlayer.y = backgroundSizeY;
        }
    }
}

