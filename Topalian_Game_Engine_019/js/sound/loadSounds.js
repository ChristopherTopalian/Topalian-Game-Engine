// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// soundLoad.js

let online = false;

let soundsArray =
[
    {
        name: "Blip",
        theId: "sfx_blip_001",
        theLocation: "./media/sounds/sfx_blip_001.mp4",
        theURL: "https://64482293-555277121853380144.preview.editmysite.com/uploads/6/4/4/8/64482293/blip.mp4"
    },
    {
        name: "Crystal Bell",
        theId: "sfx_crystal_bell_001",
        theLocation: "./media/sounds/sfx_crystal_bell_001.mp4",
        theURL: "https://64482293-555277121853380144.preview.editmysite.com/uploads/6/4/4/8/64482293/pop_sound.mp4"
    },
    {
        name: "Warp",
        theId: "sfx_warp_001",
        theLocation: "./media/sounds/sfx_warp_001.mp4",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipphaser.mp3"
    },
    {
        name: "Zap",
        theId: "sfx_zap_001",
        theLocation: "./media/sounds/sfx_zap_001.mp4",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipdeep.mp3"
    }
];

function loadSounds()
{
    let theX = 20;
    let theY = 20;

    for (let x =  0; x < soundsArray.length; x++)
    {
        let ourSound = document.createElement("audio");
        ourSound.style.position = "absolute";
        ourSound.style.left = theX + 'px';
        ourSound.style.top = theY +'px';
        ourSound.setAttribute('type', 'audio/mpeg');
        ourSound.setAttribute('controls', 'controls');
        ourSound.setAttribute('preload', 'preload');

        if (online == true)
        {
            ourSound.setAttribute('src', soundsArray[x].theURL);
        }
        else
        {
            // if the location of the file is in our folder, then we use theLocation as the source
            ourSound.setAttribute('src', soundsArray[x].theLocation);
        }

        ourSound.setAttribute('id', soundsArray[x].theId);

        // do not show the element on the page
        ourSound.style.display = 'none';
        ba(ourSound);
    }
}

