import React from "react";
import pdfFile from "./assets/livret.pdf"; // place ton PDF dans src/assets

export default function Trombi() {
  return (
    <div style={{ padding: "10px" }}>
      <h1 
      style={{ 
        textAlign: "center", 
        fontFamily: "'Segoe UI', sans-serif", 
        color: "#5bd87a" }}>

        Votre livret de passation</h1>

      <p
      style={{
          textAlign: "center",
          fontSize: "12px",
          lineHeight: "1.6",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
          color: "#000000ff",
        }}>
          
      Toutes les étapes et un guide de la réalisation de vos tâches se trouvent dans les documents ci-dessous</p>
      
      <a
        href="./assets/livret.pdf" // ou pdfFile si tu importes depuis src
        download="livret.pdf"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          margin: "20px 0",
          backgroundColor: "#ced1cfff",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        📥 Télécharger le livret
      </a>

    </div>
  );
}
