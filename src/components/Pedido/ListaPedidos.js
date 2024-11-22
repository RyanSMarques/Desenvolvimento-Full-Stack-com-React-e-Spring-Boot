import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPedidos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/pedidos");
      setPedidos(response.data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPedidos = pedidos.filter(
    (pedido) =>
      pedido.cliente?.nome?.toLowerCase().includes(search.toLowerCase()) ||
      pedido.produtos?.some((produto) =>
        produto?.nome?.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="container mt-4">
      <h2>Pedidos</h2>
      <button
        className="btn btn-success mb-3"
        onClick={() => navigate("/pedidos/adicionar")}
      >
        Adicionar Pedido
      </button>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por cliente ou produto"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
          </tr>
        </thead>
        <tbody>
          {filteredPedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.cliente.nome}</td>
              <td>
                {pedido.produtos.map((produto) => produto.nome).join(", ")}
              </td>
              <td>
                {/* Aqui, estamos assumindo que a quantidade vem no produto, como pedido.produtos.quantidade */}
                {pedido.pedidoProdutos?.map((pedidoProduto) => (
                  <div key={pedidoProduto.produto.id}>
                    {pedidoProduto.produto.nome} - Quantidade: {pedidoProduto.quantidade}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPedidos;
