import React,{useContext} from "react";
import { IdentityContext } from "../../contexts/IdentityContext";
import { useNavigate } from "react-router-dom";

function OpenChatButton() {
    const { autenticado } = useContext(IdentityContext);
    const navigate = useNavigate();

    function handleAddButton ()
    {
        if (autenticado)
        {
             navigate("/openchat");
        }
        else
        {
            alert("¡Inicia sesión primero!");
        }
    }

  return (
    <button className="button" onClick={handleAddButton}>Open Chat</button>
  );
}

export default OpenChatButton;