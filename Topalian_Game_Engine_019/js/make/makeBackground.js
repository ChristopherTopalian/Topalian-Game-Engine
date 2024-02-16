// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeBackground.js

function makeBackground()
{
    let theBackground = ce('div');
    theBackground.id = 'theBackgroundDimensions';
    theBackground.style.position = 'absolute';
    theBackground.style.left = '0px';
    theBackground.style.top = '0px';
    theBackground.style.width = backgroundSizeX + 'px';
    theBackground.style.height = backgroundSizeY + 'px';
    // theBackground.style.background = 'rgb(0, 0, 0)';
    theBackground.style.background = 'url("media/textures/stars-nice-edited_orig.png")';
    ba(theBackground);
}

