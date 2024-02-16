// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeMinimapTreasure.js

function makeMinimapTreasure(whichId, whichHTML, whichBgColor, whichColor)
{
    let minimapTreasure = ce('div');
    minimapTreasure.innerHTML = whichHTML;
    minimapTreasure.id = whichId;
    minimapTreasure.title = whichHTML;
    minimapTreasure.style.position = 'absolute';
    minimapTreasure.style.width = '8px';
    minimapTreasure.style.height = '8px';
    minimapTreasure.style.backgroundColor = whichBgColor;
    minimapTreasure.style.zIndex = 3; 
    minimapTreasure.style.borderRadius = '50%';
    minimapTreasure.style.fontSize = 8 + 'px';
    minimapTreasure.style.fontWeight = 'bold';
    minimapTreasure.style.color = whichColor;
    minimapTreasure.style.textAlign = 'center';

    if (ge(whichId))
    {
        ge(whichId).remove();
    }

    ge('minimap').append(minimapTreasure);
}

