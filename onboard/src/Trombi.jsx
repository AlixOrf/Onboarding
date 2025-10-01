import React, { useState } from "react";

const members = {
  "Pôle Tech": [
    { firstname: "Clara", lastname: "Dubois", role: "Développeuse Full Stack", email: "clara.dubois@example.com", linkedin: "https://linkedin.com/in/clara-dubois/888", photo: "/image-trombi-femme1.jpg" },
    { firstname: "Julien", lastname: "Martinez", role: "DevOps Engineer", email: "julien.martinez@example.com", linkedin: "https://linkedin.com/in/julien-martinez/888", photo: "/image-trombi-homme1.jpg" },
    { firstname: "Inès", lastname: "Nguyen", role: "Data Scientist", email: "ines.nguyen@example.com", linkedin: "https://linkedin.com/in/ines-nguyen/888", photo: "/image-trombi-femme2.jpg" },
    { firstname: "Adrien", lastname: "Lefèvre", role: "UX/UI Designer", email: "adrien.lefevre@example.com", linkedin: "https://linkedin.com/in/adrien-lefevre/888", photo: "/image-trombi-homme2.jpg" }
  ],
  "Pôle Marketing": [
    { firstname: "Élise", lastname: "Marquant", role: "Responsable Marketing Digital", email: "elise.marquand@example.com", linkedin: "https://linkedin.com/in/elise-marquand/888", photo: "/image-trombi-femme3.jpg" },
    { firstname: "Lucas", lastname: "Devaux", role: "Chef de Produit", email: "lucas.devaux@example.com", linkedin: "https://linkedin.com/in/lucas-devaux/888", photo: "/image-trombi-homme3.jpg" },
    { firstname: "Sofia", lastname: "Bellamy", role: "Content Manager", email: "sofia.bellamy@example.com", linkedin: "https://linkedin.com/in/sofia-bellamy/888", photo: "/image-trombi-femme4.jpg" },
    { firstname: "Nathan", lastname: "Clément", role: "Responsable Acquisition", email: "nathan.clement@example.com", linkedin: "https://linkedin.com/in/nathan-clement/888", photo: "/image-trombi-homme4.jpg" }
  ],
  "Pôle Comptabilité": [
    { firstname: "Amélie", lastname: "Rocher", role: "Comptable", email: "amelie.rocher@example.com", linkedin: "https://linkedin.com/in/amelie-rocher/888", photo: "/image-trombi-femme5.jpg" },
    { firstname: "Théo", lastname: "Giraud", role: "Contrôleur de Gestion", email: "theo.giraud@example.com", linkedin: "https://linkedin.com/in/theo-giraud/888", photo: "/image-trombi-homme5.jpg" },
  ]
};

export default function Trombi() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <>
      <style>{`
        .trombi-container { min-height: 100vh; background: #FFFFFF; font-family: Arial, sans-serif; color: #000000; }
        .trombi-main { padding: 32px; }
        .trombi-title { text-align: center; margin-bottom: 24px; }
        .trombi-title h2 { font-size: 28px; font-weight: bold; margin-bottom: 8px; color: #4989bd; }
        .underline { width: 60px; height: 3px; background: #4989bd; margin: 0 auto 24px; }
        .trombi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; justify-items: center; }
        .trombi-card { background: #e1eaefff; width: 320px; min-height: 100px; padding: 10px 17px; border-radius: 12px; display: flex; align-items: center; gap: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.05); cursor: pointer; transition: transform 0.2s; }
        .trombi-card:hover { transform: translateY(-5px); }
        .trombi-photo { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
        .person-text { display: flex; flex-direction: column; justify-content: center; }
        .person-name { font-size: 22px; font-weight: bold; margin: 0; }
        .person-role { font-size: 18px; color: #000000; margin-top: 6px; }
        .separator { margin: 40px auto; width: 80%; border: 1px solid #e5e7eb; }

        /* Modal */
        .modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: flex-start; animation: fadeIn 0.3s ease forwards; }
        .modal-content { background: white; padding: 24px; border-radius: 12px; width: 400px; margin-top: -300px; animation: slideDown 0.5s forwards; text-align: left; }
        .modal-close { margin-top: 16px; cursor: pointer; color: #4989bd; font-weight: bold; text-align: center; }

        .modal-photo { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; display: block; margin: 0 auto 16px; }
        .modal-name { text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 16px; }
        .modal-text { margin-bottom: 8px; }

        .social-icons { display: flex; gap: 16px; justify-content: center; margin-top: 16px; }
        .social-icons img { width: 50px; height: 50px; cursor: pointer; transition: transform 0.2s; }
        .social-icons img:hover { transform: scale(1.1); }

        @keyframes slideDown {
          from { margin-top: -300px; opacity: 0; }
          to { margin-top: 100px; opacity: 1; }
        }
        @keyframes fadeIn {
          from { background: rgba(0,0,0,0); }
          to { background: rgba(0,0,0,0.5); }
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
                  <div key={index} className="trombi-card" onClick={() => setSelectedPerson(person)}>
                    <img src={person.photo} alt={`${person.firstname} ${person.lastname}`} className="trombi-photo" />
                    <div className="person-text">
                      <p className="person-name">{person.firstname} {person.lastname}</p>
                      <p className="person-role">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="separator" />
            </section>
          ))}

          {selectedPerson && (
            <div className="modal" onClick={() => setSelectedPerson(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={selectedPerson.photo} alt={`${selectedPerson.firstname} ${selectedPerson.lastname}`} className="modal-photo" />
                <p className="modal-name">{selectedPerson.firstname} {selectedPerson.lastname}</p>
                <p className="modal-text"><strong>Rôle :</strong> {selectedPerson.role}</p>
                <p className="modal-text"><strong>Email :</strong> {selectedPerson.email}</p>

                {/* Icônes réseaux sociaux */}
                <div className="social-icons">
                  <a href={selectedPerson.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="LinkedIn" />
                  </a>
                  <a href="https://slack.com/intl/fr-fr/" target="_blank" rel="noopener noreferrer">
                    <img src="/slack.svg" alt="Slack" />
                  </a>
                </div>

                <div className="modal-close" onClick={() => setSelectedPerson(null)}>Fermer</div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
