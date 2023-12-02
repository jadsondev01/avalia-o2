import React, { useEffect, useState } from 'react';
import { getVagas, atualizarVaga, excluirVaga } from '../servicos/vagas';
import 'bootstrap/dist/css/bootstrap.min.css';

const GerenciamentoVagas = () => {
  const [vagas, setVagas] = useState([]);
  const [edicao, setEdicao] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [time, settime] = useState('');
  const [email, setemail] = useState('');

  useEffect(() => {
    carregarVagas();
  }, []);

  const carregarVagas = async () => {
    try {
      const listarVagas = await getVagas();
      setVagas(listarVagas);
    } catch (error) {
      console.error('Erro ao carregar Vagas', error);
    }
  };

  const handleEditar = (vaga) => {
    setEdicao(vaga._id);
    setTitulo(vaga.titulo);
    settime(vaga.time);
    setemail(vaga.email);
  };

  const handleAtualizar = async () => {
    try {
      await atualizarVaga(edicao, {
        titulo: titulo,
        email: email,
        time: time,
      });
      setEdicao(null);
      setTitulo('');
      setemail('');
      settime('');
      carregarVagas();
    } catch (error) {
      console.error('Erro ao atualizar Vagas', error);
    }
  };

  const handleExcluir = async (id) => {
    try {
      await excluirVaga(id);
      carregarVagas();
    } catch (error) {
      console.error('Erro ao excluir a vaga', error);
    }
  };

  const adicionarVaga = () => {
    const novaVaga = {
      titulo: titulo,
      time: time,
      email: email,
    };

    setVagas([...vagas, novaVaga]);
    setTitulo('');
    settime('');
    setemail('');
  };

  return (
    <div className="col-md-6">
      <h3>Times campeões</h3>
      <ul>
        {vagas.map((vaga) => (
          <li key={vaga._id}>
            <strong>{vaga.titulo}</strong> - {vaga.time}, email: {vaga.email}
            <button onClick={() => handleEditar(vaga)}> Editar </button>
            <button onClick={() => handleExcluir(vaga._id)}> Excluir </button>
          </li>
        ))}
      </ul>
      {edicao !== null && (
        <div>
          <h3>Editar Vaga</h3>
          <label>Titulo</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>

          <label>Times</label>
          <input type="text" value={time} onChange={(e) => settime(e.target.value)}></input>

          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>

          <button onClick={handleAtualizar}>Atualizar</button>
          <button onClick={handleExcluir}>Excluir</button>

        </div>
      )}
    </div>
  );
};

export default GerenciamentoVagas;
