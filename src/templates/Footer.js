import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
              calidad.
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
              <AnchorLink to="/#servicios">
                <li className="list-unstyled">
                  <small className="text-white">Servicios</small>
                </li>
              </AnchorLink>
              <AnchorLink to="/#funciona">
                <li className="list-unstyled">
                  <small href="#!" className="text-white">
                    ¿Cómo funciona?
                  </small>
                </li>
              </AnchorLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
