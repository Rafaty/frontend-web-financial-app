import React, { useEffect, useState } from "react";
import CardDashBoard from "../components/DashBoard/CardDashBoard";
import NextJobjsToDo from "../components/DashBoard/NextJobjsToDo";

import api from "../services/api";

const DashboardPage = () => {
  const [dashboard, setDashboard] = useState({});
  const [jobs, setJbos] = useState([]);

  async function fetchDashboard() {
    const respose = await api.get("dashboard");
    setDashboard(respose.data);
    setJbos(respose.data.nextJobsToDelivery)
  }

  useEffect(() => {
    fetchDashboard();
    
  }, [])

  return (
    <div>
      <div className="main-content container-fluid">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last mb-4">
              <h3>Dashboard</h3>
            </div>
          </div>
        </div>

        <section class="section">
          <div class="row mb-2">
            <div class="col-12 col-md-4">
              <CardDashBoard label="Total de clientes" value={dashboard.numberOfClients} />
            </div>
            <div class="col-12 col-md-4">
              <CardDashBoard label="Total de serviços" value={dashboard.numberOfJobs} />
            </div>
            <div class="col-12 col-md-4">
              <CardDashBoard label="Renda" value={dashboard.revenue} isCurrency = {true} />
            </div>
          </div>
          <NextJobjsToDo jobs ={jobs} />
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
