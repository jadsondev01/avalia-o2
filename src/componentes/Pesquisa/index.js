// Pesquisa.js

import React, { useState } from "react";
import { vagas } from "./dadosPesquisa";

const estiloPesquisa = `
  section {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 24px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
    border-color: #4caf50;
  }

  div {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;


function Pesquisa() {
  const [vagasPesquisadas, setVagasPesquisadas] = useState([]);

  return (
    
    <section>
      <h1>Encontre sua vaga agora</h1>
      <input
        placeholder="Digite tema da vaga"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = vagas.filter((vaga) =>
            vaga.titulo.includes(textoDigitado)
          );
          setVagasPesquisadas(resultadoPesquisa);
        }}
      ></input>

      {vagasPesquisadas.map((vaga) => (
        <div key={vaga.id}>
          <p>{vaga.titulo}</p>
        </div>
      ))}
    </section>
  );
}

export default Pesquisa;
