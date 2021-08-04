import React from "react";
import servicios from "../assets/data/servicios";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Body3Component() {
  return (
    <div className="body3component" id="servicios">
      <div className="pt-4 text-center">
        <h1 className="font-weight-bold">Pruebas disponibles</h1>
        <h4>
          Da click a la prueba que requieras para conocer más sobre cada uno de
          nuestros servicios
        </h4>
      </div>
      <div className="row mt-2">
        <div className="col-6 col-md-2 pb-4">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 rounded-circle"
            src={servicios[0].imagen}
            alt=""
          />
          <div>
            <h6 className="text-center mb-2">{servicios[0].titulo}</h6>
          </div>
          <div className="d-flex justify-content-center">
            <AnchorLink to="/#reserva">
              <button className="btn btn-success btn-dark rounded mt-3">
                Reserva ${servicios[0].precio}
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="col-6 col-md-2 pb-4">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 rounded-circle"
            src={servicios[1].imagen}
            alt=""
          />

          <div>
            <h6 className="text-center mb-2">{servicios[1].titulo}</h6>
          </div>
          <div className="d-flex justify-content-center">
            <AnchorLink to="/#reserva">
              <button className="btn btn-success btn-dark rounded mt-3">
                Reserva ${servicios[0].precio}
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="col-6 col-md-2 pb-4">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 rounded-circle"
            src={servicios[2].imagen}
            alt=""
          />

          <h6 className="text-center mb-2">{servicios[2].titulo}</h6>
          <div className="d-flex justify-content-center">
            <AnchorLink to="/#reserva">
              <button className="btn btn-success btn-dark rounded mt-3">
                Reserva ${servicios[2].precio}
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="col-6 col-md-2 pb-4">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 rounded-circle"
            src={servicios[3].imagen}
            alt=""
          />

          <h6 className="text-center mb-2">{servicios[3].titulo}</h6>
          <div className="d-flex justify-content-center">
            <AnchorLink to="/#reserva">
              <button className="btn btn-success btn-dark rounded mt-3">
                Reserva ${servicios[3].precio}
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="col-6 col-md-2 pb-4">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 rounded-circle"
            src={servicios[4].imagen}
            alt=""
          />

          <h6 className="text-center mb-2">{servicios[4].titulo}</h6>
          <div className="d-flex justify-content-center mb-4">
            <AnchorLink to="/#reserva">
              <button className="btn btn-success btn-dark rounded">
                Reserva ${servicios[4].precio}
              </button>
            </AnchorLink>
          </div>
        </div>
        <div className="col-6 col-md-2 pb-4">
          <img
            className="img-fluid mx-auto d-block mt-4 mb-2 rounded-circle"
            src={servicios[5].imagen}
            alt=""
          />

          <h6 className="text-center mb-2">{servicios[5].titulo}</h6>
          <div className="d-flex justify-content-center">
            <AnchorLink to="/#reserva">
              <button
                type="button"
                className="btn btn-success btn-dark rounded mt-3 boton_orina"
              >
                Reserva ${servicios[5].precio}
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
}
