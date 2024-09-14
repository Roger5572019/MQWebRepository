import React from "react";
import "../../styles/curso-view.css";

function CursoView({ formCursosValues, formClasesValues }) {
  function agregarCurso() {
    alert("se agrego el curso");
    alert(JSON.stringify(formCursosValues, null, 2)); 
    alert(JSON.stringify(formClasesValues, null, 2)); 
  }

  return (
    <div className="curso-container">
      <div>
        <h2 className="curso-title">Curso: {formCursosValues.nombreCurso}</h2>
        <p className="curso-description">
          descripción: {formCursosValues.descripcion}
        </p>
        <h2 className="clases-title">Clases</h2>
        {formClasesValues.map((clase, index) => (
          <div key={index} className="clase-container">
            <h3 className="clase-title">
              Clase {index + 1}: {clase.nombreClase}
            </h3>
            <ul className="temas-list">
              {clase.temas.map((tema, temaIndex) => (
                <li key={temaIndex} className="tema-item">
                  <span className="tema-title">{tema.tema}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={agregarCurso}> agregar curso </button>
    </div>
  );
}

export default CursoView;
