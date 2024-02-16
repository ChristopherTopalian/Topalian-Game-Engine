// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// detect if player crossed a specific x or y coordinate
function wasLineCrossed()
{
    // if player object exists
    if (ge(ourPlayer.id))
    {
        // if player is located at a certain y position
        if (getPos(ourPlayer.id).y > 1700 - 20 &&
        getPos(ourPlayer.id).y < 1700 + 20)
        {
            audioPlay("sfx_crystal_bell_001", 1.0);

            ge('infoDiv').innerHTML = "1700 Y Crossed<br>Hydrogen";

            ge('minimap').style.borderColor = collisionColor001;

            // creates only one
            if (lineAt1700Flag == 0)
            {
                audioPlay("sfx_zap_001", 1.0);

                makePeriodicElement(dataPeriodicElements, "Hydrogen", 50, 1700);
            }

            setTimeout(function()
            {
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);

            lineAt1700Flag = 1;
        }

        // if player is located at a certain y position
        if (getPos(ourPlayer.id).y > 1900 - 20 && getPos(ourPlayer.id).y < 1900 + 20)
        {
            audioPlay("sfx_crystal_bell_001", 1.0);

            ge('minimap').style.borderColor = collisionColor001;

            ge('infoDiv').innerHTML = "1900 Y Crossed<br>Helium";

            // creates only one
            if (lineAt1900Flag == 0)
            {
                audioPlay("sfx_zap_001", 1.0);

                makePeriodicElement(dataPeriodicElements, "Helium", 50, 1900);
            }

            setTimeout(function()
            {
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);

            lineAt1900Flag = 1;
        }

        // if player is located at a certain y position
        if (getPos(ourPlayer.id).y > 2830 - 20 && getPos(ourPlayer.id).y < 2830 + 20)
        {
            audioPlay("sfx_crystal_bell_001", 1.0);

            ge('infoDiv').innerHTML = "2830 Y Crossed";

            ge('minimap').style.borderColor = collisionColor001;

            // creates only one
            if (lineAt2830Flag == 0)
            {
                audioPlay("sfx_crystal_bell_001", 1.0);

                audioPlay("sfx_zap_001", 1.0);

                makePeriodicElements(dataPeriodicElements, 250, 2832, 300);
            }

            setTimeout(function()
            {
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);

            lineAt2830Flag = 1;
        }

        // if player is located at a certain y position
        if (getPos(ourPlayer.id).y > 5730 - 20 && getPos(ourPlayer.id).y < 5730 + 20)
        {
            audioPlay("sfx_crystal_bell_001", 1.0);

            ge('infoDiv').innerHTML = "5730 Y Crossed";

            ge('minimap').style.borderColor = collisionColor001;

            // creates only one
            if (lineAt5730Flag == 0)
            {
                audioPlay("sfx_crystal_bell_001", 1.0);

                audioPlay("sfx_zap_001", 1.0);

                makePeriodicElementsNameAsLink(dataPeriodicElements, 800, 5730);
            }

            setTimeout(function()
            {
                ge('minimap').style.borderColor = 'rgb(255, 255, 255)';
            }, 500);

            lineAt5730Flag = 1;
        }
    }
}

