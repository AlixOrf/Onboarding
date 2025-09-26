import React from "react";
import pdfFile from "./assets/livret.pdf"; // place ton PDF dans src/assets

export default function Trombi() {
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <h1 
        style={{ 
          textAlign: "center", 
          fontFamily: "'Segoe UI', sans-serif", 
          color: "#3b927aff" }}>

        Votre livret de passation</h1>

        <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          lineHeight: "1.6",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
          color: "#000000ff",
        }}>
          
          Toutes les étapes et un guide de la réalisation de vos tâches se trouvent dans les documents ci-dessous
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }} >
        <a
        href="./assets/livret.pdf" // ou pdfFile si tu importes depuis src
        download="livret.pdf"
        style={{
          display: "inline-block",
          padding: "200px 80px",
          margin: "10px 0",
          backgroundImage: "url('/imagepdf.jpg')", // ton image dans public
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "20px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        📥 Télécharger le livret
      </a>
      </div>

      <div>
        <h1 
        style={{ 
          textAlign: "center", 
          fontFamily: "'Segoe UI', sans-serif", 
          color: "#3b927aff" }}>

        Les chemins d'accès
        </h1>

        <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          lineHeight: "1.6",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
          color: "#000000ff",
        }}>
          
        Pour vous repérer dans l’organisation de l’entreprise, voici quelques chemins d’accès utiles</p>
      </div>
      
      {/* Grid avec URLs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          textAlign: "center"
        }}
      >
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
        <p>//Réseau/Marketing/Projet</p>
      </div>
    </div>
  );
}
