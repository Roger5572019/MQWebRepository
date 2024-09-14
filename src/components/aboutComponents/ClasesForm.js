import React, { useState } from "react";
import "../../styles/form.css";
import TemaForm from "./TemaItem";
import { Clase, Tema } from "./estructuraForms";

function ClaseForm({ formValues, setFormValues }) {
  const handleClaseChange = (e, index) => {
    const { name, value } = e.target;
    const updatedClases = [...formValues];
    updatedClases[index] = {
      ...updatedClases[index],
      [name]: value,
    };
    setFormValues(updatedClases);
  };

  const handleTemaChange = (e, claseIndex, temaIndex) => {
    const { name, value } = e.target;
    const updatedClases = [...formValues];
    updatedClases[claseIndex].temas[temaIndex] = {
      ...updatedClases[claseIndex].temas[temaIndex],
      [name]: value,
    };
    setFormValues(updatedClases);
  };

  const addClase = () => {
    setFormValues([...formValues, new Clase("", [new Tema("")])]);
  };

  const addTema = (claseIndex) => {
    const updatedClases = [...formValues];
    updatedClases[claseIndex].temas.push(new Tema(""));
    setFormValues(updatedClases);
  };

  const removeClase = () => {
    if (formValues.length > 1) {
      setFormValues(formValues.slice(0, -1));
    }
  };

  const removeTema = (claseIndex, temaIndex) => {
    const updatedClases = [...formValues];
    if (updatedClases[claseIndex].temas.length > 1) {
      updatedClases[claseIndex].temas.splice(temaIndex, 1);
      setFormValues(updatedClases);
    }
  };

  return (
    <div className="centered-container">
      <div className="quantity-controls">
        <button onClick={removeClase}>-</button>
        <a> Número de Clases</a>
        <button onClick={addClase}>+</button>
      </div>

      {formValues.map((clase, claseIndex) => (
        <div key={claseIndex}>
          <form className="form-container">
            <input
              type="text"
              name="nombreClase"
              value={clase.nombreClase}
              onChange={(e) => handleClaseChange(e, claseIndex)}
              placeholder={`Nombre de la Clase ${claseIndex + 1}`}
            />
            <div>
              {clase.temas.map((tema, temaIndex) => (
                <TemaForm
                  temaIndex={temaIndex}
                  tema={tema}
                  handleTemaChange={(e) =>
                    handleTemaChange(e, claseIndex, temaIndex)
                  }
                  removeTema={() => removeTema(claseIndex, temaIndex)}
                />
              ))}

              <button
                style={{ marginTop: "20px" }}
                type="button"
                onClick={() => addTema(claseIndex)}
              >
                Agregar Nuevo Tema
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

export default ClaseForm;
