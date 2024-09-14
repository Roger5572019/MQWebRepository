import React from "react";
import { introductionInfo, introductionInfoGalery } from "./introductionInfo";
import IndroductionItem from "./introductionItem";
import GaleryItem from "./GaleryItem";
import AddCursoButton from "./AddCursoButton";

function IndroductionPage() {
 
  const info = introductionInfo;
  const infoGalery = introductionInfoGalery;

  return (
    <div className="centered-container">
      <p
        style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "20px" }}
      >
        Esta página web fue creada para que los docentes puedan añadir nuevos
        contenidos educativos para sus alumnos en la aplicación Mundo de
        Química.
      </p>
      <AddCursoButton/>
      <h2>Información General</h2>
      {info.map((info) => (
        <IndroductionItem info={info} />
      ))}
      <h2>Galería</h2>
      {infoGalery.map((infoGalery) => (
        <GaleryItem infoGalery={infoGalery} />
      ))}
    </div>
  );
}

export default IndroductionPage;
