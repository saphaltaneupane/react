import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <h1>Fake loader</h1>
      {loading ? <p>Loading.</p> : <p>Data loaded!</p>}
    </>
  );
}

export default App;
