import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Sistema</h1>
      <p>Navegue pelos módulos para gerenciar Clientes, Produtos e Pedidos.</p>
      <ul>
        <li>
          <Link to="/clientes">Gerenciar Clientes</Link>
        </li>
        <li>
          <Link to="/produtos">Gerenciar Produtos</Link>
        </li>
        <li>
          <Link to="/pedidos">Gerenciar Pedidos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
