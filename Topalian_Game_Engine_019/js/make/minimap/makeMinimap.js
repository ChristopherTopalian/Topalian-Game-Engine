// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeMinimap.js

function makeMinimap()
{
    let minimapDiv = ce('div');
    minimapDiv.id = 'minimap';
    minimapDiv.className = 'minimapDiv';
    minimapDiv.style.position = 'fixed';
    minimapDiv.style.left = '5px';
    minimapDiv.style.bottom = '4px';
    minimapDiv.style.width = '150px';
    minimapDiv.style.height = '150px';
    minimapDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    minimapDiv.style.border = 'solid';
    minimapDiv.style.borderWidth = '1px';
    minimapDiv.style.borderRadius = '1px';
    minimapDiv.style.zIndex = 2000;
    minimapDiv.style.overflow = 'hidden';
    minimapDiv.style.cursor = 'pointer';
    ba(minimapDiv);
}

