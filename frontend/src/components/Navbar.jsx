import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        marginBottom: "2rem"
      }}
    >
      <Link to="/">Home</Link>

      {" | "}

      <Link to="/users">Usuários</Link>

      {" | "}

      <Link to="/create-user">
        Criar Usuário
      </Link>
    </nav>
  );
}

export default Navbar;