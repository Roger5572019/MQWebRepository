import React, { useEffect, useState } from "react";
import HeaderApp from "../components/general/HeaderApp";
import useAuth from "../hooks/useAuth";
import CursoForm from "../components/aboutComponents/CursoForm";
import ClaseForm from "../components/aboutComponents/ClasesForm";
import CursoView from "../components/aboutComponents/CursoView";
import { useNavigate } from "react-router-dom";

import {
  Curso,
  Clase,
  Tema,
} from "../components/aboutComponents/estructuraForms";

function About() {
  const autenticado = useAuth();
  const [estado, setEstado] = useState(1);
  const navigate = useNavigate();

  const [formCursosValues, setFormCursosValues] = useState(new Curso());
  const [formClasesValues, setFormClasesValues] = useState([
    new Clase("", [new Tema("")]),
  ]);

  function siguiente() {
    let datosVacios = false;

    if (estado == 1) {
      if (!formCursosValues.nombreCurso || !formCursosValues.clave || !formCursosValues.descripcion) {
        datosVacios = true;
      }
    }

    if (estado == 2) {
      formClasesValues.map((clase) => {
        if (!clase.nombreClase) {
          datosVacios = true;
        } else {
          clase.temas.map((tema) => {
            if (!tema.tema) {
              datosVacios = true;
            }
          });
        }
      });
    }

    if (!datosVacios) {
      if (estado < 3) {
        setEstado(estado + 1);
      }
    }
    else
    {
      alert("Asegúrate de llenar todos los campos")
    }
  }

  function anterior() {
    if (estado > 1) {
      setEstado(estado - 1);
    }
  }

  function menu() {
    navigate("/");
  }
  {
    return (
      <div>
        <HeaderApp titulo="Curso Nuevo" />
        {estado == 1 && (
          <CursoForm
            formValues={formCursosValues}
            setFormValues={setFormCursosValues}
          />
        )}

        {estado == 2 && (
          <ClaseForm
            formValues={formClasesValues}
            setFormValues={setFormClasesValues}
          />
        )}
        {estado == 3 && (
          <CursoView
            formClasesValues={formClasesValues}
            formCursosValues={formCursosValues}
          />
        )}
        <div className="centered-container">
          <div className="quantity-controls">
            {estado == 1 && <button onClick={menu}>menu</button>}
            {estado > 1 && <button onClick={anterior}>atras</button>}
            {estado < 3 && <button onClick={siguiente}>siguiente</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
