// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeDistanceTraveledDiv.js

function makeDistanceTraveledDiv()
{
    let distanceTraveledDiv = ce('div');
    distanceTraveledDiv.id = 'distanceTraveledDiv';
    distanceTraveledDiv.className = 'textStyle001';
    distanceTraveledDiv.title = 'makeSpeedometer()';
    distanceTraveledDiv.style.position = 'fixed';
    distanceTraveledDiv.style.right = '0px';
    distanceTraveledDiv.style.bottom = '200px';
    distanceTraveledDiv.style.zIndex = 1000;
    distanceTraveledDiv.style.textAlign = 'right';
    distanceTraveledDiv.innerHTML = 'Distance <br>0';
    distanceTraveledDiv.style.textShadow = '1px 1px #000000';
    ba(distanceTraveledDiv);
}

