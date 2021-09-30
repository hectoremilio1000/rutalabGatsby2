import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <div className="font-small pt-4 footer">
      <div fluid className="text-center text-md-left">
        <div className="row">
          <div className="col-6">
            <h5 className="title font-weight-bold text-white atrevete_footer">
              Atrévete a conocer RUTALAB
            </h5>
            <p className="text-white descripcion_footer">
              Servicios de test de laboratorio con los estándares más altos de
              calidad a domicilio.
            </p>
          </div>
          <div className="col-6 text-center">
            <h5 className="title font-weight-bold text-white">Links</h5>
            <ul>
              <AnchorLink to="/#home">
                <li className="list-unstyled text-center">
                  <small className="text-white">Inicio</small>
                </li>
              </AnchorLink>
              <AnchorLink to="/#somos">
                <li className="list-unstyled">
                  <small className="text-white">¿Quiénes somos?</small>
                </li>
              </AnchorLink>
              <AnchorLink to="/#pruebasCovid">
                <li className="list-unstyled">
                  <small className="text-white">Servicios COVID</small>
                </li>
              </AnchorLink>
              <AnchorLink to="/#reserva">
                <li className="list-unstyled">
                  <small href="#!" className="text-white">
                    ¡Reserva ya!
                  </small>
                </li>
              </AnchorLink>
              <Link to="/clientes">
                <li className="list-unstyled">
                  <small href="#!" className="text-white">
                    Clientes
                  </small>
                </li>
              </Link>
              <Link to="/administrador">
                <li className="list-unstyled">
                  <small href="#!" className="text-white">
                    Administrador
                  </small>
                </li>
              </Link>
              <Link to="/privacidad">
                <li className="list-unstyled">
                  <small href="#!" className="text-white">
                    Privacidad
                  </small>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
