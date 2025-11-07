
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <div>
      <h3>Users (React Query)</h3>
      <ul>
        {data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
