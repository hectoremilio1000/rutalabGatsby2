import React from "react";
import servicios from "../../src/assets/data2/servicios2";
import { Link } from "gatsby";

export default function Body3Component() {
  return (
    <div className="body3component" id="servicios">
      <div className="pt-4 text-center">
        <h1 className="font-weight-bold">Pruebas disponibles</h1>
        <h4>Da click a la prueba para proporcionarte mayor información</h4>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-12 col-md-4 pb-4 pl-2 subcontainer1body3">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 imagenbody3"
            src={servicios[0].imagen}
            alt=""
          />
          <div>
            <h6 className="text-center mb-2 tituloCard">
              {servicios[0].titulo}
            </h6>
            <p className="text-center mb-2 muestraCard">
              {servicios[0].tipoMuestra}
            </p>
            {/* <p className="text-center mb-2">{servicios[0].descripcioncorta}</p> */}
            <p className="text-center mb-2 resultadosCard">
              {servicios[0].resultados}
            </p>
            <p className="text-center mb-2 comentariosCard">
              {servicios[0].comentarios}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="https://wa.me/+5219511028474">
              <button className="btn btn-success btn-dark rounded mt-3">
                ¡Reserva ya! ${servicios[0].precio}{" "}
                <h6 className="font-weight-lighter oldPricebody3 pt-1">
                  ${servicios[0].oldPrice}
                </h6>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4 pb-4 pl-2 subcontaine2body3">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 imagenbody3"
            src={servicios[1].imagen}
            alt=""
          />
          <div>
            <h6 className="text-center mb-2 tituloCard">
              {servicios[1].titulo}
            </h6>
            <p className="text-center mb-2 muestraCard">
              {servicios[1].tipoMuestra}
            </p>
            {/* <p className="text-center mb-2">{servicios[1].descripcioncorta}</p> */}
            <p className="text-center mb-2 resultadosCard">
              {servicios[1].resultados}
            </p>
            <p className="text-center mb-2 comentariosCard">
              {servicios[1].comentarios}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="https://wa.me/+5219511028474">
              <button className="btn btn-success btn-dark rounded mt-3">
                ¡Reserva ya! ${servicios[1].precio}{" "}
                <h6 className="font-weight-lighter oldPricebody3 pt-1">
                  ${servicios[1].oldPrice}
                </h6>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4 pb-4 pl-2 subcontainer3body3">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 imagenbody3"
            src={servicios[2].imagen}
            alt=""
          />
          <div>
            <h6 className="text-center mb-2 tituloCard">
              {servicios[2].titulo}
            </h6>
            <p className="text-center mb-2 muestraCard">
              {servicios[2].tipoMuestra}
            </p>
            {/* <p className="text-center mb-2">{servicios[2].descripcioncorta}</p> */}
            <p className="text-center mb-2 resultadosCard">
              {servicios[2].resultados}
            </p>
            <p className="text-center mb-2 comentariosCard">
              {servicios[2].comentarios}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="https://wa.me/+5219511028474">
              <button className="btn btn-success btn-dark rounded mt-3">
                ¡Reserva ya! ${servicios[2].precio}{" "}
                <h6 className="font-weight-lighter oldPricebody3 pt-1">
                  ${servicios[2].oldPrice}
                </h6>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
