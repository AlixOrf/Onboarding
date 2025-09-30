import React, { useState } from "react";
import pdfFile from "./assets/livret.pdf"; // place ton PDF dans src/assets


export default function Livret() {
  const chemins = Array(12).fill("//Réseau/Marketing/Projet");

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1000); // reset après 1s
    });
  };


  return (
    <div style={{ textAlign: "center", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#FFFFFF", color: "#000000" }}>
      {/* SECTION LIVRET */}
      <div>
        <h1 style={{ color: "#4989bd" }}>Votre livret de passation</h1>

        <p style={{ fontSize: "15px", color: "#000000" }}>
          Toutes les étapes et un guide de la réalisation de vos tâches se trouvent dans les documents ci-dessous
        </p>

        <p
          style={{
            marginTop: "40px",
            fontSize: "20px",
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          📥 Télécharger le livret
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href={pdfFile}
          download="livret.pdf"
          style={{
            display: "inline-block",
            padding: "80px 80px",
            backgroundImage: "url('/imagepdf.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            textDecoration: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          }}
        ></a>
      </div>

      {/* SEPARATEUR */}
      <hr style={{ margin: "50px auto", width: "80%", border: "1px solid #bbc3c8" }} />

      {/* SECTION CHEMINS */}
      <div>
        <h1 style={{ color: "#4989bd" }}>Les chemins d'accès</h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto 30px auto",
          }}
        >
          Pour vous repérer dans l’organisation de l’entreprise, voici quelques chemins d’accès utiles
        </p>
      </div>

      {/* GRID CHEMINS avec bouton copier */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {chemins.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",              // <-- ajoute flex
            alignItems: "center",         // <-- aligne verticalement
            justifyContent: "space-between", // <-- espace entre texte et bouton
            padding: "15px",
            border: "1px solid #bbc3c8",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            transition: "all 0.3s ease",
            fontWeight: "500",
          }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#45cfdc";
          e.currentTarget.style.color = "#FFFFFF";
        }}  
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#FFFFFF";
          e.currentTarget.style.color = "#000000";
        }}
      >
      <span>{item}</span> {/* Texte à gauche */}

      {/* Bouton copier */}
      <button
      onClick={() => handleCopy(item, index)}
      style={{
        background: "#68eac7",
        border: "none",
        borderRadius: "30%",
        color: "#FFFFFF",
        width: "28px",
        height: "28px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#68eac7")}
    >
      {copiedIndex === index ? "✅" : "📋"}
    </button>
  </div>
))}

      </div>

      {/* SEPARATEUR */}
      <hr style={{ margin: "50px auto", width: "80%", border: "1px solid #bbc3c8" }} />

      {/* SECTION LIENS */}
      <div>
        <h1 style={{ color: "#4989bd" }}>Les sites et logiciels utiles</h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto 30px auto",
          }}
        >
          Des sites et logiciels que vous utiliserez quotidiennement
        </p>
      </div>

      {/* GRID LIENS */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "50px",
    maxWidth: "100px",
    margin: "0 525px",
  }}
>
  {[
    { name: "Google", url: "https://www.google.com", icon: "/Google.svg" },
    { name: "Slack", url: "https://slack.com", icon: "/Slack.svg" },
    { name: "GitHub", url: "https://github.com", icon: "/Github.svg" },
    { name: "Asana", url: "https://asana.com", icon: "/Asana.svg" },
  ].map((site, index) => (
    <a
      key={index}
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #bbc3c8",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#45cfdc";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#FFFFFF";
      }}
    >
      <img
        src={site.icon}
        alt={site.name}
        style={{
          width: "40px",
          height: "40px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </a>
  ))}
</div>

    </div>
  );
}
