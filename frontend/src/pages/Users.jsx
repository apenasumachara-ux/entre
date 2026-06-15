import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editUsername, setEditUsername] = useState("");
  const [editEmail, setEditEmail] = useState("");

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

  async function deleteUser(id) {
    try {
      await axios.delete(
        `http://localhost:3001/api/users/${id}`
      );

      loadUsers();
    } catch (err) {
      console.error(err);
      setError("Erro ao excluir usuário");
    }
  }

  function startEdit(user) {
    setEditingId(user.id);
    setEditUsername(user.username);
    setEditEmail(user.email);
  }

  async function updateUser() {
    try {
      await axios.put(
        `http://localhost:3001/api/users/${editingId}`,
        {
          username: editUsername,
          email: editEmail
        }
      );

      setEditingId(null);
      setEditUsername("");
      setEditEmail("");

      loadUsers();
    } catch (err) {
      console.error(err);
      setError("Erro ao atualizar usuário");
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
            {editingId === user.id ? (
              <>
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) =>
                    setEditUsername(e.target.value)
                  }
                />

                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) =>
                    setEditEmail(e.target.value)
                  }
                />

                <button onClick={updateUser}>
                  Salvar
                </button>

                <button
                  onClick={() => setEditingId(null)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <strong>{user.username}</strong>
                {" - "}
                {user.email}

                {" "}

                <button
                  onClick={() => startEdit(user)}
                >
                  Editar
                </button>

                {" "}

                <button
                  onClick={() => deleteUser(user.id)}
                >
                  Excluir
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;