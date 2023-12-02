import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log(`Login: ${email}, Senha: ${senha}`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="senha" className="form-label">
                    Senha:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleLogin}
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
