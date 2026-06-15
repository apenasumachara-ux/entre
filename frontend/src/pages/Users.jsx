import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  async function loadUsers() {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/users"
      );

      setUsers(response.data);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar usuários");
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Usuários</h1>

      {error && <p>{error}</p>}

        <Link to="/">
            Voltar para Home
        </Link>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong>
            {" - "}
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;