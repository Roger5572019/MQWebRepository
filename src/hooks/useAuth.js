import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IdentityContext } from "../contexts/IdentityContext";

function useAuth() {
  const { autenticado } = useContext(IdentityContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!autenticado) {
      navigate("/");
    }
  }, []);

  return autenticado;
}

export default useAuth;
