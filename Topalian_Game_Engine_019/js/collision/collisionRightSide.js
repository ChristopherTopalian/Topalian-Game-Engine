// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// collisionRightSide.js

// detects collisions from right side only
function collisionRightSide(obj1, obj2)
{
    if (ge(obj1) && ge(obj2))
    {
        let theRect1 = ge(obj1).getBoundingClientRect();

        let theRect2 = ge(obj2).getBoundingClientRect();

        let collided = !(theRect1.right < theRect2.left ||
        theRect1.left > theRect2.right ||
        theRect1.bottom < theRect2.top ||
        theRect1.top > theRect2.bottom);

        let collidedY1 = theRect1.left < theRect2.left || theRect1.right < theRect2.right;

        if (collided == true && collidedY1 != true)
        {
            audioPlay("sfx_blip_001", 1.0);

            ge('minimap').style.borderColor = collisionColor001;

            ge(obj2).style.backgroundColor = collisionColor002;

            collidedElementId = obj2;

            setTimeout(function()
            {
                ge(obj2).style.backgroundColor = "rgb(0, 0, 0)";

                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);
        }
    }
}

