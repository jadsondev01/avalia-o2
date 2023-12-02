import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./rotas/Home";
import Vagas from "./rotas/Vagas";
import CadastroVagas from "./rotas/CadastroVaga";
import GerenciamentoVagas from "./rotas/GerenciamentoVagas";
import Login from "./rotas/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* Inserir o Header para aparecer em todas as páginas */}
      <Header />
      <Routes>
        {/* Parâmetros, path: caminho do site,  element: o que será carregado
        na página  */}
        <Route path="/cadastro" element={<CadastroVagas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/gerenciamentodevagas" element={<GerenciamentoVagas />} />
        <Route path="/Login" element={<Login />} />

       </Routes>
    </BrowserRouter>
  </StrictMode>
);
