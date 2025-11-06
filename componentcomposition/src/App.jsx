// App.js
import { Card } from "./card";

function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Card title="React Composition" text="We can reuse components easily!" />
    </div>
  );
}

export default App;
