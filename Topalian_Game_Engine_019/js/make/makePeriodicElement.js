// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makePeriodicElement.js

function makePeriodicElement(whichArray, theChoice, xPos, yPos)
{
    let theName = whichArray[findIndexByName(whichArray, theChoice)].name;

    let theNumber = whichArray[findIndexByName(whichArray, theChoice)].number;

    let theAbbreviation = whichArray[findIndexByName(whichArray, theChoice)].abbreviation;

    let theLink = whichArray[findIndexByName(whichArray, theChoice)].url;

    //-//

    let topicDiv = ce("div");
    topicDiv.innerHTML = theName + "<br>";
    topicDiv.innerHTML += theNumber + "<br>";
    topicDiv.innerHTML += theAbbreviation + "<br>";
    topicDiv.innerHTML += '<a href = \'' +theLink+ '\' target = "_blank"> Link </a>';
    topicDiv.id = theName;
    topicDiv.title = theName + '\n' + theAbbreviation;
    topicDiv.style.position = "absolute";
    topicDiv.style.left = xPos + 50;
    topicDiv.style.top = yPos - 50;
    topicDiv.style.width = "163px";
    topicDiv.style.padding = "10px";
    topicDiv.style.zIndex = "2";
    topicDiv.style.borderStyle = "solid";
    topicDiv.style.borderColor = "rgb(255, 255, 255)";
    topicDiv.style.background = "rgb(0, 0, 0)";
    topicDiv.style.fontFamily = "tahoma";
    topicDiv.style.fontSize = "20px";
    topicDiv.style.fontWeight = "bold";
    topicDiv.style.color = "rgb(255, 255, 255)";
    topicDiv.style.textAlign = "center";
    ba(topicDiv);
}

