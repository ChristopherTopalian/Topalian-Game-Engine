// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeRowOfElements.js

// makes divs in a row
function makeRowOfElements(whichArray, xPos, yPos, sizeX)
{
    // correct x position by subtracting sizeX
    xPos -= sizeX;

    for (let x = 0; x < whichArray.length; x++)
    {
        // add sizeX to xPos and add an offset
        xPos = xPos + sizeX + 75;

        //-//

        let theDiv = ce("div");
        theDiv.style.position = "absolute";
        theDiv.style.left = xPos;
        theDiv.style.top = yPos;
        theDiv.style.width = sizeX;
        theDiv.style.zIndex = "2";
        theDiv.style.padding = "25px";
        theDiv.style.borderStyle = "solid";
        theDiv.style.borderWidth = "2px";
        theDiv.style.borderColor = "rgb(255, 255, 255)";
        theDiv.style.background = "rgb(0, 0, 0)";
        theDiv.style.fontFamily = "tahoma";
        theDiv.style.fontWeight = "bold";
        theDiv.style.fontSize = "25px";
        theDiv.style.color = "rgb(255, 255, 255)";
        theDiv.style.textAlign = "center";
        theDiv.style.lineHeight = 30 + "px";
        theDiv.innerHTML = whichArray[x].name + "<br>";
        theDiv.innerHTML += whichArray[x].number + "<br>";
        theDiv.innerHTML += '<a href = \'' + whichArray[x].url + '\' target = "_blank"> Link </a>';
        ba(theDiv);
    }
}

