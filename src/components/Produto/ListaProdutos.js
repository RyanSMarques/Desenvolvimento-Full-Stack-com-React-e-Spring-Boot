// import React, { useState, useEffect } from 'react';
// import api from '../../services/api';

// function ListaProdutos() {
//   const [produtos, setProdutos] = useState([]);
//   const [busca, setBusca] = useState('');

//   useEffect(() => {
//     api.get('/produtos').then((response) => setProdutos(response.data));
//   }, []);

//   const buscarProdutos = () => {
//     api.get(`/produtos/nome?nome=${busca}`).then((response) => setProdutos(response.data));
//   };

//   return (
//     <div>
//       <h1>Produtos</h1>
//       <input
//         type="text"
//         placeholder="Buscar por nome"
//         value={busca}
//         onChange={(e) => setBusca(e.target.value)}
//       />
//       <button onClick={buscarProdutos}>Buscar</button>
//       <ul>
//         {produtos.map((produto) => (
//           <li key={produto.id}>
//             {produto.nome} - R$ {produto.preco.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaProdutos;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Produtos</h2>
      <button
        className="btn btn-success mb-3"
        onClick={() => navigate("/produtos/adicionar")}
      >
        Adicionar Produto
      </button>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nome"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {filteredProdutos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;
