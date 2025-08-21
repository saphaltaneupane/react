
import { useState } from 'react';
import './App.css'

function App() {
 let [counter, setCounter]= useState(15);
  // value and function to update the value

  //let counter = 15;
   const addValue = () => {
    console.log("clicked", counter)

    if(counter<20) {
    setCounter(counter+1);
    // console.log("Counter value:", counter);
   }
   else{
    alert("Counter value cannot be more than 20");
   }
  }
  const removeValue = () => {
    console.log("removed value clicked", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter value cannot be less than 0");
    }}

 
  return (
    <>
      <h1>Saphalta</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue} >Add value {counter}</button>
        <button onClick={removeValue} >Removes value {counter}</button>
      <br />     
       <p>footer {counter}</p>
    </>
  )
}

export default App
