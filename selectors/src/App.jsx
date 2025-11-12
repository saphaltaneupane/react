import "./App.css";
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  username: "Saphalta",
  increment: () => set((s) => ({ count: s.count + 1 })),
  changeName: (name) => set({ username: name }),
}));

function CountDisplay() {
  const count = useStore((state) => state.count);
  console.log("CountDisplay rendered");
  return <div>Count: {count}</div>;
}

function NameDisplay() {
  const username = useStore((state) => state.username);
  console.log("NameDisplay rendered");
  return <div>Username: {username}</div>;
}

function Buttons() {
  const { increment, changeName } = useStore();
  return (
    <>
      <button onClick={increment}>Increase Count</button>
      <button onClick={() => changeName("NepalUser")}>Change Name</button>
    </>
  );
}

function App() {
  return (
    <>
      <CountDisplay />
      <NameDisplay />
      <Buttons />
    </>
  );
}

export default App;
