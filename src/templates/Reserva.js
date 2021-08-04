import React from "react";
import servicios from "../assets/data/servicios";

export default function Reserva() {
  return (
    <div id="reserva">
      <section className="jumbotron text-center">
        <div className="container">
          <h1>¡Reserva ya!</h1>
          <p className="lead text-muted">
            Es muy fácil, sólo tienes que bajar nuestra App en App Store o
            Google Play Store para reservar cualquiera de nuestros servicios
          </p>
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
                      {servicios[0].tiempoResultado}min
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
                      {servicios[1].tiempoResultado}min
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
                      {servicios[2].tiempoResultado}min
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
                  src={servicios[3].imagen}
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: COVID"
                ></img>
                <div className="card-body">
                  <h5>{servicios[3].titulo}</h5>
                  <p className="card-text">{servicios[3].descripcion}</p>
                  <div className="d-flex justify-content-around">
                    <small>Tiempo Resultado</small>
                    <small className="text-muted">
                      {servicios[3].tiempoResultado}min
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
                  src={servicios[4].imagen}
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: COVID"
                ></img>
                <div className="card-body">
                  <h5>{servicios[4].titulo}</h5>
                  <p className="card-text">{servicios[4].descripcion}</p>
                  <div className="d-flex justify-content-around">
                    <small>Tiempo Resultado</small>
                    <small className="text-muted">
                      {servicios[4].tiempoResultado}min
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
                  src={servicios[5].imagen}
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  aria-label="Placeholder: COVID"
                ></img>
                <div className="card-body">
                  <h5>{servicios[5].titulo}</h5>
                  <p className="card-text">{servicios[5].descripcion}</p>
                  <div className="d-flex justify-content-around">
                    <small>Tiempo Resultado</small>
                    <small className="text-muted">
                      {servicios[5].tiempoResultado}min
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
