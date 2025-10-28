import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // function incrementCount() {
  //   setCount(count + 1);
  // }
  function incrementCount() {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }
  function Greet({ name }) {
    return <h2>Hello, {name}!</h2>;
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}> increment</button>
      <Greet name="saphalta" />
      <Greet name="neupane" />
    </>
  );
}

export default App;
