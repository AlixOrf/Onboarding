import React from "react";
import "./Navbar.css"; // on importe le CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Gauche */}
      <div className="navbar-left">
        <a href="/livret">Livret</a>
        <a href="/trombi">Trombi</a>
      </div>

      {/* Centre */}
      <div className="navbar-center">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </a>
      </div>

      {/* Droite */}
      <div className="navbar-right">
        <span className="username">Julien Videira</span>
        <img src="/avatar.png" alt="Avatar" className="avatar" />
      </div>
    </nav>
  );
}
