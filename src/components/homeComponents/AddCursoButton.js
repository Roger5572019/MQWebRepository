import React,{useContext} from "react";
import { IdentityContext } from "../../contexts/IdentityContext";
import { useNavigate } from "react-router-dom";

function AddCursoButton() {
    const { autenticado } = useContext(IdentityContext);
    const navigate = useNavigate();

    function handleAddButton ()
    {
        if (autenticado)
        {
             navigate("/about");
        }
        else
        {
            alert("inicia sesión primero!");
        }
    }

  return (
    <button className="add-button" onClick={handleAddButton}>Añadir nuevo curso</button>
  );
}

export default AddCursoButton;