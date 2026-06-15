import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Entre Veus</h1>

      <ul>
        <li>
          <Link to="/users">
            Ver usuários
          </Link>
        </li>

        <li>
          <Link to="/create-user">
            Criar usuário
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;