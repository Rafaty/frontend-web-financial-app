import React, { useEffect, useState } from "react";

import api from "../../services/api";
import loadScriptToTable from "../../utils/table";

const TableJobs = () => {
  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    const respose = await api.get("jobs");
    loadScriptToTable();
    setJobs(respose.data);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="section">
      <div className="card">
      <div className="card-header d-flex justify-content-between">
          <h3 className="card-title">Lista de Serviços</h3>
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
                <th>Descrição</th>
                <th>Cliente</th>
                <th>Orçamento</th>
                <th>Balanço atual</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.description}</td>
                  <td>{job.client.name}</td>

                  <td className="text-primary">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(job.budget)}
                  </td>
                  <td
                    className={
                      job.wallet.total > 0 ? "text-success" : "text-danger"
                    }
                  >
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(job.wallet.total)}
                  </td>
                  <td>
                    <a href="!#" title="Editar">
                      <i className="fa fa-edit text-primary"></i>
                    </a>
                    <a className="ml-2" href="!#" title="Excluir">
                      <i className="fa fa-trash text-danger "></i>
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

export default TableJobs;
