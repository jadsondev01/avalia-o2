import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pesquisa() {
  const [vagasPesquisadas, setVagasPesquisadas] = useState([]);

  const cardStyle = {
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cardHeaderStyle = {
    padding: '15px',
  };

  const cardBodyStyle = {
    padding: '20px',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '15px',
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={cardStyle}>
            <div className="card-header bg-primary text-white text-center" style={cardHeaderStyle}>
              <h3>Pesquisa de Vagas</h3>
            </div>
            <div className="card-body" style={cardBodyStyle}>
              <input
                placeholder="Digite tema da vaga"
                onBlur={(evento) => {
                  const textoDigitado = evento.target.value;
                  const resultadoPesquisa = vagas.filter((vaga) =>
                    vaga.titulo.includes(textoDigitado)
                  );
                  setVagasPesquisadas(resultadoPesquisa);
                }}
                style={inputStyle}
              />

              {vagasPesquisadas.map((vaga) => (
                <div key={vaga.id} style={{ marginBottom: '2px' }}>
                  <p>{vaga.titulo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
