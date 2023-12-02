import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { criarVaga } from '../servicos/vagas';

const CadastroVagas = () => {
  const [titulo, setTitulo] = useState('');
  const [time, settime] = useState('');
  const [email, setemail] = useState('');

  const handleCadastro = async () => {
    try {
      await criarVaga({
        titulo: titulo,
        time: time,
        email: email,
      });

      setTitulo('');
      settime('');
      setemail('');

      // Adicionando um alerta ao cadastrar com sucesso
      alert('Informações cadastradas com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar vaga:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h3>Cadastro de Vaga</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label">
                    Título:
                  </label>
                  <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="form-control"
                    id="titulo"
                    placeholder="Digite o título da "
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Time" className="form-label">
                    time:
                  </label>
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => settime(e.target.value)}
                    className="form-control"
                    id="time"
                    placeholder="Digite o nome do time"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    email:
                  </label>
                  <input
                    type="string"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="form-control"
                    id="salario"
                    placeholder="Digite o salário"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCadastro}
                  className="btn btn-primary w-100"
                >
                  Cadastrar Vaga
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroVagas;
