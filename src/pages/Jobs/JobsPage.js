import React from "react";
import TableJobs from '../../components/Jobs/TableJobs'

const JobsPage = () => {
  return (
    <div>
      <div className="main-content container-fluid">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last mb-4">
              <h3>Serviços</h3>
            </div>
          </div>
        </div>
        <TableJobs />
      </div>
    </div>
  );
};

export default JobsPage;
