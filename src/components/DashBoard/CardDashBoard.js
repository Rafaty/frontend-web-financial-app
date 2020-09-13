import React from "react";

const CardDashBoard = ({ label, value, isCurrency = false }) => {
  return (
    <div>
      <div class="card card-statistic">
        <div class="card-body p-0">
          <div class="d-flex flex-column">
            <div class="px-3 py-3 d-flex justify-content-between">
              <h3 class="card-title">{label}</h3>
              <div class="card-right d-flex align-items-center">
                <p>
                  {
                  isCurrency
                    ? Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(value)
                    : value
                  }
                </p>
              </div>
            </div>
            <div class="chart-wrapper">
              <canvas id="canvas2" style={{ height: 100 }}></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDashBoard;
