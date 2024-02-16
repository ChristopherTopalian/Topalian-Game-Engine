// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// menuLeft.js

let menuFunctions =
[
    {
        name: `showInstructions()`,
        fullName: "Show Instructions",
        description: "Show Instructions"
    },

    {
        name: `hideInstructions()`,
        fullName: "Hide Instructions",
        description: "Hide Instructions"
    },

    {
        name: `audioPlay('Lonely_Mountain', 1.0)`,
        fullName: "Play Song",
        description: "Play Default Song"
    },

    {
        name: `audioPause('Lonely_Mountain')`,
        fullName: "Pause Song",
        description: "Pause Default Song"
    }
];

function menuLeft()
{
    if (ge("menuLeftDiv"))
    {
        ge("menuLeftDiv").remove();
    }

    let divHeight = 90;

    let menuLeftDiv = ce("div");
    menuLeftDiv.id = "menuLeftDiv";
    menuLeftDiv.style.position = "fixed";
    menuLeftDiv.style.left = 0 + "px";
    menuLeftDiv.style.top = 20 + "px";
    menuLeftDiv.style.margin = '2px';
    menuLeftDiv.style.zIndex = 1000;
    ba(menuLeftDiv);

    //-//

    let minimizeButton = ce("button");
    minimizeButton.innerHTML = "_";
    minimizeButton.className = "buttonStyle001";
    minimizeButton.style.position = "absolute";
    minimizeButton.style.left = 0 + "px";
    minimizeButton.style.top = -22 + "px";
    minimizeButton.onclick = function()
    {
        audioPlay("sfx_warp_001", 1.0);

        // minimize height to show only _ and □
        ge("menuLeftSubDiv").style.height = 0 + "px";

        ge("menuLeftSubDiv").style.display = 'none';
    };

    menuLeftDiv.append(minimizeButton);

    //-//

    let maximizeButton = ce("button");
    maximizeButton.innerHTML = "□";
    maximizeButton.className = "buttonStyle001";
    maximizeButton.style.position = "absolute";
    maximizeButton.style.left = 30 + "px";
    maximizeButton.style.top = -22 + "px";
    maximizeButton.onclick = function()
    {
        audioPlay("sfx_warp_001", 1.0);

        ge("menuLeftSubDiv").style.height = divHeight + "px";

        ge("menuLeftSubDiv").style.display = 'block';
    };
    menuLeftDiv.append(maximizeButton);

    //-//

    let menuLeftSubDiv = ce("div");
    menuLeftSubDiv.id = "menuLeftSubDiv";
    menuLeftSubDiv.style.position = "fixed";
    menuLeftSubDiv.style.left = 0 + "px";
    menuLeftSubDiv.style.top = 35 + "px";
    menuLeftSubDiv.style.margin = 2 + "px";
    menuLeftSubDiv.style.width = '190px';
    menuLeftSubDiv.style.height = divHeight + "px";
    menuLeftSubDiv.style.overflowY = "auto";
    menuLeftSubDiv.style.resize = "both";
    menuLeftSubDiv.style.whiteSpace = 'nowrap';
    menuLeftSubDiv.style.zIndex = 1001;
    menuLeftSubDiv.style.borderStyle = 'solid';
    menuLeftSubDiv.style.borderWidth = '1px';
    menuLeftSubDiv.style.borderColor = 'rbg(255, 255, 255)';
    menuLeftSubDiv.style.borderRadius = '8px';
    menuLeftSubDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    ba(menuLeftSubDiv);

    //-//

    for (let x = 0; x < menuFunctions.length; x++)
    {
        let theButton = ce("button");
        theButton.innerHTML = menuFunctions[x].description;
        theButton.className = "buttonStyle001";
        theButton.title = menuFunctions[x].fullName;
        theButton.style.width = 'auto';
        theButton.style.fontSize = '15px';
        theButton.style.display = "flex";
        theButton.style.flexDirection = "row";
        theButton.onclick = function()
        {
            audioPlay("sfx_blip_001", 1.0);

            eval(""+menuFunctions[x].name+"" + ";");

            console.log(""+menuFunctions[x].name+"");
        };
        menuLeftSubDiv.append(theButton);

        //-//

        ge("menuLeftSubDiv").style.height = 0 + "px";

        ge("menuLeftSubDiv").style.display = 'none';
    }
}

