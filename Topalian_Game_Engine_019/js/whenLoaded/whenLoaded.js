// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// whenLoaded.js

function whenLoaded()
{
    makeDedication();

    loadSongs();
    loadSounds();

    makePlayer(ourPlayer);

    makeBackground();

    makePeriodicTable();

    makeMousePosDiv();

    makeInfoDiv();

    makeCollisionDiv();

    makeIsMovingDiv();

    makeDistanceTraveledDiv();

    makeSpeedometer();

    makeMinimap();

    makeMinimapPlayer();

    // whichId, whichSrc, whichX, whichY
    makeTreasure('treasureCopper', 'media/textures/copper.jpg', 20000, 80);

    // whichId, whichSrc, whichX, whichY
    makeTreasure('treasureSilver', 'media/textures/silver.jpg', 40000, 100);

    // whichId, whichHTML, whichBgColor, whichColor
    makeMinimapTreasure(
        'minimapCopperIcon',
        '2',
        'rgb(255, 255, 255)',
        'rgb(0, 0, 0)'
    );

    // whichId, whichHTML, whichBgColor, whichColor
    makeMinimapTreasure(
        'minimapSilverIcon',
        '3',
        'rgb(255, 0, 255)',
        'rgb(255, 255, 255)' 
    );

    menuLeft();
    menuRight();

    makeElementInfoBox();

    makeXPosDiv();
    makeYPosDiv();

    makeInstructions();

    makeObjectsToScreen(dataFloors);
    makeObjectsToScreen(dataObjectsPeriodicTable);
    makeObjectsToScreen(objectsTriggers);
    makeObjectsToScreen(objectsPart2);
    makeObjectsToScreen(objectsPart3);

    // whichArray, xPos, yPos, sizeX, sizeY
    makeRowOfWebsitesPdfsOrVideos(dataVideosChemistry, 2465, 670, 550, 550);

    // shows periodic table on one row
    // xPos, yPos, sizeX, sizeY
    makeRowOfElements(dataPeriodicElements, 2465, 388, 200);

    // below is a way to make a tiled background, one row at a time
    
    // theTexture, howManyX, xPos, yPos, sizeX, sizeY
    makeTilesOneRow("media/textures/asphalt.jpg", 10, 0, 0, 500, 500);

    makeTilesOneRow("media/textures/asphalt.jpg", 10, 0, 500, 500, 500);

    makeTilesOneRow("media/textures/asphalt.jpg", 10, 0, 1000, 500, 500);

    // here is a much easier way to make a tiled background with rows and columns specified
    makeTiles(
        "media/textures/wood_003.jpg", // url
        12,         // rows
        4,           // columns
        120,       // xPos
        2780,     // yPos
        500,       // sizeX
        500        // sizeY
    );

    // listen for mouse clicks and get mouse pos
    document.addEventListener("click", mousePos, false);

    // listen for keydown events
    document.addEventListener("keydown", theControls, false);

    // listen for keyup events
    document.addEventListener("keyup", theControls, false);

    // start gameLoop
    gameLoop();
}

