//useRef()

//Similar to useState()
//useState() = Re-renders the component when the state value changes
//useRef() = Does not cause re-renders when its value changes.

import React, {useState, useEffect, useRef} from 'react';

function MyComponent6()
{
    //let [number, setNumber] = userState(0);
    //function handleClick(){
        //setNumber(n => n + 1); }
    //this would have led to console printing message every time the button is clicked 
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus();    
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();    
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();    
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return(
        <div>
            <br /><br />
            <button onClick={handleClick1}>
                Click Me 1!
            </button><br />
            <input ref={inputRef1} />
            
            <br />
            <button onClick={handleClick2}>
                Click Me 2!
            </button><br />
            <input ref={inputRef2} />

            <br />
            <button onClick={handleClick3}>
                Click Me 3!
            </button><br />
            <input ref={inputRef3} />

            <br /><br /><br /><br />
            
        </div>
    )
}
export default MyComponent6;