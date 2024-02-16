// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https = //github.com/ChristopherTopalian

// https = //github.com/ChristopherAndrewTopalian

// makePlayer.js

function makePlayer(whichPlayer)
{
    let player = ce('div');
    player.id = whichPlayer.id;
    player.style.position = 'absolute';
    player.style.left = whichPlayer.x;
    player.style.top = whichPlayer.y;
    player.style.width = whichPlayer.width;
    player.style.height = whichPlayer.height;
    player.style.borderRadius = '0px';
    player.style.background = whichPlayer.texture;
    player.style.backgroundSize = 'cover';
    player.style.zIndex = '10';
    player.style.fontFamily = 'tahoma';
    player.style.fontSize = '13px';
    player.style.fontWeight = 'bold';
    player.style.textAlign = 'center';
    player.style.wordWrap = 'break-word';
    ba(player);
}

