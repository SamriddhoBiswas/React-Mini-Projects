//import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import Counter from './Counter.jsx'
import MyComponent from './MyComponent.jsx'
import ColorPicker from './ColorPicker.jsx'
import MyComponent2 from './MyComponent2.jsx'
import MyComponent3 from './MyComponent3.jsx'
import MyComponent4 from './MyComponent4.jsx'
import ToDoList from './ToDoList.jsx'
import MyComponent5 from './MyComponent5.jsx'
import WindowResize from './WindowResize.jsx'
import DigitalClock from './DigitalClock.jsx'
import ComponentA from './ComponentA.jsx'
import MyComponent6 from './MyComponent6.jsx'
import Stopwatch from './Stopwatch.jsx'

function App() {
  
  return(
    <>
       <Header/>
       <Food/>
       <Footer/>
       <Card/>
       <Card/>
       <Student name="Spongebob" age={30} isStudent={true}/>
       <Student name="Patrick" age={42} isStudent={false}/>
       <UserGreeting isLoggedIn={true} username="Samriddho"/>
       <List/>
       <Button/>
       <Counter/>
       <MyComponent/>
       <ColorPicker/>
       <MyComponent2/>
       <MyComponent3/>
       <MyComponent4/>
       <ToDoList/>
       <MyComponent5/>
       <WindowResize/>
       <DigitalClock/>
       <ComponentA/>
       <MyComponent6/>
       <Stopwatch/>
    </>
    
  );
}

export default App




/*

import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () => {
    
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
*/