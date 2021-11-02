import React, { useState } from "react";

import { Link } from "gatsby";

//importar dataclientes
// import { DataClientes } from "../components/DataClientes";

//import authenticator
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

// import sidebar dashboard
import DashboardSidebar from "../components/DashboardSidebar";

// containers

import ContainerPacientes from "../components/ContainerPacientes";
import ContainerOrdenes from "../components/ContainerOrdenes";
import ContainerEscritorio from "../components/ContainerEscritorio";

const Clientes = () => {
  const [navSidebar, setNavSidebar] = useState(true);
  const show_sidebar = () => {
    setNavSidebar(!navSidebar);
  };
  const [view_container, setView_container] = useState("escritorio");

  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Home
      </Link>
      <AmplifyAuthenticator>
        <DashboardSidebar
          setView_container={setView_container}
          navSidebar={navSidebar}
          show_sidebar={show_sidebar}
        />

        <div
          className={`container-dashboard ${
            !navSidebar ? "close_sidebar" : ""
          }`}
        >
          {view_container === "pacientes" ? <ContainerPacientes /> : null}
          {view_container === "escritorio" ? <ContainerEscritorio /> : null}
          {view_container === "ordenes" ? <ContainerOrdenes /> : null}
        </div>
      </AmplifyAuthenticator>
    </>
  );
};

export default Clientes;
