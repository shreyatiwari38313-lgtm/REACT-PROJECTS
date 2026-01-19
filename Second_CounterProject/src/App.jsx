import { useState } from 'react'
import './App.css'


function App() {

   let [counter, setCounter] = useState(15);  // useState() takes default value{can be string, empty string, object, array etc}
   //useState() returns an array with 2 values: 1st is current value of state variable(counter here) and second is function to update its value(name of this function can be anything)

   //let counter = 10;
   const addvalue=()=>{   // function declared to handle button click
    console.log("value added",counter);

    setCounter(counter+1);
   }

   const removeValue=()=>{
    console.log("value removed",counter);

    setCounter(counter-1);
   }
  return (
    <div class ='shreya'>
      <h1>Second Project</h1>
      <h2>Counter value: {counter}</h2>

      <button
       onClick = {addvalue}    // addvalue is a function, not executed yet(b'coz parenthesis not written along with function name) as we want it to execute on clicking the button
      >Add Value {counter}</button>
      
      <button
       onClick={removeValue}
      >Remove Value {counter}</button>

      <p>footer : {counter}</p>
    </div>
  )
}

export default App
