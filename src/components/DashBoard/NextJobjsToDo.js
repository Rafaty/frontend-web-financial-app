import React from "react";

const NextJobjsToDo = ({ jobs }) => {
  return (
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h4 class="card-title">
          Serviços com data de entrega para os proximos 30 dias
        </h4>
      </div>
      <div class="card-body px-0 pb-0">
        <div class="table-responsive">
          <table class="table mb-0" id="table1">
            <thead>
              <tr className="text-dark">
                <th>Descrição</th>
                <th>Cliente</th>
                <th>Entrega</th>
                <th>Orçamento</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                const date = new Date(job.finalDate);
                return (
                  <tr key={job.id}>
                    <td>{job.description}</td>
                    <td>{job.client.name}</td>
                    <td>{Intl.DateTimeFormat("pt-BR").format(date)}</td>

                    <td className="text-success">
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(job.budget)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NextJobjsToDo;
