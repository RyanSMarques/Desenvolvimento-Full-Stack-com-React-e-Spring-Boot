import React, { useState } from 'react';
import api from '../../services/api';

function AdicionarCliente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');

  const adicionarCliente = () => {
    api.post('/clientes', { nome, email, contato }).then(() => {
      alert('Cliente cadastrado com sucesso!');
    });
  };

  return (
    <div>
      <h1>Adicionar Cliente</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contato"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          required
        />
        <button onClick={adicionarCliente}>Salvar</button>
      </form>
    </div>
  );
}

export default AdicionarCliente;
