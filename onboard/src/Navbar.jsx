import React from "react";
import "./Navbar.css";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      {/* Gauche */}
      <div className="navbar-left">
        <button onClick={() => onNavigate("livret")}>Livret</button>
        <button onClick={() => onNavigate("trombi")}>Trombi</button>
      </div>

      {/* Centre */}
      <div className="navbar-center">
        <button onClick={() => onNavigate("home")}>
          <img src="/logo.png" alt="Logo" className="logo" />
        </button>
      </div>

      {/* Droite */}
      <div className="navbar-right">
        <span className="username">Julien Videira</span>
        <img src="/avatar.png" alt="Avatar" className="avatar" />
      </div>
    </nav>
  );
}
