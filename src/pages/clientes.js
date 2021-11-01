import React, { useEffect, useState } from "react";

import { Link } from "gatsby";
import MaterialTable from "material-table";

//importar dataclientes
// import { DataClientes } from "../components/DataClientes";

// //API AMPKILY
import { API, graphqlOperation } from "aws-amplify";
import { listPacientes } from "../graphql/queries";

//import authenticator
import { AmplifySignOut, AmplifyAuthenticator } from "@aws-amplify/ui-react";

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

  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Home
      </Link>
      <AmplifyAuthenticator>
        <div>
          <h1 className="row-title">Datos del paciente</h1>
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
        <AmplifySignOut />
      </AmplifyAuthenticator>
    </>
  );
};

export default Clientes;
