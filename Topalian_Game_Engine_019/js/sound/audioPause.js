// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// audioPause.js

function audioPause(whichAudioId)
{
    let theAudio = ge(whichAudioId);

    theAudio.pause();

    ge("infoSongStatusId").innerHTML = "Song Stopped";
}

