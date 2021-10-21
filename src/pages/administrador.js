import React, { useState } from "react";

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
    </div>
  );
};

export default Administrador;
