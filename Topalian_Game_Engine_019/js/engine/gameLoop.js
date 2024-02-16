// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// gameLoop.js

function gameLoop()
{
    playerMotion();

    cameraFollowsPlayer();

    // gravity(9.8);

    //-//

    // text update of player position
    if (ge('xPosDiv') && ge('yPosDiv'))
    {
        ge('xPosDiv').innerHTML = ourPlayer.x;
        ge('yPosDiv').innerHTML = ourPlayer.y;
    }

    //-//

    if (ge('infoDiv'))
    {
        if (collidedWithClass(ourPlayer.id, 'boxStyle001'))
        {
            ge('infoDiv').innerHTML = collidedElementId;
        }
        else
        {
            ge('infoDiv').innerHTML = 'No Collision';
        }
    }

    //-//

    // minimap player update
    if (ge('minimap') && ge('minimapPlayer'))
    {
        updateMinimapPlayer();
    }

    //-//

    // minimap copper treasure update
    if (ge('minimap') && ge('treasureCopper'))
    {
        // id of icon, id of element we are tracking
        updateMinimapTreasure('minimapCopperIcon', 'treasureCopper');
    }

    //-//

    // minimap silver treasure update
    if (ge('minimap') && ge('treasureSilver'))
    {
        // id of icon, id of element we are tracking
        updateMinimapTreasure('minimapSilverIcon', 'treasureSilver');
    }

    //-//

    // update speed
    if (ge('speedometerDiv'))
    {
        ge('speedometerDiv').innerHTML = 'Speed' + '<br>' + updateSpeedometer().toFixed(3);
    }

    //-//

    isPlayerMoving();

    //-//

    if (ge('collisionInfoDiv'))
    {
        ge('collisionInfoDiv').innerHTML = collidedElementId;
    }

    //-//

    collision(ourPlayer.id, "floor1");
    collision(ourPlayer.id, "floor2");
    collision(ourPlayer.id, "floor3");

    collision(ourPlayer.id, "boxIron");
    collision(ourPlayer.id, "boxCopper");
    collision(ourPlayer.id, "boxSilver");
    collision(ourPlayer.id, "boxGold");

    //-//

    collisionTopSide(ourPlayer.id, "boxCollideTop");

    collisionBottomSide(ourPlayer.id, "boxCollideBottom");

    collisionLeftSide(ourPlayer.id, "boxCollideLeft");

    collisionRightSide(ourPlayer.id, "boxCollideRight");

    //-//

    wasObjectLineCrossed(ourPlayer);

    wasLineCrossed();
 
    //-//

    keepPlayerInWorld();

    requestAnimationFrame(gameLoop);
}

