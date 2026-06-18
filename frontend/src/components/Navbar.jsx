import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Entre Veus
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/users">
            Usuários
          </Link>
        </li>

        <li>
          <Link to="/create-user">
            Criar Usuário
          </Link>
        </li>

        <li>Cômodo do Herói</li>
        <li>Biblioteca Arcana</li>
        <li>Taverna & Comércio</li>
        <li>Códice do Aprendiz</li>
      </ul>
    </nav>
  );
}

export default Navbar;