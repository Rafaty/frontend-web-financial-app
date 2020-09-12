import React from "react";
import TableClients from "../../components/Clients/TableClients";

const ClientsPage = () => {
  return (
    <div className="main-content container-fluid">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last mb-4">
            <h3>Clientes</h3>
          </div>
        </div>
      </div>
      <TableClients />
    </div>
  );
};

export default ClientsPage;
