import React, { useEffect, useState } from "react";

import api from "../../services/api";
import loadScriptToTable from "../../utils/table";

const TableClients = () => {
  const [clients, setClients] = useState([]);

  async function fetchClients() {
    const respose = await api.get("clients");
    loadScriptToTable();
    setClients(respose.data);
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <section className="section">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h3 className="card-title">Lista de Clientes</h3>
          <a
            href="/produtos-criar"
            role="button"
            className="btn btn-success"
          >
            <i className="fa fa-plus"></i>
            Novo
          </a>
        </div>
        <div className="card-body">
          <table className="table table-striped" id="table">
            <thead>
              <tr className="text-dark">
                <th>Nome</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.phone}</td>
                  <td>
                    <a href="!#" title="Editar">
                      <i className="fa fa-edit text-primary"></i>
                    </a>
                    <a className="ml-2" href="!#" title="Excluir">
                      <i className="fa fa-trash  text-danger "></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TableClients;
