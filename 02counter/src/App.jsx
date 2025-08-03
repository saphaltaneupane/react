import React from 'react'
import './App.css'
import { useState } from 'react'


function App() {

  let [counter, setCounter]=useState(15); //default value is 0 anything you want to set
  // let counter = 15;
  
  const addValue = () => {
    // console.log('Add value clicked', Math.random());
    // counter= counter + 1;
    // setCounter(counter);
    //  console.log("clicked", counter); 15 aauxa before value update
   if (counter < 20) {
  setCounter(counter + 1);
} else {
  alert("Counter value cannot be more than 20");
}
    console.log("clicked", counter);
    //16 aauxa  
  }
  const removeValue= () =>{
    console.log("removed value clicked ", counter);//15
    if(counter>0) {
    setCounter(counter-1);//14
    }
    else{
      alert("Counter value cannot be less than 0");
    }
  //  console.log("removed value clicked ", counter);//14
  }
  return (
    <>
     <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2> 
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
