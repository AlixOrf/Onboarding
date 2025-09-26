import React, { useState } from "react";
import Navbar from "./Navbar";
import Livret from "./Livret";
import Trombi from "./Trombi";
import FlipCard from "./FlipCard"; // <-- on importe

function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {/* Titre de bienvenue */}
      <h1
        style={{
          color: "#4989bd",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Bienvenue chez TechXpertise !
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Nous sommes ravis de t’accueillir dans notre équipe.
      </p>

      {/* Message d'équipe */}
      <div
        style={{
          margin: "2rem auto",
          maxWidth: "700px",
          background: "#e1eaefff",
          padding: "1.5rem",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <h3>Bienvenue chez TechXpertise !</h3>
        <p>
          Nous sommes ravis de t’avoir dans l’équipe. Ici, chacun a sa place
          pour innover, partager et grandir. N’hésite pas à poser des questions,
          proposer des idées et profiter de l’ambiance collaborative.
        </p>
        <p>✨ Hâte de voir ta contribution sur nos prochains projets !</p>
      </div>

      {/* Section Actualité */}
      <h2
        style={{
          fontSize: "2rem",
          color: "#3b927aff",
          marginBottom: "1.5rem",
        }}
      >
        Actualité
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          margin: "2rem 0",
          flexWrap: "wrap",
        }}
      >
        <FlipCard
          imageSrc="/image.png"
          alt="Actualité 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."
        />
        <FlipCard
          imageSrc="/image.png"
          alt="Actualité 2"
          text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
        <FlipCard
          imageSrc="/image.png"
          alt="Actualité 3"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        />
      </div>

      {/* Section A propos */}
      <h2
        style={{
          fontSize: "2rem",
          color: "#3b927aff",
          marginBottom: "1.5rem",
        }}
      >
        À propos
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <img
          src="/image.png"
          alt="À propos"
          style={{
            width: "350px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div style={{ maxWidth: "450px", textAlign: "left" }}>
          <h3>Qui sommes-nous ?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home"); // page active

  return (
    <div>
      <Navbar onNavigate={setPage} />

      {page === "home" && <Home />}
      {page === "livret" && <Livret />}
      {page === "trombi" && <Trombi />}
    </div>
  );
}

export default App;
