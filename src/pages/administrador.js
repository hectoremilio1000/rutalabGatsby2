import React, { useState } from "react";
import SidebarDashboard from "../components/sidebarDashboard";
import { Link } from "gatsby";

/**insertar amplify auth */
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

// markup
const Administrador = () => {
  const [navSidebar, setNavSidebar] = useState(true);
  const show_sidebar = () => {
    setNavSidebar(!navSidebar);
  };

  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Inicio
      </Link>

      <AmplifyAuthenticator>
        <SidebarDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} />
        <div className="container-dashboard">
          <h1>Perfil OverView</h1>
        </div>
      </AmplifyAuthenticator>
    </>
  );
};

export default Administrador;
