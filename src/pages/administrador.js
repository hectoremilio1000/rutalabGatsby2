import * as React from "react";

// Amplify Configuration
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Link } from "gatsby";

Amplify.configure(awsconfig);

export default function Administrador() {
  return (
    <div>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Home
      </Link>
      <AmplifyAuthenticator>
        <div>
          <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow p-1">
            <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
              Administrador
            </Link>
            <button
              class="navbar-toggler position-absolute d-md-none collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav px-3 mt-5 mt-sm-0">
              <li class="nav-item text-nowrap">
                <AmplifySignOut />
              </li>
            </ul>
          </nav>

          <div class="container-fluid">
            <div class="row">
              <nav
                id="sidebarMenu"
                class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
              >
                <div class="sidebar-sticky pt-3">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link active text-dark">
                        <span data-feather="home"></span>
                        Órdenes <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <p>
                        <Link to="/ordenesAsignar">Órdenes por asignar</Link>!
                      </p>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        <span data-feather="shopping-cart"></span>
                        Órdenes en proceso
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        <span data-feather="users"></span>
                        Órdenes en Análisis
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 class="h2">Dashboard</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Export
                      </button>
                    </div>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary dropdown-toggle"
                    >
                      <span data-feather="calendar"></span>
                      This week
                    </button>
                  </div>
                </div>

                <h2>Órdenes</h2>
                <div class="table-responsive">
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th># orden</th>
                        <th>Hora pedido</th>
                        <th>Hora entrega</th>
                        <th>Servicio</th>
                        <th>Cliente</th>
                        <th>Dirección</th>
                        <th>Asignado</th>
                        <th>Resultados</th>
                        <th>Informe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0001</td>
                        <td>9:20</td>
                        <td>13:20</td>
                        <td>prueba embarazo</td>
                        <td>Juan Pérez</td>
                        <td>Independencia #323</td>
                        <td>Juan</td>
                        <td>PDF</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>0002</td>
                        <td>9:20</td>
                        <td>13:20</td>
                        <td>prueba embarazo</td>
                        <td>Juan Pérez</td>
                        <td>Independencia #323</td>
                        <td>Juan</td>
                        <td>PDF</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>0003</td>
                        <td>9:20</td>
                        <td>13:20</td>
                        <td>prueba embarazo</td>
                        <td>Juan Pérez</td>
                        <td>Independencia #323</td>
                        <td>Juan</td>
                        <td>PDF</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>0004</td>
                        <td>9:20</td>
                        <td>13:20</td>
                        <td>prueba embarazo</td>
                        <td>Juan Pérez</td>
                        <td>Independencia #323</td>
                        <td>Juan</td>
                        <td>PDF</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>0005</td>
                        <td>9:20</td>
                        <td>13:20</td>
                        <td>prueba embarazo</td>
                        <td>Juan Pérez</td>
                        <td>Independencia #323</td>
                        <td>Juan</td>
                        <td>PDF</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </main>
            </div>
          </div>
        </div>
      </AmplifyAuthenticator>
    </div>
  );
}
