import "./App.css";
import React, { createContext, useContext } from "react";
const NameContext = createContext();
function App() {
  const NameContext = createContext();

  return (
    <>
      <NameContext.Provider value={"name"}>
        <Parent />
      </NameContext.Provider>
    </>
  );
}
function Parent() {
  return <Child />;
}
function Child() {
  const name = useContext(NameContext);
  return <h1>{name}</h1>;
}

export default App;
