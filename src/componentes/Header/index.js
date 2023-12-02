import "./Header.css";
import { Link } from "react-router-dom";

const textoOpcoes = ["HOME", "SOBRE", "CADASTRO", "VAGAS", "LOGIN", "GERENCIAMENTODEVAGAS"];

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/imagens/logoloucos.png" alt="Logo Loucosporfutbol" />
      </div>
      <nav>
        <ul>
          {textoOpcoes.map((texto) => (
            <Link to={`/${texto.toLowerCase()}`}>
              <li>
                <p>{texto}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
