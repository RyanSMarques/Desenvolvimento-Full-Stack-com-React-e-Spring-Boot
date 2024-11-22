// import React, { useState, useEffect } from 'react';
// import api from '../../services/api';

// function ListaClientes() {
//   const [clientes, setClientes] = useState([]);
//   const [busca, setBusca] = useState('');

//   useEffect(() => {
//     api.get('/clientes').then((response) => setClientes(response.data));
//   }, []);

//   const buscarClientes = () => {
//     api.get(`/clientes/nome?nome=${busca}`).then((response) => setClientes(response.data));
//   };

//   return (
//     <div>
//       <h1>Clientes</h1>
//       <input
//         type="text"
//         placeholder="Buscar por nome"
//         value={busca}
//         onChange={(e) => setBusca(e.target.value)}
//       />
//       <button onClick={buscarClientes}>Buscar</button>
//       <ul>
//         {clientes.map((cliente) => (
//           <li key={cliente.id}>
//             {cliente.nome} - {cliente.email} - {cliente.contato}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaClientes;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  // Função para buscar por nome
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredClientes = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Clientes</h2>
      <button
        className="btn btn-success mb-3"
        onClick={() => navigate("/clientes/adicionar")}
      >
        Adicionar Cliente
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
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredClientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaClientes;
