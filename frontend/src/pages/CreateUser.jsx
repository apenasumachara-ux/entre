import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function createUser() {
    if (!username.trim() || !email.trim()) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:3001/api/users",
        {
          username,
          email
        }
      );

      setError("");
      setUsername("");
      setEmail("");

      alert("Usuário criado com sucesso!");

    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(err.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Criar Usuário</h1>

      {error && <p>{error}</p>}
        <Link to="/">
            Voltar para Home
        </Link>
      <input
        type="text"
        placeholder="Nome"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={createUser}
        disabled={loading}
      >
        {loading ? "Salvando..." : "Criar usuário"}
      </button>
    </div>
  );
}

export default CreateUser;