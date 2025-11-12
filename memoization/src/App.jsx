import React from "react";
import { create } from "zustand";

import { useMemo } from "react";
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function App() {
  const count = useStore((state) => state.count);
  const doubled = useMemo(() => {
    console.log("Doing big calculation...");
    return count * 2;
  }, [count]);
  return (
    <>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={useStore.getState().increment}>Increase</button>
    </>
  );
}

export default App;
