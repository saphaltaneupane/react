
import Hello from "./components/Hello";


function App() {
const seatNumbers=[1,4,7];

const person={name:"Rob",message:"hI there",seatNumbers:seatNumbers};
  return (
    <>
  <Hello person={person} />

    </>
  )
}

export default App
