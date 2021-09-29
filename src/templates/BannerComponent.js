import React from "react";
import { Link } from "gatsby";

export default function BannerComponent() {
  return (
    <div className="row banner d-flex justify-content-start ">
      <header
        className="col jumbotron jumbotron-fluid"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/banner_rutalab_nuevo.jpg")`,
          backgroundSize: "cover",
          height: "80vh",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="col-6 col-sm-7 justify-content-md-start">
            <h1 className="display-5 font-weight-bold pt-3 text-start">
              Prueba de COVID urgente?
              <h3 className="lead display-5 pb-5">
                Estás en el lugar correcto
              </h3>
            </h1>
            <h1 className="display-5 font-weight-bold pt-3 text-start proximamente">
              Solicita con un click
            </h1>
            <Link to="https://wa.me/+5219511028474">
              <button
                type="button"
                className="btnSomos btn bg-success btn-lg text-white"
              >
                ¡Reserva ya!
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
