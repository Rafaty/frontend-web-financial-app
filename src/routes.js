import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import ClientsPage from "./pages/Clients/ClientsPage";
import JobsPage from "./pages/Jobs/JobsPage";
import DashboardPage from "./pages/DashboardPage";
import LeftMenu from "./components/LeftMenu";
import Navbar from "./components/Navbar";

export default function Routes() {
  return (
    <BrowserRouter>
      <div id="app">
        <LeftMenu />
        <div id="main">
          <Navbar />
          <Switch>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/clientes" exact component={ClientsPage} />
            <Route path="/servicos" component={JobsPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
