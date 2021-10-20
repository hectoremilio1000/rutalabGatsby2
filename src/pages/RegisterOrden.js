import React, { useState } from "react";
import MaterialTable from "material-table";
import { FaPlus } from "react-icons/fa";
import { DataOrdenes } from "../components/DataOrdenes";

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

const RegisterOrden = () => {
  const [navSidebar, setNavSidebar] = useState(true);
  const show_sidebar = () => {
    setNavSidebar(!navSidebar);
  };
  const [show_register, setShow_register] = useState(false);
  const [tabledata] = useState(DataOrdenes);
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
    },
    {
      title: "Pdf",
      field: "pdf",
    },
  ];

  //   Formulario
  //  ---- obtencion de los datos por onchange
  const [setOrden] = useState("");
  const [paciente, setPaciente] = useState("");
  const [servicio, setServicio] = useState("");
  const [medico, setMedico] = useState("");

  //   reset formulario y esconder

  const resetForm = () => {
    console.log("refresh");
  };

  const sendDates = () => {
    console.log("aqui iran los datos");
    let orden = document.querySelector("#orden");
    let n_orden = orden.value;
    setOrden(n_orden);
    console.log(n_orden, medico, servicio, paciente);
  };
  // ---- fin de obtencion de los datos por onchange
  return (
    <>
      <SidebarDashboard navSidebar={navSidebar} show_sidebar={show_sidebar} />

      <div
        id="register-orden"
        className={`container-dashboard ${!navSidebar ? "close_sidebar" : ""}`}
      >
        <h1 className="name-link">Ordenes</h1>
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
              <h1 className="row-title">Detalle de orden</h1>
              <div className="dates-row-4">
                <div className="group-date">
                  <span>#Orden</span>
                  <input
                    id="orden"
                    name="orden"
                    type="text"
                    className="control-form"
                    value="0051"
                    disabled
                  />
                </div>
                <div className="group-date">
                  <span>Paciente</span>
                  <select
                    name="paciente"
                    id="paciente"
                    onChange={e => {
                      setPaciente(e.target.value);
                    }}
                  >
                    <option value="0">Seleccione un paciente</option>
                    <option value="1">Juan Mejia Vasquez</option>
                    <option value="2">Hector el loco juan</option>
                  </select>
                </div>
                <div className="group-date">
                  <span>Servicio</span>
                  <select
                    name="servicio"
                    id="servicio"
                    onChange={e => {
                      setServicio(e.target.value);
                    }}
                  >
                    <option value="0">Seleccione un Servicio</option>
                    <option value="1">Prueba Covid 2019</option>
                    <option value="2">Test de Embarazo</option>
                  </select>
                </div>
                <div className="group-date">
                  <span>Medico</span>
                  <select
                    name="medico"
                    id="medico"
                    onChange={e => {
                      setMedico(e.target.value);
                    }}
                  >
                    <option value="0">Seleccione un medico</option>
                    <option value="1">Hector Emilio velasquez</option>
                    <option value="2">Jampier Smith Vasquez Mija</option>
                    <option value="3">Jos Francisco Espinoza Ramos</option>
                  </select>
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
        {/* <button className="btn btn-primary" onClick={generatePDF}>
          Generate PDF
        </button> */}
        <MaterialTable
          columns={columns}
          data={tabledata}
          title="Lista de ordenes"
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
            exportFileName: "Mis Ordenes",
            selection: true,
          }}
        />
      </div>
    </>
  );
};

export default RegisterOrden;
