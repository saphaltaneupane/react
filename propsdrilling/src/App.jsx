// What’s “Prop Drilling”?

// Prop Drilling means:
// You have a parent component → child → grandchild → great-grandchild...
// And you keep passing the same data through all levels just to get it to the last one.

// 👉 Example:
// You want to send a userName from App to Profile → ProfileInfo → ProfileDetails.

// You’ll have to pass userName as a prop through all these layers — even if the middle ones don’t use it.

// That’s called prop drilling — lots of passing around 😩
import "./App.css";

function App() {
  const userName = "Saphalta";
  return (
    <>
      <Parent userName={userName} />
    </>
  );
}
function Parent({ userName }) {
  return <Child userName={userName} />;
}

function Child({ userName }) {
  return <GrandChild userName={userName} />;
}

function GrandChild({ userName }) {
  return <h2>Hello,{userName}</h2>;
}

export default App;
