import React from "react";

export default function Download() {
  return (
    <section className="jumbotron text-center ">
      <div className="container">
        <h1 className="descarga">¡Descarga nuestra app!</h1>
        <div className="container d-flex justify-content-center col-lg-2 col-md-3 col-6">
          <img
            className="bd-placeholder-img img-fluid imagen_download"
            src="https://imagenesrutalab.s3.amazonaws.com/images/download/logoappstore_final.png"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            aria-label="Bajar Rutalab"
          ></img>
          {/* <img className="bd-placeholder-img img-fluid imagen_download" src="https://imagenesrutalab.s3.amazonaws.com/images/download/googlepay.png" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Bajar Rutalab"></img> */}
        </div>
      </div>
    </section>
  );
}
