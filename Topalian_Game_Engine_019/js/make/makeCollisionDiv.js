// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeCollisionDiv.js

function makeCollisionDiv()
{
    let collisionInfoDiv = ce('div');
    collisionInfoDiv.textContent = 'Collision Info';
    collisionInfoDiv.id = 'collisionInfoDiv';
    collisionInfoDiv.className = 'textStyle001';
    collisionInfoDiv.title = 'makeCollisionDiv()';
    collisionInfoDiv.style.position = 'fixed';
    collisionInfoDiv.style.right = '0px';
    collisionInfoDiv.style.bottom = '0px';
    collisionInfoDiv.style.zIndex = 1000;
    collisionInfoDiv.style.textShadow = '1px 1px #000000';
    ba(collisionInfoDiv);
}

