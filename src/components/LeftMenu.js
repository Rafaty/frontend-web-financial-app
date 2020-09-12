import React  from "react";
import { Link,useRouteMatch} from "react-router-dom";

const LeftMenu = () => {

  const dashBoardLocation = useRouteMatch("//");
  const clientsLocation = useRouteMatch("/clientes/");
  const servicesLocation = useRouteMatch("/servicos/");

  return (
    <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <img src="dist/assets/images/logo.svg" alt="" srcSet="" />
        </div>
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Menu Principal</li>

            <li className= {dashBoardLocation ? 'sidebar-item active' : 'sidebar-item'}>
              <Link to="/" className="sidebar-link">
                <i data-feather="home" width="20"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className= {servicesLocation ? 'sidebar-item active' : 'sidebar-item'}>
              <Link to="/servicos" className="sidebar-link">
                <i data-feather="briefcase" width="20"></i>
                <span>Serviços</span>
              </Link>
            </li>
            <li className= {clientsLocation ? 'sidebar-item active' : 'sidebar-item'}>
              <Link to="/clientes" className="sidebar-link">
                <i data-feather="user" width="20"></i>
                <span>Clientes</span>
              </Link>
            </li>
          </ul>
        </div>
        <button className="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
};
export default LeftMenu;
