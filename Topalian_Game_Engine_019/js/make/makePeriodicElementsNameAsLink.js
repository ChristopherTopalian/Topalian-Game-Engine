// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makePeriodicElementsNameAsLink.js

// shows the list of periodic elements in a div
function makePeriodicElementsNameAsLink(whichArray, xPos, yPos)
{
    let elementDiv = ce("div");
    elementDiv.style.position = "absolute";
    elementDiv.style.left = xPos + "px";
    elementDiv.style.top = yPos + "px";
    elementDiv.style.paddingLeft = 10 + "px";
    elementDiv.style.paddingRight = 10 + "px";
    elementDiv.style.paddingTop = 10 + "px";
    elementDiv.style.paddingBottom = 14 + "px";
    elementDiv.style.zIndex = 2;
    elementDiv.style.borderStyle = "solid";
    elementDiv.style.borderColor = "rgb(255, 255, 255)";
    elementDiv.style.borderRadius = "4px";
    elementDiv.style.backgroundColor = "rgb(0, 0, 0)";
    elementDiv.style.fontFamily = "Tahoma";
    elementDiv.style.fontSize = 20 + "px";
    elementDiv.style.fontWeight = "bold";
    elementDiv.style.color = "rgb(255, 255, 255)";
    elementDiv.style.textAlign = "right";
    elementDiv.id = "periodicTableElements";
    ba(elementDiv);

    let output = "";

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].tag == "chemicalElement")
        {
            output += '<a href = \'' + whichArray[x].url + '\' target = "_blank"> '+whichArray[x].name+'</a>';

            output += '&nbsp';

            output += whichArray[x].number;

            output += '<br>';
        }
    }
    elementDiv.innerHTML = output;
}

