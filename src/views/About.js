import { useContext, useEffect } from "react";
import HeaderApp from "../components/general/HeaderApp";
import useAuth from "../hooks/useAuth";

function About()
{
  
  const autenticado = useAuth();

  {
    return (
      <div>
      <HeaderApp titulo="Curso Nuevo"/>
      </div>
    );
  };
}



export default About;