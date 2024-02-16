// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeMousePosDiv.js

function makeMousePosDiv()
{
    let infoMousePosition = ce('div');
    infoMousePosition.textContent = 'Mouse Pos';
    infoMousePosition.id = 'infoMousePositionId';
    infoMousePosition.className = 'textStyle001';
    infoMousePosition.title = 'makeMousePosDiv()';
    infoMousePosition.style.position = 'fixed';
    infoMousePosition.style.right = '0px';
    infoMousePosition.style.bottom = '60px';
    infoMousePosition.style.zIndex = 1000;
    infoMousePosition.style.textShadow = '1px 1px #000000';
    ba(infoMousePosition);
}

