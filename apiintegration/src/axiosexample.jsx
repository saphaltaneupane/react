import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const AxiosExample = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h3>Users (Using Axios)</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};
