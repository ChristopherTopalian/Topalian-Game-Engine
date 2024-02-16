// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// collision.js

let collidedElementId;

let isColliding = false;

function collision(obj1, obj2)
{
    // if both objects exist
    if (ge(obj1) && ge(obj2))
    {
        // get collision box of obj1
        let theRect1 = ge(obj1).getBoundingClientRect();

        // get collision box of obj2
        let theRect2 = ge(obj2).getBoundingClientRect();

        let collidedAny = (
            theRect1.right >= theRect2.left &&
            theRect1.left <= theRect2.right &&
            theRect1.bottom >= theRect2.top &&
            theRect1.top <= theRect2.bottom
        );

        // collided left side
        let collidedLeft = theRect1.left > theRect2.left || theRect1.right > theRect2.right;

        // collided right side
        let collidedRight = theRect1.left < theRect2.left || theRect1.right < theRect2.right;

        // collided top side
        let collidedTop = theRect1.top > theRect2.top || theRect1.bottom > theRect2.bottom;

        // collided bottom side
        let collidedBottom = theRect1.top < theRect2.top || theRect1.bottom < theRect2.bottom;

        if (collidedAny)
        {
            isColliding = true;

            collidedElementId = obj2;

            audioPlay('sfx_blip_001', 1.0);

            if (collidedLeft)
            {
                movePlayer(1,0);
            }
            if (collidedRight)
            {
                movePlayer(-1,0);
            }
            if (collidedTop)
            {
                movePlayer(0,1);
            }
            if (collidedBottom)
            {
                movePlayer(0,-1);
            }
            return true;
        }
    }

    isColliding = false;

    // if no collision
    return null;
}

