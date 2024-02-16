// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// isPlayerMoving.js

function isPlayerMoving()
{
    // is player moving
    let movingOrNot = checkPlayerMovement();

    if (movingOrNot)
    {
        if (ge('isMovingDiv'))
        {
            calculateDistanceTraveled();

            ge('isMovingDiv').innerHTML = 'Motion';

            ge('isMovingDiv').style.color = 'rgb(0, 255, 255)';

            if (ge('distanceTraveledDiv'))
            {
                ge('distanceTraveledDiv').innerHTML = 'Distance' + '<br>' + distanceTraveled.toFixed(0);
            }
        }
    }
    else
    {
        if (ge('isMovingDiv'))
        {
            ge('isMovingDiv').innerHTML = 'Motion';

            ge('isMovingDiv').style.color = 'rgb(255, 255, 255)';
        }
    }
}

