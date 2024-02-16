// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// controlsKeyboard.js

// keyboard letter codes being pressed
let keyboard = { };

// 87 is w, 38 is up arrow
keyboard.UP = 87;

// 83 is s, 40 is down arrow
keyboard.DOWN = 83;

// 65 is a, 37 is left arrow
keyboard.LEFT = 65;

// 68 is d, 39 is right arrow
keyboard.RIGHT = 68;

// Shift Button
keyboard.SHIFT = 16;

function theControls(e)
{
    // AUDIO
    if (e.keyCode == 86) // Press Letter v
    {
        audioPlay("Action_Strike", 0.5);

        ge('infoDiv').innerHTML = "Song Playing";
    }

    if (e.keyCode == 66) // Press Letter b
    {
        audioPause("Action_Strike", 0.5);

        ge('infoDiv').innerHTML = "Song Stopped";
    }

    if (e.keyCode == 27) // Press Esc
    {
        audioPause("Action_Strike");

        ge('infoDiv').innerHTML = "Song Stopped";
    }

    // TRANSPARENCY
    if (e.keyCode == 77) // Letter m
    {
        ge(ourPlayer.id).style.opacity = "1.0";
    }
    if (e.keyCode == 78) // Letter n
    {
        ge(ourPlayer.id).style.opacity = "0.2";

        ge(ourPlayer.id).innerHTML = "";
    }

    // SPEED
    if (e.keyCode == 192) // tilda ~
    {
        ourPlayer.speedMultiplier = 0.5;

        ge(ourPlayer.id).innerHTML = "Speed 0.5";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 49 || e.keyCode == 97) // number 1, or numpad 1
    {
        ourPlayer.speedMultiplier = 1;

        ge(ourPlayer.id).innerHTML = "Speed 1";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 50 || e.keyCode == 98) // number 2
    {
        ge(ourPlayer.id).speedMultiplier = 2;

        ge(ourPlayer.id).innerHTML = "Speed 2";

        setTimeout(function()
        {
            ge(ourPlayer.id).innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 51 || e.keyCode == 99) // number 3
    {
        ourPlayer.speedMultiplier = 3;

        ge(ourPlayer.id).innerHTML = "Speed 3";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 52 || e.keyCode == 100) // number 4
    {
        ourPlayer.speedMultiplier = 4;

        ge(ourPlayer.id).innerHTML = "Speed 4";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 53 || e.keyCode == 101) // number 5
    {
        ourPlayer.speedMultiplier = 5;

        ge(ourPlayer.id).innerHTML = "Speed 5";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 54  || e.keyCode == 102) // number 6
    {
        ourPlayer.speedMultiplier = 6;

        ge(ourPlayer.id).innerHTML = "Speed 6";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 55 || e.keyCode == 103) // number 7
    {
        ourPlayer.speedMultiplier = 7;

        ge(ourPlayer.id).innerHTML = "Speed 7";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 56 || e.keyCode == 104) // number 8
    {
        ourPlayer.speedMultiplier = 8;

        ge(ourPlayer.id).innerHTML = "Speed 8";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 57 || e.keyCode == 105) // number 9
    {
        ourPlayer.speedMultiplier = 9;

        ge(ourPlayer.id).innerHTML = "Speed 9";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    if (e.keyCode == 48 || e.keyCode == 96) // number 0
    {
        ourPlayer.speedMultiplier = 200;

        ge(ourPlayer.id).innerHTML = "Speed 10";

        setTimeout(function()
        {
            ge("thePlayer").innerHTML = "";
        }, 3000);
    }

    let theKeyCode = e.keyCode || e.which;

    if (e.type === 'keydown')
    {
        keyboard[theKeyCode] = true;
    }
    else if (e.type === 'keyup')
    {
        keyboard[theKeyCode] = false;
    }
}

