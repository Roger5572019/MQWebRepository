import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/main.css";
import { IdentityContext } from "../../contexts/IdentityContext";
import OpenChatButton from "./OpenChatButton";

function HeaderApp({ titulo }) {
  const { autenticado, login, logout } = useContext(IdentityContext);
  const navigate = useNavigate();

  function handleLogin() {
    login();
  }

  function handleMenu() {
    navigate("/");
  }

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="header">
      <h1 className="header-title">
        <a> {titulo} </a>
      </h1>
      <div style={{ display: "flex", gap: "20px" }}>
      <button
          className="button"
          onClick={handleMenu}
        >Inicio</button>
        <OpenChatButton />
        <button
          className="button"
          onClick={!autenticado ? handleLogin : handleLogout}
        >
          {autenticado ? "Log Out" : "Log In"}
        </button>
      </div>
    </header>
  );
}

export default HeaderApp;
