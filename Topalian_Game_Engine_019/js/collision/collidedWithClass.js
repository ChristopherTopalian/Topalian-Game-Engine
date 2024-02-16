// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// collidedWithClass.js

function collidedWithClass(obj1, className)
{
    let collidedAny = false;

    // if obj1 exists
    if (ge(obj1))
    {
        // get collision box of obj1
        let theRect1 = ge(obj1).getBoundingClientRect();

        // get all objects with specified class
        let objectsWithClass = document.querySelectorAll('.' + className);

        for (let i = 0; i < objectsWithClass.length; i++)
        {
            let obj = objectsWithClass[i];

            let theRect2 = obj.getBoundingClientRect();

            if (theRect1.right >= theRect2.left &&
            theRect1.left <= theRect2.right && theRect1.bottom >= theRect2.top && theRect1.top <= theRect2.bottom)
            {
                collidedAny = true;
            }
        }
    }
    return collidedAny;
}

