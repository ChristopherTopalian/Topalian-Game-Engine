// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// wasObjectCrossed.js

let carbonFlag = 0;
let nitrogenFlag = 0;

let lineYBoxThreeFlag = 0;
let lineYBoxFourFlag = 0;
let lineAt1700Flag = 0;
let lineAt1900Flag = 0;
let lineAt2830Flag = 0;
let lineAt5730Flag = 0;

// detect if player crossed a specified object's x or y coordinate
function wasObjectLineCrossed(whichPlayer)
{
    // if objects exist
    if (ge(whichPlayer.id) &&
        ge('boxCarbonTrigger'))
    {
        // if player is located at a certain x position, compared with boxCarbonTrigger
        if (getPos(whichPlayer.id).x > getPos("boxCarbonTrigger").x - 20 &&
        getPos(whichPlayer.id).x < getPos("boxCarbonTrigger").x + 20)
        {
            audioPlay("sfx_crystal_bell_001", 1.0);

            ge("boxCarbonTrigger").style.backgroundColor = collisionColor002;

            // creates only one
            if (carbonFlag == 0)
            {
                audioPlay("sfx_zap_001", 1.0);

                makePeriodicElement(dataPeriodicElements, "Carbon", getPos("boxCarbonTrigger").x, getPos("boxCarbonTrigger").y);

                carbonFlag = 1;
            }

            ge('minimap').style.borderColor = collisionColor001;

            ge('infoDiv').innerHTML = "boxCarbonTrigger X Crossed";

            setTimeout(function()
            {
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';

                ge("boxCarbonTrigger").style.backgroundColor = "rgb(0, 0, 0)";
            }, 500);
        }

        // if objects exist
        if (ge(whichPlayer.id) &&
            ge("boxNitrogenTrigger"))
        {
            // if player is located at a certain x position, compared with boxNitrogenTrigger
            if (getPos(whichPlayer.id).x > getPos("boxNitrogenTrigger").x - 20 && getPos(whichPlayer.id).x < getPos("boxNitrogenTrigger").x + 20)
            {
                audioPlay("sfx_crystal_bell_001", 1.0);

                ge('minimap').style.borderColor = collisionColor001;

                ge('infoDiv').innerHTML = "boxNitrogenTrigger X Crossed";

                ge("boxNitrogenTrigger").style.backgroundColor = collisionColor002;

                // creates only one
                if (nitrogenFlag == 0)
                {
                    audioPlay("sfx_zap_001", 1.0);

                    makePeriodicElement(dataPeriodicElements, "Nitrogen", getPos("boxNitrogenTrigger").x, getPos("boxNitrogenTrigger").y);

                    nitrogenFlag = 1;
                }

                setTimeout(function()
                {
                    ge("boxNitrogenTrigger").style.backgroundColor = "rgb(0, 0, 0)";

                    ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
                }, 500);
            }
        }

        // if objects exist
        if (ge(whichPlayer.id) &&
            ge("boxSilverTrigger"))
        {
            // if player is located at a certain position, compared with boxSilverTrigger
            if (getPos(whichPlayer.id).y > getPos("boxSilverTrigger").y - 20 && getPos(whichPlayer.id).y < getPos("boxSilverTrigger").y + 20)
            {
                audioPlay("sfx_crystal_bell_001", 1.0);

                ge('minimap').style.borderColor = collisionColor001;

                ge("boxSilverTrigger").style.backgroundColor = collisionColor002;

                ge('infoDiv').innerHTML= "boxSilverTrigger Y Crossed<br>SILVER";

                // creates only one
                if (lineYBoxThreeFlag == 0)
                {
                    audioPlay("sfx_zap_001", 1.0);

                    makePeriodicElement(dataPeriodicElements, "Silver", getPos("boxSilverTrigger").x, getPos("boxSilverTrigger").y);

                    lineYBoxThreeFlag = 1;
                }

                setTimeout(function()
                {
                    ge("boxSilverTrigger").style.backgroundColor = "rgb(0, 0, 0)";

                    ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
                }, 500);
            }
        }

        // if objects exist
        if (ge(whichPlayer.id) &&
            ge("boxGoldTrigger"))
        {
            // if player is located at a certain position, compared with boxGoldTrigger
            if (getPos(whichPlayer.id).y > getPos("boxGoldTrigger").y - 20 &&
            getPos(whichPlayer.id).y < getPos("boxGoldTrigger").y + 20)
            {
                audioPlay("sfx_crystal_bell_001", 1.0);

                ge('minimap').style.borderColor = collisionColor001;

                ge("boxGoldTrigger").style.backgroundColor = collisionColor002;

                ge('infoDiv').innerHTML = "boxGoldTrigger Y Crossed<br>GOLD";

                // creates only one
                if (lineYBoxFourFlag == 0)
                {
                    audioPlay("sfx_zap_001", 1.0);

                    makePeriodicElement(dataPeriodicElements, "Gold", getPos("boxGoldTrigger").x, getPos("boxGoldTrigger").y);

                    lineYBoxFourFlag = 1;
                }

                setTimeout(function()
                {
                    ge("boxGoldTrigger").style.backgroundColor = "rgb(0, 0, 0)";

                    ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
                }, 500);
            }
        }
    }
}

