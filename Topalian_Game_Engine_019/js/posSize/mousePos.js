// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// mousePos.js

let mouseClick = 0;

function mousePos()
{
    mouseClick += 1;

    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let mousePos = "Mouse" + "<br>" + "X " + mouseX + "<br>" + "Y " + mouseY;

    if (ge("infoMousePositionId"))
    {
        ge("infoMousePositionId").innerHTML = mousePos;
    }

    return mousePos;
}

