// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeMinimapPlayer.js

function makeMinimapPlayer()
{
    let minimapPlayer = ce('div');
    minimapPlayer.innerHTML = '1';
    minimapPlayer.id = 'minimapPlayer';
    minimapPlayer.title = ourPlayer.id;
    minimapPlayer.style.position = 'absolute';
    minimapPlayer.style.width = '8px';
    minimapPlayer.style.height = '8px';
    minimapPlayer.style.backgroundColor = 'rgb(0, 255, 255)'; 
    minimapPlayer.style.zIndex = 5; 
    minimapPlayer.style.borderRadius = '50%';
    minimapPlayer.style.fontSize = '8px';
    minimapPlayer.style.color = 'rgb(0, 0, 0)';
    minimapPlayer.style.fontWeight = 'bold';
    minimapPlayer.style.textAlign = 'center';
    minimapPlayer.style.lineheight = '0px';

    if (ge('minimapPlayer'))
    {
        ge('minimapPlayer').remove();
    }

    // append minimap player to minimap
    ge('minimap').append(minimapPlayer);
}

