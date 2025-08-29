import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Component mounted or updated');
  });

  return (
    <>
    <div>Hello word</div>
    </>
  )
}

export default App
