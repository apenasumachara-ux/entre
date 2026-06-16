import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser as createUserService } from "../services/userService";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateUser() {
    if (!username.trim() || !email.trim()) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
      await createUserService({
        username,
        email
      });

      setError("");
      setUsername("");
      setEmail("");

      alert("Usuário criado com sucesso!");
    } catch (err) {
      console.error("ERRO:", err);

      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError("Erro ao criar usuário");
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

      <br />
      <br />

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
        onClick={handleCreateUser}
        disabled={loading}
      >
        {loading ? "Salvando..." : "Criar usuário"}
      </button>
    </div>
  );
}

export default CreateUser;