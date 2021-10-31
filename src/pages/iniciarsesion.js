import React, { useState } from "react";
//link
import { Link } from "gatsby";

// //API AMPKILY
// import { API, graphqlOperation } from "aws-amplify";
// import { listPacientes } from "../graphql/queries";

//import authenticator
// import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// import SidebarDashboard from "../components/SidebarDashboard";
import MaterialTable from "material-table";
import { FaPlus } from "react-icons/fa";
import { DataClientes } from "../components/DataClientes";
import "../styles/registro.css";

// import "../components/IconsMaterialTable";
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
// import axios from "axios";

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

// FIN DE ICONOS

const IniciarSesion = () => {
  // const fetchPaciente = async () => {
  //   try {
  //     const DataPaciente = await API.graphql(graphqlOperation(listPacientes));
  //     console.log(DataPaciente);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPaciente();
  // }, []);
  // api de codigos postales

  //   useEffect(() => {
  //     async function getEstados() {
  //       try {
  //         const resEstados = await axios(
  //           "https://apisgratis.com/api/codigospostales/v2/entidades/"
  //         );
  //         setEstados(resEstados.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     getEstados();
  //   }, []);

  // fin de api de codigos postales
  // var estados_parser;
  // const [navSidebar, setNavSidebar] = useState(true);
  // // const show_sidebar = () => {
  // //   setNavSidebar(!navSidebar);
  // // };
  const [show_register, setShow_register] = useState(false);
  const [tabledata] = useState(DataClientes);
  const columns = [
    {
      title: "Nombres y Apellidos",
      field: "name",
      defaultSort: "asc",
      filterPlaceholder: "Bucar por nombre",
    },
    { title: "edad", field: "edad", filterPlaceholder: "Bucar por edad" },
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

  //   Formulario
  //  ---- obtencion de los datos por onchange
  const [name, setName] = useState("");
  const [lastname, seTlastname] = useState("");
  const [gender, setGender] = useState("");
  const [estados, setEstados] = useState("");
  const [date, setDate] = useState("");
  const [calle, setCalle] = useState("");
  const [number_ext, setNumber_ext] = useState("");
  const [number_int, setNumber_int] = useState("");
  const [municipalidad, setMunicipalidad] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //   reset formulario y esconder

  const resetForm = () => {
    console.log("refresh");
  };

  const sendDates = () => {
    console.log("aqui iran los datos");
    console.log(
      name,
      calle,
      date,
      lastname,
      estados,
      municipalidad,
      gender,
      email,
      phone,
      number_ext,
      number_int
    );
  };
  // ---- fin de obtencion de los datos por onchange

  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Home
      </Link>
      {/* <AmplifyAuthenticator> */}
      {/* <SidebarDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} /> */}

      <div
      // className={`container-dashboard ${!navSidebar ? "close_sidebar" : ""}`}
      >
        <h1 className="name-link">Mis Clientes</h1>
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
                  <span>Nombres</span>
                  <input
                    name="name"
                    type="text"
                    className="control-form"
                    placeholder="Ingresa el nombre del paciente"
                    onChange={e => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="group-date">
                  <span>Apellidos</span>
                  <input
                    name="lastname"
                    type="text"
                    className="control-form"
                    placeholder="Ingresa los apellidos del paciente"
                    onChange={e => {
                      seTlastname(e.target.value);
                    }}
                  />
                </div>
                <div className="group-date">
                  <span>Genero</span>
                  <select
                    name="gender"
                    id="genero"
                    onChange={e => {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="0">Hombre</option>
                    <option value="1">Mujer</option>
                  </select>
                </div>
                <div className="group-date">
                  <span>Fecha de nacimiento</span>
                  <input
                    name="date"
                    type="date"
                    className="control-form"
                    onChange={e => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="group-date">
                  <span>Calle</span>
                  <input
                    name="calle"
                    type="text"
                    className="control-form"
                    placeholder="Nombre de la calle"
                    onChange={e => {
                      setCalle(e.target.value);
                    }}
                  />
                </div>
                <div className="group-date">
                  <span>Numero exterior</span>
                  <input
                    name="number_ext"
                    type="number"
                    className="control-form"
                    placeholder="Numero exterior"
                    onChange={e => {
                      setNumber_ext(e.target.value);
                    }}
                  />
                </div>
                <div className="group-date">
                  <span>Numero interior</span>
                  <input
                    name="number_int"
                    type="number"
                    className="control-form"
                    placeholder="Numero interior"
                    onChange={e => {
                      setNumber_int(e.target.value);
                    }}
                  />
                </div>
                <div className="group-date">
                  <span>Estados</span>
                  <select
                    name="estados"
                    id="municipalidad"
                    onChange={e => {
                      setEstados(e.target.value);
                    }}
                  >
                    {/* {estados.map((item, index) => {
                      <option value={item.entidad}>{item.entidad}</option>;
                    })} */}
                  </select>
                </div>
                <div className="group-date">
                  <span>Municipalidad / Alcaldia</span>
                  <select
                    name="municipalidad"
                    id="municipalidad"
                    onChange={e => {
                      setMunicipalidad(e.target.value);
                    }}
                  >
                    <option value="0">OAXCA</option>
                    <option value="1">Ciudad de MXN</option>
                  </select>
                </div>

                <div className="group-date">
                  <span>Telefono</span>
                  <input
                    name="phone"
                    type="number"
                    className="control-form"
                    placeholder="Ingresa el numero de telefono"
                    onChange={e => {
                      setPhone(e.target.value);
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
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                onClick={sendDates}
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
                  resetForm();
                }}
              >
                Cancelar
              </button>
            </>
          ) : null}
        </div>

        <MaterialTable
          columns={columns}
          data={tabledata}
          title="Lista de Clientes"
          icons={tableIcons}
          options={{
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 15, 20, 50],
            pageSize: 2,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            exportAllData: true,
            exportFileName: "Mis Clientes",
            selection: true,
          }}
        />
      </div>
      {/* <AmplifySignOut /> */}
      {/* </AmplifyAuthenticator> */}
    </>
  );
};

export default IniciarSesion;
