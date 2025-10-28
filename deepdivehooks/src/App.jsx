import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (count >= 20) {
      setCount(0);
      alert("Counter reset to 0 after reaching 20");
    } else {
      setCount(count + 1);
    }
  }
  function handledecrement() {
    if (count <= 0) {
      setCount(0);
      alert("Counter is already at 0 and cannot be decremented further");
    } else {
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
