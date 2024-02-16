// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// findIndexByName.js

function findIndexByName(whichArray, searchWord)
{
    // index in array of found word
    let index = whichArray.findIndex(
        function(whichArray)
        {
            return whichArray.name === searchWord;
        }
    );
    return index;
}

