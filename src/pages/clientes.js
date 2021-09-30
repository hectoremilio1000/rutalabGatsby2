import * as React from "react";
import { Link } from "gatsby";

/**insertar amplify auth */
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// markup
const Clientes = () => {
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

export default Clientes;
