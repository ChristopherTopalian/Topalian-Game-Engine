// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// updateMinimapTreasure.js

function updateMinimapTreasure(whichId, targetElementId)
{
    let treasureLeft = parseFloat(getComputedStyle(ge(targetElementId)).left);

    let treasureTop = parseFloat(getComputedStyle(ge(targetElementId)).top);

    //-//

    // calculate minimap pos for treasure
    // convert to percentage
    let minimapX = (treasureLeft / backgroundSizeX) * 100;

    let minimapY = (treasureTop / backgroundSizeY) * 100;

    //-//

    // set pos on minimap
    ge(whichId).style.left = `${minimapX}%`;
    ge(whichId).style.top = `${minimapY}%`;
}

