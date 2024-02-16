// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInstructions.js

function makeInstructions()
{
    let instructionsMainDiv = ce('div');
    instructionsMainDiv.id = 'instructionsMainDiv';
    ba(instructionsMainDiv);

    //-//

    let detailsInstructions = ce('details');
    detailsInstructions.className = 'instructions';
    detailsInstructions.style.position = 'fixed';
    detailsInstructions.style.top = 1;
    detailsInstructions.style.left = 80;
    detailsInstructions.style.maxWidth = '275px';
    detailsInstructions.style.maxHeight = '125px';
    instructionsMainDiv.append(detailsInstructions);

    //-//

    let summaryInstructions = ce('summary');
    summaryInstructions.textContent = 'Instructions';
    summaryInstructions.style.color = 'rgb(50, 50, 50)';
    detailsInstructions.append(summaryInstructions);

    //-//

    let textInstructions = ce('div');
    textInstructions.textContent = 'Instructions';
    textInstructions.id = 'textInstructions';
    textInstructions.className = 'textStyle001';
    textInstructions.innerHTML = `
    W is up, S is down, <br>
    A is left, D is Right <br>
    ~ 1 2 3 4 5 6 7 8 9 0 for speed <br>
    Hold Shift to Boost Speed <br>
    Letter V to Start Song <br>
    Letter B to Stop Song <br>
    Letter N player is see-through <br>
    Letter M player is solid
    `;
    detailsInstructions.append(textInstructions);
}

