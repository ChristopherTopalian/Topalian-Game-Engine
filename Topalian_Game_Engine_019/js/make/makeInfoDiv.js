// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInfoDiv.js

function makeInfoDiv()
{
    let infoDiv = ce('div');
    infoDiv.textContent = 'Info';
    infoDiv.id = 'infoDiv';
    infoDiv.className = 'textStyle001';
    infoDiv.title = 'makeInfoDiv()';
    infoDiv.style.position = 'fixed';
    infoDiv.style.right = '0px';
    infoDiv.style.bottom = '25px';
    infoDiv.style.zIndex = 1000;
    infoDiv.style.textShadow = '1px 1px #000000';
    ba(infoDiv);
}

