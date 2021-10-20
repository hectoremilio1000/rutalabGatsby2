import React, { useState } from "react";
import { Link } from "gatsby";
import MaterialTable from "material-table";
import { DataOrdenesToday } from "../components/DataOrdenesToday";

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
import "../styles/admin.css";

//amplify
import SidebarDashboard from "../components/SidebarDashboard";

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
let lenghtData = 0;
DataOrdenesToday.forEach(e => {
  lenghtData += 1;
});

const Administrador = () => {
  const [navSidebar, setNavSidebar] = useState(true);

  const [tabledata, setTableData] = useState(DataOrdenesToday);
  const show_sidebar = () => {
    setNavSidebar(!navSidebar);
  };
  const columns = [
    {
      title: "# Orden",
      field: "orden",
      defaultSort: "asc",
      filterPlaceholder: "Bucar por #orden",
    },
    {
      title: "Fecha",
      field: "fecha",
      filterPlaceholder: "Bucar por fecha",
    },
    {
      title: "Hora",
      field: "hora",
      FilterList: false,
    },
    {
      title: "Paciente",
      field: "paciente",
      filterPlaceholder: "Bucar por nombre del paciente",
    },
    {
      title: "Servicio",
      field: "servicio",
    },
    {
      title: "Medico",
      field: "medico",
    },
    {
      title: "Status",
      field: "status",
      render: rowData => (
        <div
          className={
            rowData.status === "Creado"
              ? "status-create"
              : rowData.status === "En camino"
              ? "status-camino"
              : rowData.status === "Completado"
              ? "status-completado"
              : null
          }
        >
          {rowData.status}
        </div>
      ),
    },
    {
      title: "Edit",
      field: "link",
      render: rowData => (
        <Link href={`/ordendetail?id=${rowData.orden}`}>Ver mas</Link>
      ),
    },
  ];

  return (
    <>
      <Link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Inicio
      </Link>

      <SidebarDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} />
      <div
        className={`container-dashboard ${!navSidebar ? "close_sidebar" : ""}`}
      >
        <h1 className="welcome-title">Bienvenido Administrador</h1>
        <h3 className="title-ordenes">Ordenes del dia</h3>
        <MaterialTable
          columns={columns}
          data={tabledata}
          title="Lista de ordenes"
          icons={tableIcons}
          options={{
            filtering: true,
            paging: true,
            pageSizeOptions: [lenghtData, 5, 10, 15, 20, 50],
            pageSize: lenghtData,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            exportButton: true,
            exportAllData: true,
            exportFileName: "Mis Ordenes",
            selection: true,
          }}
        />
      </div>
    </>
  );
};

export default Administrador;
