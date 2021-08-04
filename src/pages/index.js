import * as React from "react";
// import Amplify from "aws-amplify";
// import awsconfig from "../aws-exports";
import NavBarComponent from "../templates/NavBarComponent";
import BannerComponent from "../templates/BannerComponent";
import Body2Component from "../templates/Body2Component";
import Body3Component from "../templates/Body3Component";

// Amplify.configure(awsconfig);

const IndexPage = () => {
  return (
    <>
      <NavBarComponent />
      <BannerComponent />
      <Body2Component
        titulo1={"¿Qué es RUTALAB?"}
        text1={
          "Es la app que te permite realizar tus estudios de laboratorio en donde te encuentres con seguimiento en tiempo real con un click."
        }
        titulo2={"¿Cómo funciona RUTALAB?"}
        text2={
          "Selecciona el estudio que deseas, confirma tu ubicación y un laboratorista llegará a tomar tu muestra, una vez concluya la prueba, podrás consultar el resultado certificado a través de la app. RUTALAB guardará todos tus test clínicos de por vida."
        }
      />
      <Body3Component />
    </>
  );
};

export default IndexPage;
