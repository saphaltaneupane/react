// import { useState } from "react";

// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     console.log("Clicked!");
//   };

//   console.log("App rendered");
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <Child onClick={handleClick} />
//       <p>Count:{count}</p>
//     </>
//   );
// }
// function Child({ onClick }) {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Child Button</button>;
// }

// export default App;

import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  console.log("App rendered");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
      <p>Count: {count}</p>
    </>
  );
}

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
}

export default App;
