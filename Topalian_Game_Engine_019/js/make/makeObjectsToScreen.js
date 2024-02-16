// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeObjectsToScreen.js

function makeObjectsToScreen(whichArray)
{
    for (let x = 0; x < whichArray.length; x++)
    {
        let theElement = ce(whichArray[x].type);

        theElement.style.position = whichArray[x].positionType;

        theElement.style.left = whichArray[x].x + "px";

        theElement.style.top = whichArray[x].y + "px";

        theElement.style.width = whichArray[x].width + "px";

        theElement.style.height = whichArray[x].height + "px";

        theElement.id = whichArray[x].id;

        theElement.innerHTML = whichArray[x].text;

        theElement.title = whichArray[x].name;

        theElement.className = whichArray[x].styleName;

        ba(theElement);
    }
}

