import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div> The count is {count}</div>
     <button onClick={()=>{setCount(count+1)}}> Update</button>
    </>
  )
}

export default App
