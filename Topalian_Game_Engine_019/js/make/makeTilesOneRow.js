// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTilesOneRow.js

// make Tiles in one row for a Background
function makeTilesOneRow(theTexture, howManyX, xPos, yPos, sizeX, sizeY)
{
    // correct x position by subtracting the sizeX
    xPos -= sizeX;

    for (let x = 0; x < howManyX; x++)
    {
        // add the sizeX to xPos
        xPos = xPos + sizeX;

        let makeTile = ce("img");
        makeTile.src = theTexture;
        makeTile.style.position = "absolute";
        makeTile.style.left = xPos;
        makeTile.style.top = yPos;
        makeTile.style.width = sizeX;
        makeTile.style.height = sizeY;
        makeTile.style.background = "rgb(0, 0, 0)";
        makeTile.style.zIndex = "1";
        makeTile.style.fontFamily = "tahoma";
        makeTile.style.fontWeight = "bold";
        makeTile.style.fontSize = "25px";
        makeTile.style.color = "rgb(255, 255, 255)";
        makeTile.style.textAlign = "center";
        ba(makeTile);
    }
}

