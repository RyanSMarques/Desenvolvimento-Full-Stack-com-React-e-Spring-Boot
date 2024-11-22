import React, { useState, useEffect } from "react";
import axios from "axios";

const AdicionarPedido = () => {
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState("");
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  // Buscar clientes e produtos para popular os selects
  useEffect(() => {
    // Certifique-se de que a URL está correta para o backend
    axios.get("http://localhost:8081/api/clientes") // Corrigido para backend
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao carregar clientes:", error));

    axios.get("http://localhost:8081/api/produtos") // Corrigido para backend
      .then(response => setProdutos(response.data))
      .catch(error => console.error("Erro ao carregar produtos:", error));
  }, []);

  // Manipula a seleção do cliente
  const handleClienteChange = (e) => {
    setClienteSelecionado(e.target.value);
  };

  // Manipula a seleção dos produtos
  const handleProdutoChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
    setProdutosSelecionados(selectedValues);
  };

  // Enviar o pedido para a API
  const handleSubmit = (e) => {
    e.preventDefault();

    const pedido = {
      cliente: {
        id: clienteSelecionado
      },
      produtos: produtosSelecionados.map(id => ({ id })) // Converte os ids dos produtos para o formato correto
    };

    axios.post("http://localhost:8081/api/pedidos", pedido) // Corrigido para backend
      .then(response => {
        alert("Pedido adicionado com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao adicionar pedido:", error);
        alert("Erro ao adicionar pedido.");
      });
  };

  return (
    <div>
      <h1>Adicionar Pedido</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cliente</label>
          <select value={clienteSelecionado} onChange={handleClienteChange} required>
            <option value="">Selecione um cliente</option>
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Produtos</label>
          <select multiple onChange={handleProdutoChange} required>
            {produtos.map(produto => (
              <option key={produto.id} value={produto.id}>
                {produto.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Adicionar Pedido</button>
      </form>
    </div>
  );
};

export default AdicionarPedido;
