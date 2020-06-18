<!-- Dedicated to God the Father -->
<!-- All Rights Reserved Christopher Topalian Copyright 2020 -->
<!-- Topalian Game Engine Template --><!-- Removed Functions to Include Later -->


//Removed Functions to Include Later

function makeDiv()
{
    var ourDiv = document.createElement("div");
                
    if(counter <= 9)
    {
		counter += 1;
		ourDiv.innerHTML = "Count is " + parseInt(counter);
		document.body.append(ourDiv);
    }
    else
    {
        //document.getElementById("boxOne").remove();
        var ourDiv = document.createElement("div");
		ourDiv.innerHTML = "Winner"; 
        document.body.append(ourDiv);
        counter = 0;
    }   
}

//////////////////////////

function createDiv(message, xPos, yPos, width, height)
{
    let crossed = document.createElement("div");

    crossed.style.position="absolute";
    crossed.style.left=xPos + "px";
    crossed.style.top=yPos + "px";
    crossed.style.width=width + "px";
    crossed.style.height=height + "px";

    crossed.setAttribute('style','background-color:black;color:yellow;z-index:6;padding:8px');

    crossed.innerHTML = message;
    document.body.append(crossed);
}

/////////////////////////////

let theElements = [
{
    name: "Copper",
    number: "29",
    url: "https://en.wikipedia.org/wiki/Copper",
    tag: "natural"
},
{
    name: "Zinc",
    number: "30",
    url: "https://en.wikipedia.org/wiki/Zinc",
    tag: "natural"
}
];


function periodicElements()
{
    var elementDiv = document.createElement("div");

    document.body.append(elementDiv);

    elementDiv.setAttribute('style','color:white; width:100px; height:100px; background:tan; color:white; position:absolute; top:100px; left:225px; z-index:1000; padding:10px; font-family:Exo;font-weight:bold;a{color:white;}');

    var output = '';

	for(var i = 0; i < theElements.length; i++)
	{
        if(theElements[i].tag == "natural")
        {
		    output += theElements[i].name + " ";
            output += theElements[i].number + " ";
            output += '<br>';
		    output +='<a href=\''+theElements[i].url+'\' target="_blank">Link</a>';
		    output += '<br>';
        }
    }
    elementDiv.innerHTML = output;
}

//////////////////////////////////////////

        //this function below, is one way, of many, to display a simple div that contains a link to a webpage. note also that, this way below utilizes a different way to style the div
        function showOneElement(theName, theNumber, theLink, xPos, yPos)
	    {
            document.body.removeElement(theName);
            var topicDiv = document.createElement("div");

            topicDiv.style.position="absolute";
            topicDiv.style.left=xPos;
            topicDiv.style.top=yPos;
            topicDiv.style.color="white";
            topicDiv.style.zIndex="2";
            topicDiv.style.padding="10px";
            topicDiv.style.fontFamily="exo";
            topicDiv.style.fontWeight="bold";
            topicDiv.style.fontSize="xx-large";
            topicDiv.style.width="163px";
            topicDiv.style.height="167px";
            topicDiv.style.background="black";
            topicDiv.style.textAlign="center";

		    topicDiv.innerHTML = theName + "<br>";
		    topicDiv.innerHTML += theNumber + "<br>";
            topicDiv.innerHTML+='<a href=\''+ theLink+'\' target="_blank">Link</a>';
            topicDiv.id = theName;

            document.body.append(topicDiv);
		}
