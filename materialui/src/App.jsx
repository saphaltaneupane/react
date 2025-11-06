import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Material UI Example</h2>
        <TextField label="Enter your name" variant="outlined" />
        <br />
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    </>
  );
}

export default App;
