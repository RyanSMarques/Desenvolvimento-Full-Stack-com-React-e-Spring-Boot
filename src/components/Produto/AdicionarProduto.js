import React, { useState } from 'react';
import api from '../../services/api';

function AdicionarProduto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const adicionarProduto = () => {
    if (preco <= 0) {
      alert('O preço do produto deve ser maior que zero!');
      return;
    }
    api.post('/produtos', { nome, descricao, preco }).then(() => {
      alert('Produto cadastrado com sucesso!');
    });
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <button onClick={adicionarProduto}>Salvar</button>
      </form>
    </div>
  );
}

export default AdicionarProduto;
