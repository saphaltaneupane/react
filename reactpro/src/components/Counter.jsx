
import {useState} from "react";
   

export default function Counter() {
    function handleClick() {
    setCount(count + incrementBy);
}
    const [count, setCount] = useState(20);
    const [incrementBy, setIncrementBy] = useState(1);
    const [decrementBy, setDecrementBy] = useState(1);
    return <>
    <h1>Counter Component</h1>
    <h1>Count value is: {count}</h1>
    <button onClick={handleClick}>Increment</button>
    <button onClick={() => setCount(count - incrementBy)}>Decrement</button>

    <h1>Increment by:  {incrementBy} </h1>
<button onClick={() => setIncrementBy(incrementBy + 1)}>Increase Increment</button>
<button onClick={() => setDecrementBy(decrementBy - 1)}>Decrease Increment</button>
    </>
}