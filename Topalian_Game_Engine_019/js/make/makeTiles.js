// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTiles.js

// make Tiles by specifying the amount of rows and columns for a Background
function makeTiles(theTexture, rows, columns, xPos, yPos, sizeX, sizeY)
{
    let startingPosition = xPos;

    // rows
    for (let j = 0; j < rows; j++)
    {
        // correct x position by subtracting the sizeX
        xPos -= sizeX;

        // columns
        for (let x = 0; x < columns; x++)
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
            makeTile.style.color = "rgb(255, 255, 255)";
            makeTile.style.zIndex = "1";
            makeTile.style.fontFamily = "tahoma";
            makeTile.style.fontWeight = "bold";
            makeTile.style.fontSize = "25px";
            makeTile.style.textAlign = "center";
            makeTile.style.background = "rgb(0, 0, 0)";
            ba(makeTile);
        }
        xPos = startingPosition;
        
        yPos += sizeY;
    }
}

