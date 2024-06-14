import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users")
      .then(function (response) {
        setUsers(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Managmenţ System</h1>

        <table className="">
          <thead>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Description</td>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}
