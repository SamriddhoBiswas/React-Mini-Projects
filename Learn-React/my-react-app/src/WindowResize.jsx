import React, {useState, useEffect} from 'react';

//useEfftect() Example : Window resizing
//useEffect(<function>, <dependency>)

//Can be done using only window.addEventListener but that would mean adding an eventListener every time width or height changes, (can be thousand times)

function WindowResize()
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", changeSize);
        console.log("Added event")

        return () => {
            window.removeEventListener("resize", changeSize);
            console.log("event removed")
        }
    }, [])

    function changeSize () {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth)
    }

    return(
        <>
           <p>Window Width: {width}px</p>
           <p>Window Height: {height}px</p>
        </>
    );
}
export default WindowResize;