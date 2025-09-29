import React, { useState } from "react";

const members = {
  "Pôle Marketing": [
    { name: "NOM Prénom", role: "Rôle", info: "Informations supplémentaires sur la personne." },
    { name: "NOM Prénom", role: "Rôle", info: "Informations supplémentaires sur la personne." },
    { name: "NOM Prénom", role: "Rôle", info: "Informations supplémentaires sur la personne." },
  ],
  "Pôle Comptabilité": [
    { name: "NOM Prénom", role: "Rôle", info: "Informations supplémentaires sur la personne." },
    { name: "NOM Prénom", role: "Rôle", info: "Informations supplémentaires sur la personne." },
    { name: "NOM Prénom", role: "Rôle", info: "Informations supplémentaires sur la personne." },
  ],
};

export default function Trombi() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <style>{`
        .trombi-container {
          min-height: 100vh;
          background: white;
          font-family: Arial, sans-serif;
        }
        .trombi-main {
          padding: 32px;
        }
        .trombi-title {
          text-align: center;
        }
        .trombi-title h2 {
          font-size: 24px;
          font-weight: bold;
        }
        .underline {
          width: 60px;
          height: 3px;
          background: #9ca3af;
          margin: 4px auto 16px;
        }
        .trombi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          justify-items: center;
        }
        .trombi-card {
          background: #e5e7eb;
          padding: 16px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 250px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .trombi-card.expanded {
          transform: scale(1.1);
          background: #d1d5db;
        }
        .trombi-photo {
          width: 80px;
          height: 80px;
          background: #4b5563;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .trombi-card.expanded .trombi-photo {
          width: 120px;
          height: 120px;
        }
        .person-name {
          font-weight: bold;
        }
        .person-role {
          font-style: italic;
          color: #4b5563;
        }
        .person-info {
          margin-top: 8px;
          font-size: 14px;
          color: #333;
          text-align: center;
        }
        .separator {
          margin-top: 40px;
          border: 1px solid #d1d5db;
        }
      `}</style>

      <div className="trombi-container">
        <main className="trombi-main">
          {Object.entries(members).map(([pole, people]) => (
            <section key={pole} className="trombi-section">
              <div className="trombi-title">
                <h2>{pole}</h2>
                <div className="underline" />
              </div>
              <div className="trombi-grid">
                {people.map((person, index) => {
                  const isSelected = selected === `${pole}-${index}`;
                  return (
                    <div
                      key={index}
                      className={`trombi-card ${isSelected ? "expanded" : ""}`}
                      onClick={() =>
                        setSelected(isSelected ? null : `${pole}-${index}`)
                      }
                    >
                      <div className="trombi-photo"></div>
                      <div>
                        <p className="person-name">{person.name}</p>
                        <p className="person-role">{person.role}</p>
                      </div>
                      {isSelected && (
                        <p className="person-info">{person.info}</p>
                      )}
                    </div>
                  );
                })}
              </div>
              <hr className="separator" />
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
