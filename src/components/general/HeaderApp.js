import React from "react";
import { Link } from 'react-router-dom';
import "../../styles/main.css";
function HeaderApp({ titulo }) {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link href="/">{titulo}</Link>
      </h1>
      <button className="login-button">
        <Link href="/login">Login</Link>
      </button>
    </header>
  )
}

export default HeaderApp;
