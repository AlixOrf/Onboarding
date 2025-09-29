import React from "react";

const members = {
  "Pôle Marketing": [
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" },
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" },
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" },
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" }
  ],
  "Pôle Comptabilité": [
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" },
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" },
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" },
    { firstname: "Prénom", lastname: "NOM", role: "Rôle" }
  ]
};

export default function Trombi() {
  return (
    <>
      <style>{`
        .trombi-container {
          min-height: 100vh;
          background: #FFFFFF;
          font-family: Arial, sans-serif;
          color: #000000;
        }
        .trombi-main {
          padding: 32px;
        }
        .trombi-title {
          text-align: center;
          margin-bottom: 24px;
        }
        .trombi-title h2 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #4989bd;
        }
        .underline {
          width: 60px;
          height: 3px;
          background: #4989bd;
          margin: 0 auto 24px;
        }
        .trombi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          justify-items: center;
        }
        .trombi-card {
          background: #e1eaefff;
          width: 320px;
          /* Hauteur réduite */
          min-height: 110px;      /* ↓ avant 150px */
          padding: 12px 20px;     /* ↓ réduit légèrement le padding vertical */
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .trombi-photo {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #4b5563;
          flex-shrink: 0;
        }
        .person-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .person-name {
          font-size: 22px;
          font-weight: bold;
          margin: 0;
        }
        .person-role {
          font-size: 18px;
          color: #000000;
          margin-top: 6px;
        }
        .separator {
          margin: 40px auto;
          width: 80%;
          border: 1px solid #e5e7eb;
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
                {people.map((person, index) => (
                  <div key={index} className="trombi-card">
                    <div className="trombi-photo"></div>
                    <div className="person-text">
                      <p className="person-name">
                        {person.firstname} {person.lastname}
                      </p>
                      <p className="person-role">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="separator" />
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
