import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Card from './components/Card'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
// let myobj = { 
//   username:"saphalta",
//   age:22
// }

let newArr=[1,2,3,4,5,6,7,8,9,10];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chai aur code" someObje-={newArr} btnText = "cluck me"/> 
       <Card username="saphalta" btnText="vist me" /> 
</>
    
  )
}

export default App
