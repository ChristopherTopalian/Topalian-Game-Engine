// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeYPosDiv.js

function makeYPosDiv()
{
    let yPosDiv = ce('div');
    yPosDiv.textContent = 'y';
    yPosDiv.id = 'yPosDiv';
    yPosDiv.className = 'textStyle001';
    yPosDiv.title = 'makeYPosDiv()';
    yPosDiv.style.position = 'fixed';
    yPosDiv.style.right = '0px';
    yPosDiv.style.bottom = '350px';
    yPosDiv.style.zIndex = 1000;
    yPosDiv.style.color = 'rgb(30, 255, 30)';
    yPosDiv.style.textShadow = '1px 1px #000000';
    ba(yPosDiv);
}

