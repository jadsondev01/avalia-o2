import styled from "styled-components";

const Opcao = styled.li`
  margin-right: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 20px;
  min-width: 120px;
  cursor: pointer;
  & :hover {
    color: #ff5722;
  }
`;

const Opcoes = styled.ul`
  display: flex;
`;

import { Link } from "react-router-dom"; 

const textoOpcoes = ["HOME", "ABOUT", "CADASTRO", "LOGIN", "VAGAS","GERENCIAMENTO DE  VAGAS"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao key={texto}>
          {texto === "VAGAS" ? (
            <Link to="/vagas">
              <p>{texto}</p>
            </Link>
          ) : (
            <p>{texto}</p>
          )}
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;

