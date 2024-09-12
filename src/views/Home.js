import React from "react";
import { Link } from "react-router-dom";
import HeaderApp from "../components/general/HeaderApp";
import IndroductionPage from "../components/homeComponents/introductionPage";

function Home() {
  return (
    <div>
      <HeaderApp titulo="Inicio" />
      <IndroductionPage />
    </div>
  );
}

export default Home;
