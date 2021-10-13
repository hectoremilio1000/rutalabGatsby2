import React from "react";

export const TemplateOrden = () => {
  return (
    <div
      id="report-orden"
      style={{ color: "#5b5b5b", padding: 40, width: 589 }}
    >
      <table
        style={{
          width: "100%",
          padding: "20px 0px",
        }}
      >
        <tr>
          <th>
            <div style={{ fontSize: 14, textAlign: "center", color: "#000" }}>
              RUTALAB
            </div>
          </th>
        </tr>
      </table>
      <hr style={{ width: "100%", height: "2px", background: "#007bff" }}></hr>
      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ paddingRight: 40 }}>
            <div style={{ color: "#000", fontSize: 10 }}>
              Paciente : Eleazar Garcia Jimenez
            </div>
            <div style={{ color: "#000", fontSize: 10 }}>Edad : 43 años</div>
            <div style={{ color: "#000", fontSize: 10 }}>Sexo : Masculino</div>
            <div style={{ color: "#000", fontSize: 10 }}>
              Doctor : Francisco Tuyub Lopez
            </div>
          </th>
          <th>
            <div style={{ color: "#000", fontSize: 10 }}>
              Fecha : 9 sep 2021
            </div>
            <div style={{ color: "#000", fontSize: 10 }}>Hora : 13:12:39</div>
          </th>
        </tr>
      </table>
      <hr style={{ width: "100%", height: "2px" }}></hr>
      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ paddingRight: 40 }}>
            <div style={{ color: "#000", fontSize: 10 }}>Pueba Realizada</div>
          </th>
          <th style={{ paddingRight: 40 }}>
            <div style={{ color: "#000", fontSize: 10 }}>Resultados</div>
          </th>
          <th>
            <div
              style={{
                color: "#000",
                fontSize: 10,
                whiteSpace: "break-spaces",
              }}
            >
              Valores de Referencia
            </div>
          </th>
        </tr>
        <tr>
          <td style={{ paddingRight: 40 }}>
            <div style={{ color: "#000", fontSize: 10 }}>
              Detección de Antígeno de SARSCOV2
            </div>
          </td>
          <td style={{ paddingRight: 40 }}>
            <div style={{ color: "#000", fontSize: 10 }}>Positivo</div>
          </td>
          <td>
            <div style={{ color: "#000", fontSize: 10 }}>Negativo</div>
          </td>
        </tr>
      </table>
      <hr style={{ width: "100%", height: "2px" }}></hr>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ paddingRight: 40 }}>
            <div style={{ color: "#000", fontSize: 10 }}>
              Prueba Autorizada por Cofries N. 41FK10
            </div>
            <div style={{ color: "#000", fontSize: 10 }}>
              COVID-19 Ag test device (Nasopharyngeal). Panbio Abbott.
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};
