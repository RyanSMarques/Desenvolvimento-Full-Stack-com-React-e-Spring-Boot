
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import ListaClientes from "./components/Cliente/ListaClientes";
import AdicionarCliente from "./components/Cliente/AdicionarCliente";
import ListaProdutos from "./components/Produto/ListaProdutos";
import AdicionarProduto from "./components/Produto/AdicionarProduto";
import ListaPedidos from "./components/Pedido/ListaPedidos";
import AdicionarPedido from "./components/Pedido/AdicionarPedido";





const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Sistema
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/clientes">
                    Clientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/produtos">
                    Produtos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pedidos">
                    Pedidos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<ListaClientes />} />
          <Route path="/clientes/adicionar" element={<AdicionarCliente />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/produtos/adicionar" element={<AdicionarProduto />} />
          <Route path="/pedidos" element={<ListaPedidos />} />
          <Route path="/pedidos/adicionar" element={<AdicionarPedido />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

