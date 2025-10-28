import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
      .then((r) => r.json())
      .then(setUser);
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Interval running");
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <p>{user ? user.name : "Loading..."}</p>
    </>
  );
}

export default App;
