import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div
      className="w-full h-screen transition-colors duration-500 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {/* Buttons container at the bottom */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
      </div>
    </div>
  )
}

export default App
