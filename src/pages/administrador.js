import React, { useEffect, useState } from "react";

//authenticator
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "@aws-amplify/auth";
import { API, graphqlOperation } from "aws-amplify";

//importar queries
import { getUser } from "../graphql/queries";
import { createUser } from "../graphql/mutations";

const Administrador = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    console.log("datos enviados");
  };

  const saveUserDB = async user => {
    console.log(user);
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  useEffect(() => {
    const updateUser = async () => {
      //obtener la info del usuario autenticado
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      console.log(userInfo);
      //checar si está en la base de datos de dynamodb
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        console.log(userData);
        if (!userData.data.getUser) {
          const user = {
            nameuser: userInfo.attributes.email,
            emailuser: userInfo.attributes.email,
          };
          await saveUserDB(user);
        }
        console.log("user already exist");
      }
    };

    updateUser();
  }, []);

  return (
    <div>
      <h1>Formulario para PDF</h1>
      <form className="row" onSubmit={onSubmit}>
        <div className="col-md-6">
          <h4 className="display-6">Nombre completo</h4>
          <input
            type="text"
            placeholder="Nombre paciente"
            className="form-control"
            onChange={e => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="col-md-6">
          <h4 className="display-6">Edad</h4>
          <input
            type="number"
            placeholder="Escribe la edad del paciente"
            className="form-control"
            onChange={e => setEdad(e.target.value)}
            value={edad}
          />
        </div>
        <div className="col-md-6">
          <h4 className="display-6">Dirección</h4>
          <input
            type="textarea"
            placeholder="Escribe la dirección del paciente"
            className="form-control"
            onChange={e => setDireccion(e.target.value)}
            value={direccion}
          />
        </div>
        <div className="col-md-6">
          <h4 className="display-6">Email</h4>
          <input
            type="email"
            placeholder="Escribe el email del paciente"
            className="form-control"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="col-md-6">
          <h4 className="display-6">Teléfono móvil</h4>
          <input
            type="number"
            placeholder="Escribe el teléfono móvil del paciente"
            className="form-control"
            onChange={e => setTelefono(e.target.value)}
            value={telefono}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(Administrador);
