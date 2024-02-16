// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTreasure.js

function makeTreasure(whichId, whichSrc, whichX, whichY)
{
    let treasure = ce('img');
    treasure.id = whichId;
    treasure.title = whichId;
    treasure.src = whichSrc;
    treasure.style.position = 'absolute';
    treasure.style.left = whichX + 'px';
    treasure.style.top = whichY + 'px';
    treasure.style.zIndex = 3000;
    ba(treasure);
}

