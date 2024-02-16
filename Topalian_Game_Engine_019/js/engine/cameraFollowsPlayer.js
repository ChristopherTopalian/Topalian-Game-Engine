// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// cameraFollowsPlayer.js

function cameraFollowsPlayer()
{
    if (ge(ourPlayer.id))
    {
        ge(ourPlayer.id).scrollIntoView(
        {
            block: "center",
            inline: "center"
        });
    }
}

