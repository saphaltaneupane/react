// import { useState } from "react";

// import "./App.css";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();

//     alert(`Username: ${username}\nPassword: ${password}`);
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="username"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

import React from "react";

export const App = () => {
  const [formData, setFormData] = React.useState({
    usename: "",
    password: "",
  });
  const handleChange = (e) => {
    // e.target gives us the input field where the user is typing
    const { name, value } = e.target;

    // We use the callback form of setFormData to safely update state
    // The spread operator (...) copies previous values
    // Then we overwrite only the changed field
    setFormData((prev) => ({
      ...prev, // keep previous formData values
      [name]: value, // update the field that changed (dynamic key)
    }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Username: ${formData.username}\nEmail: ${formData.email}`);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
