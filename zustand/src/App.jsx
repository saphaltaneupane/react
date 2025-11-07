import "./App.css";
import useCounter from "./store.js";

function App() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter from zustard</h1>
      <p>Count :{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
