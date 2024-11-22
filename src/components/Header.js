import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/clientes">Clientes</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/pedidos">Pedidos</Link>
    </nav>
  );
}

export default Header;
