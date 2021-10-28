import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

/**insertar amplify auth */
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Auth from "@aws-amplify/auth";

/** import auth api */
import { graphqlOperation, API } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { createUser } from "../graphql/mutations";

const cliente = {
  name: "Jampier Smith Vasquez Mija",
  edad: "20",
  direccion: "Calle Coronel Vidal 220 A",
  email: "jampierv127@gmail.com",
  telefono: "+51 915096462",
};

// markup
const Clientes = () => {
  //aquí vamos a fetch user
  const [user, setUser] = useState(null);

  console.log(user.username);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) {
        return;
      }
      try {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchUser();
  }, []);

  const saveuserDB = async user => {
    console.log(user);
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  // aquí vamos a checar quién es la persona conectada
  useEffect(() => {
    const updateUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      }).catch(err => console.log(err));
      console.log(userInfo);
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        console.log(userData);
        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.attributes.email,
          };
          saveuserDB(user);
        }
        console.log("user already exists");
      }
    };
    updateUser();
  }, []);

  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Home
      </Link>
      <AmplifyAuthenticator>
        <h1>Hola mi nombre es {user.username}</h1>
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
