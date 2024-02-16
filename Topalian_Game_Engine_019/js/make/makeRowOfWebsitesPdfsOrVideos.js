// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeRowOfWebsitesPdfsOrVideos.js

// makes iframes in a row to add content to our level
function makeRowOfWebsitesPdfsOrVideos(whichArray, xPos, yPos, sizeX, sizeY)
{
    // correct x position by subtracting the sizeX
    xPos -= sizeX;

    for (let x = 0; x < whichArray.length; x++)
    {
        // add sizeX to xPos and add an offset
        xPos = xPos + sizeX + 40;

        let theFrame = ce("iframe");
        theFrame.src = whichArray[x].url;
        theFrame.style.position = "absolute";
        theFrame.style.left = xPos;
        theFrame.style.top = yPos;
        theFrame.style.width = sizeX;
        theFrame.style.height = sizeY;
        theFrame.style.zIndex = "2";
        theFrame.style.background = "rgb(0, 0, 0)";
        theFrame.style.fontFamily = "tahoma";
        theFrame.style.fontWeight = "bold";
        theFrame.style.fontSize = "20px";
        theFrame.style.color = "rgb(255, 255, 255)";
        theFrame.style.textAlign = "center";
        ba(theFrame);
    }
}

