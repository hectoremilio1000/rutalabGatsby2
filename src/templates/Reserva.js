import React from "react";
import servicios from "../../src/assets/data2/servicios2";
import { Link } from "gatsby";

export default function Reserva() {
  return (
    <div id="reserva">
      <section className="jumbotron text-center" id="reserva">
        <div className="container">
          <h1>¡Reserva ya!</h1>
          <p className="lead text-muted">
            Es muy fácil, sólo da click en el botón y reserva en tiempo real.
          </p>
          <Link to="https://wa.me/+5219511028474">
            <button className="btn bg-success btn-lg text-white rounded mt-3">
              ¡Da click ahora!
            </button>
          </Link>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="bd-placeholder-img img-thumbnail"
                  width="100%"
                  height="225"
                  src={servicios[0].imagen}
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: COVID"
                ></img>
                <div className="card-body">
                  <h5>{servicios[0].titulo}</h5>
                  <p className="card-text">{servicios[0].descripcion}</p>
                  <div className="d-flex justify-content-around">
                    <small>Tiempo Resultado</small>
                    <small className="text-muted">
                      {servicios[0].resultados}
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="bd-placeholder-img img-thumbnail"
                  width="100%"
                  height="225"
                  src={servicios[1].imagen}
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: COVID"
                ></img>
                <div className="card-body">
                  <h5>{servicios[1].titulo}</h5>
                  <p className="card-text">{servicios[1].descripcion}</p>
                  <div className="d-flex justify-content-around">
                    <small>Tiempo Resultado</small>
                    <small className="text-muted">
                      {servicios[1].resultados}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  className="bd-placeholder-img img-thumbnail"
                  width="100%"
                  height="225"
                  src={servicios[2].imagen}
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: COVID"
                ></img>
                <div className="card-body">
                  <h5>{servicios[2].titulo}</h5>
                  <p className="card-text">{servicios[2].descripcion}</p>
                  <div className="d-flex justify-content-around">
                    <small>Tiempo Resultado</small>
                    <small className="text-muted">
                      {servicios[2].resultados}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
