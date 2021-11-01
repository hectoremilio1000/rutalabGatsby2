import React, { useEffect, useState } from "react";

import { Link } from "gatsby";
import MaterialTable from "material-table";

//importar dataclientes
// import { DataClientes } from "../components/DataClientes";

// //API AMPKILY
import { API, graphqlOperation } from "aws-amplify";
import { listPacientes } from "../graphql/queries";
import { createPaciente } from "../graphql/mutations";

//import authenticator
import { AmplifySignOut, AmplifyAuthenticator } from "@aws-amplify/ui-react";

// import sidebar dashboard
import DashboardSidebar from "../components/DashboardSidebar";

//importar iconos
import { FaPlus } from "react-icons/fa";
// ICONOS PARA LA TABLA MATERIAL TABLE
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

//iconos
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const Clientes = () => {
  const [show_register, setShow_register] = useState(false);
  const [tableData, setTableData] = useState([]);

  //   Formulario
  //  ---- obtencion de los datos por onchange
  const [name, setName] = useState("");
  const [direccion, setDireccion] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //   reset formulario y esconder

  // const sendDates = () => {
  //   console.log("aqui iran los datos finales");
  //   console.log(name, direccion, email, phone);
  // };
  // // ---- fin de obtencion de los datos por onchange

  const columns = [
    {
      title: "id",
      field: "id",
      defaultSort: "asc",
      filterPlaceholder: "Bucar por id",
    },
    {
      title: "Nombres y Apellidos",
      field: "name",
      defaultSort: "asc",
      filterPlaceholder: "Bucar por nombre",
    },
    {
      title: "direccion",
      field: "direccion",
      filterPlaceholder: "Bucar por direccion",
    },
    { title: "email", field: "email", filterPlaceholder: "Bucar por email" },
    {
      title: "telefono",
      field: "telefono",
      filterPlaceholder: "Bucar por telefono",
    },
  ];

  //creando paciente nuevo

  const newPaciente = {
    name: name,
    direccion: direccion,
    email: email,
    telefono: phone,
  };

  const createNewPaciente = async () => {
    try {
      console.log("nuevo createPaciente");
      const DatosCreateNewPaciente = await API.graphql(
        graphqlOperation(createPaciente, { input: newPaciente })
      );
      window.alert("se ha creado un nuevo paciente");
      console.log(DatosCreateNewPaciente);
    } catch (error) {
      console.log(error);
    }
  };

  //cancelar registr

  // const cancelarRegistro = () => {
  //   window.alert("se canceló un registro");
  // };

  //sacando datos de los pacientes
  const fetchPacientes = async () => {
    try {
      const DataPacientes = await API.graphql(graphqlOperation(listPacientes));
      console.log(DataPacientes);
      const PacientesItems = DataPacientes.data.listPacientes.items;
      console.log(PacientesItems);
      setTableData(PacientesItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const [navSidebar, setNavSidebar] = useState(true);
  const show_sidebar = () => {
    setNavSidebar(!navSidebar);
  };

  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Home
      </Link>

      <AmplifyAuthenticator>
        {/* <PruebaSidebar /> */}
        <DashboardSidebar navSidebar={navSidebar} show_sidebar={show_sidebar} />
        <div
          className={`container-dashboard ${
            !navSidebar ? "close_sidebar" : ""
          }`}
        >
          <div>
            <h1 className="row-title">Datos del paciente</h1>
            <div className="container-registers">
              {!show_register ? (
                <button
                  className="btn btn-primary show-register"
                  onClick={() => {
                    setShow_register(true);
                  }}
                >
                  Registrar
                </button>
              ) : null}
              {show_register ? (
                <>
                  <h1 className="row-title">Datos del paciente</h1>
                  <div className="dates-row-4">
                    <div className="group-date">
                      <span>Nombre completo</span>
                      <input
                        name="name"
                        type="text"
                        className="control-form"
                        placeholder="Ingresa el nombre del paciente"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="group-date">
                      <span>Dirección</span>
                      <input
                        name="calle"
                        type="text"
                        className="control-form"
                        placeholder="Nombre de la calle"
                        onChange={(e) => {
                          setDireccion(e.target.value);
                        }}
                      />
                    </div>
                    <div className="group-date">
                      <span>Email</span>
                      <input
                        name="email"
                        type="email"
                        className="control-form"
                        placeholder="Ingresa el @correo electronico"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="group-date">
                      <span>Telefono</span>
                      <input
                        name="phone"
                        type="number"
                        className="control-form"
                        placeholder="Ingresa el numero de telefono"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={createNewPaciente}
                    id="register"
                    className="btn btn-success show-register"
                  >
                    <FaPlus />
                    Registrar
                  </button>
                  <button
                    id="cancel-register"
                    className="btn btn-secondary show-register"
                    onClick={() => {
                      setShow_register(false);
                    }}
                  >
                    Cancelar
                  </button>
                </>
              ) : null}
            </div>
          </div>

          <div>
            <h1 className="name-link">Mis Clientes</h1>

            <MaterialTable
              columns={columns}
              data={tableData}
              icons={tableIcons}
              title="Lista de Clientes"
              options={{
                filtering: true,
                paging: true,
                pageSizeOptions: [2, 5, 10, 15, 20, 50],
                pageSize: 10,
                paginationType: "stepped",
                showFirstLastPageButtons: false,
                exportButton: true,
                exportAllData: true,
                exportFileName: "Mis Clientes",
                selection: true,
              }}
            />
          </div>
          <AmplifySignOut />
        </div>
      </AmplifyAuthenticator>
    </>
  );
};

export default Clientes;
