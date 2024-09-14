import React, { useEffect, useState } from "react";
import "../../styles/form.css";

function CursoForm({ formValues, setFormValues }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div>
      <form className="form-container">
        <input
          type="text"
          name="nombreCurso"
          value={formValues.nombreCurso}
          onChange={handleChange}
          placeholder="Nombre del Curso"
        />
        <input
          type="text"
          name="descripcion"
          value={formValues.descripcion}
          onChange={handleChange}
          placeholder="Descripción del Curso"
        />
        <input
          type="password"
          name="clave"
          value={formValues.clave}
          onChange={handleChange}
          placeholder="Clave"
        />
      </form>
    </div>
  );
}

export default CursoForm;
