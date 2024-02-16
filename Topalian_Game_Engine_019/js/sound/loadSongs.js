// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// loadSongs.js

let songsArray =
[
    {
        name: "Lonely Mountain",
        theId: "Lonely_Mountain",
        theLocation: "./media/songs/Lonely_Mountain.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/lonely_mountain.mp3"
    },
    {
        name: "Action_Strike",
        theId: "Action_Strike",
        theLocation: "./media/songs/Action_Strike.mp3",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/action_strike.mp3"
    }
];

function loadSongs()
{
    let theX = 20;
    let theY = 20;

    for (let x =  0; x < songsArray.length; x++)
    {
        let ourSound = document.createElement("audio");
        ourSound.style.position = "absolute";
        ourSound.style.left = theX + 'px';
        ourSound.style.top = theY +'px';
        ourSound.setAttribute('type', 'audio/mpeg');
        ourSound.setAttribute('controls', 'controls');
        ourSound.setAttribute('loop', 'loop');
        ourSound.setAttribute('preload', 'preload');

        if (online == true)
        {
            ourSound.setAttribute('src', songsArray[x].theURL);
        }
        else
        {
            // if the location of the file is in our folder, then we use theLocation as the source
            ourSound.setAttribute('src', songsArray[x].theLocation);
        }

        ourSound.setAttribute('id', songsArray[x].theId);

        // do not show the element on the page
        ourSound.style.display = 'none';
        ba(ourSound);
    }
}

