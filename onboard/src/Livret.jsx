import React from "react";
import pdfFile from "./assets/livret.pdf"; // place ton PDF dans src/assets
import pdfCharte from "./assets/charte.pdf"; 
import pdfProcess from "./assets/process.pdf"; 
import pdfGuide from "./assets/guide.pdf"; 


export default function Livret() {
  const fichiers = [
    { titre: "📥 Télécharger le livret de passation", fichier: pdfFile, nom: "livret.pdf" },
    { titre: "📥 Télécharger la charte graphique", fichier: pdfCharte, nom: "charte-graphique.pdf" },
    { titre: "📥 Télécharger le process interne", fichier: pdfProcess, nom: "process.pdf" },
    { titre: "📥 Télécharger le guide RH", fichier: pdfGuide, nom: "guide-rh.pdf" },
  ];

  


  return (
    <div style={{ textAlign: "center", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#FFFFFF", color: "#000000" }}>
      
      {/* SECTION LIVRET */}
        <h1 style={{ color: "#4989bd" }}>Votre livret de passation</h1>

        <p style={{ fontSize: "15px", color: "#000000" }}>
          Toutes les étapes et un guide de la réalisation de vos tâches se trouvent dans les documents ci-dessous
        </p>

        
      

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          marginTop: "40px",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {fichiers.map((doc, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "18px",
                color: "#000000",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              {doc.titre}
            </p>
            <a
              href={doc.fichier}
              download={doc.nom}
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
