//useContext() Example


//Here, ComponentA is the Provider Component
// And, ComponentD is the Consumer Component

//This is done to avoid props drilling, avoid passing props through each level

import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Samriddho");

    return(
        <div className='box'>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext value={user}>
                <ComponentB/>
            </UserContext>
        </div>
    )
}
export default ComponentA;