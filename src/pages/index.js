import * as React from "react";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import NavBarComponent from "../templates/NavBarComponent";
import BannerComponent from "../templates/BannerComponent";
import Body2Component from "../templates/Body2Component";
import Body3Component from "../templates/Body3Component";
import WorkFlow from "../templates/workflow";
import Somos from "../templates/somos";
import Reserva from "../templates/Reserva";
import Download from "../templates/Download";
import Footer from "../templates/Footer";
import Copyright from "../templates/Copyright";

Amplify.configure(awsconfig);

const IndexPage = () => {
  return (
    <>
      <NavBarComponent />
      <BannerComponent />
      <Body2Component
        titulo1={"¿Qué es RUTALAB?"}
        text1={
          "Somos una empresa que ofrece servicios de laboratorio a domicilio con un click."
        }
        titulo2={"¿Cómo funciona RUTALAB?"}
        text2={
          "Selecciona el estudio que deseas, da click en reservar confirma tu ubicación y un laboratorista llegará a tomar tu muestra, una vez concluya la prueba, podrás consultar el resultado certificado a través de esta página web en la sección de clientes."
        }
      />
      <Body3Component />
      <WorkFlow />
      <Somos
        titulo1={"¿Quiénes somos?"}
        text1={
          "Somos una startup mexicana con los estándares más altos de confiabilidad y confidencialidad de pruebas clínicas en el Sector Salud de Méxicp. Creemos que existe un mercado actual que no está siendo atendido con nuevas tecnologías que permitan al paciente tener un mayor control de su salud."
        }
      />
      <Reserva />
      <Download />
      <Footer />
      <Copyright />
    </>
  );
};

export default IndexPage;
