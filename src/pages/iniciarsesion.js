import React from "react";
import { Link } from "gatsby";

import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const Iniciarsesion = () => {
  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Home
      </Link>
      <AmplifyAuthenticator>
        <h1>hola administrador con cambios</h1>

        <AmplifySignOut>
          <button>
            <p>Salir de aquí pulsa click</p>
          </button>
        </AmplifySignOut>
      </AmplifyAuthenticator>
    </>
  );
};

export default Iniciarsesion;
