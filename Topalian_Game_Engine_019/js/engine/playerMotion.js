// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// playerMotion.js

// player Movement Controls
function playerMotion()
{
    if (keyboard[keyboard.LEFT])
    {
        movePlayer(-1, 0);

        ge(ourPlayer.id).style.transform = 'scaleX(-1)';
    }
    
    if (keyboard[keyboard.RIGHT])
    {
        movePlayer(1, 0);

        ge(ourPlayer.id).style.transform = 'scaleX(1)';
    }
    
    if (keyboard[keyboard.UP])
    {
        movePlayer(0, -1);
    }
    
    if (keyboard[keyboard.DOWN])
    {
        movePlayer(0, 1);
    }

    // boost speed
    if (keyboard[keyboard.LEFT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(-2, 0);
    }

    if (keyboard[keyboard.RIGHT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(2, 0);
    }

    if (keyboard[keyboard.UP] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, -2);
    }

    if (keyboard[keyboard.DOWN] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, 2);
    }
}

