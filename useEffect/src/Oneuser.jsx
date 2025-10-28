import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((r) => r.json())
      .then(setUser);
  }, []);

  return (
    <>
      <p>{user ? user.name : "Loading..."}</p>
    </>
  );
}

export default App;
