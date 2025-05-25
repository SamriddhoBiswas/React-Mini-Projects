import React, {useState} from 'react';

//useState() hook
function Counter()
{
    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);

        //Updater function (arrow function)
        //Takes the PENDING state( not the CURRENT state) to calculate the NEXT state
        //setCount(c => c + 1);
        //setCount(c => c + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(<div className = "counter-container">
                <p className = "counter-display">{count}</p>
                <button className='counter-button' onClick={increment}>Increment</button>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                <button className='counter-button' onClick={reset}>Reset</button>
           </div>);

}
export default Counter