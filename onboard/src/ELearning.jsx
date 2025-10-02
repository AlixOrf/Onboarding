import React, { useState, useEffect, useRef } from "react";

export default function ELearning() {
  const formations = [
    { id: 1, title: "Introduction à l’entreprise", progress: 0 },
    { id: 2, title: "Outils collaboratifs", progress: 0 },
    { id: 3, title: "Méthodologie Agile", progress: 0 },
    { id: 4, title: "Sécurité informatique", progress: 0 },
  ];

  const [selectedFormation, setSelectedFormation] = useState(null);
  const [progress, setProgress] = useState({});
  const modalContentRef = useRef(null);

  // Met à jour la progression au scroll
  useEffect(() => {
    if (!selectedFormation) return;

    const handleScroll = () => {
      const el = modalContentRef.current;
      if (!el) return;

      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const percent = Math.min(100, Math.round((scrollTop / scrollHeight) * 100));

      setProgress((prev) => ({
        ...prev,
        [selectedFormation.id]: percent,
      }));
    };

    const el = modalContentRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [selectedFormation]);

  return (
    <div style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#4989bd", marginBottom: "30px" }}>
        🎓 E-learning
      </h1>

      {/* Cartes de formations */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {formations.map((formation) => (
          <div
            key={formation.id}
            onClick={() => setSelectedFormation(formation)}
            style={{
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ color: "#333" }}>{formation.title}</h3>
            {/* Barre de progression */}
            <div
              style={{
                marginTop: "10px",
                height: "8px",
                background: "#eee",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress[formation.id] || 0}%`,
                  height: "100%",
                  background: "#45cfdc",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
            <p style={{ fontSize: "13px", marginTop: "5px", color: "#666" }}>
              Progression : {progress[formation.id] || 0}%
            </p>
          </div>
        ))}
      </div>

      {/* Modal (pop-up) */}
      {selectedFormation && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "70%",
              height: "70%",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header modal */}
            <div
              style={{
                padding: "15px",
                background: "#4989bd",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <h2>{selectedFormation.title}</h2>
              <button
                onClick={() => setSelectedFormation(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
            </div>

            {/* Contenu modal avec scroll */}
            <div
              ref={modalContentRef}
              style={{
                flex: 1,
                padding: "20px",
                overflowY: "auto",
                lineHeight: "1.6",
              }}
            >
              <p>
                <b>{selectedFormation.title}</b>. <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, justo ac finibus sodales, diam magna tincidunt libero, eu convallis orci neque nec urna.
              </p>

              {/* SEPARATEUR */}
              <hr style={{ margin: "50px auto", width: "80%", border: "1px solid #bbc3c8" }} />

              <img
                src="/1.png"
                alt="Exemple"
                style={{ width: "70%", margin: "20px 0", borderRadius: "8px" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, justo ac finibus sodales, diam magna tincidunt libero, eu convallis orci neque nec urna. Donec vulputate, mi vitae lacinia blandit, sem nisl dictum arcu, eu pretium nisl turpis a neque. Nullam ac nisl faucibus, tempor magna eget, viverra lectus. Nunc ullamcorper porta risus sit amet vulputate. Mauris eget erat vel nibh aliquet interdum quis eu ligula. Donec feugiat lectus porttitor tellus ornare dictum. Pellentesque quis sem orci. Fusce ullamcorper nisl ac ullamcorper imperdiet. Maecenas tincidunt tristique nulla eget consequat. Phasellus ut vulputate neque. Vestibulum blandit felis ultrices, tristique odio vestibulum, consectetur augue. Proin ac elit commodo, tristique mauris in, ultrices justo. 
              </p>

              {/* SEPARATEUR */}
              <hr style={{ margin: "50px auto", width: "70%", border: "0.5px solid #d6dce0ff" }} />

              <img
                src="/2.png"
                alt="Exemple"
                style={{ width: "70%", margin: "20px", borderRadius: "8px" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, justo ac finibus sodales, diam magna tincidunt libero, eu convallis orci neque nec urna. Donec vulputate, mi vitae lacinia blandit, sem nisl dictum arcu, eu pretium nisl turpis a neque. Nullam ac nisl faucibus, tempor magna eget, viverra lectus. Nunc ullamcorper porta risus sit amet vulputate. Mauris eget erat vel nibh aliquet interdum quis eu ligula. Donec feugiat lectus porttitor tellus ornare dictum. Pellentesque quis sem orci. Fusce ullamcorper nisl ac ullamcorper imperdiet. Maecenas tincidunt tristique nulla eget consequat. Phasellus ut vulputate neque. Vestibulum blandit felis ultrices, tristique odio vestibulum, consectetur augue. Proin ac elit commodo, tristique mauris in, ultrices justo. 
              </p>

              {/* SEPARATEUR */}
              <hr style={{ margin: "50px auto", width: "70%", border: "0.5px solid #d6dce0ff" }} />

              <img
                src="/3.png"
                alt="Exemple"
                style={{ width: "70%", margin: "20px 0", borderRadius: "8px" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, justo ac finibus sodales, diam magna tincidunt libero, eu convallis orci neque nec urna. Donec vulputate, mi vitae lacinia blandit, sem nisl dictum arcu, eu pretium nisl turpis a neque. Nullam ac nisl faucibus, tempor magna eget, viverra lectus. Nunc ullamcorper porta risus sit amet vulputate. Mauris eget erat vel nibh aliquet interdum quis eu ligula. Donec feugiat lectus porttitor tellus ornare dictum. Pellentesque quis sem orci. Fusce ullamcorper nisl ac ullamcorper imperdiet. Maecenas tincidunt tristique nulla eget consequat. Phasellus ut vulputate neque. Vestibulum blandit felis ultrices, tristique odio vestibulum, consectetur augue. Proin ac elit commodo, tristique mauris in, ultrices justo. 
              </p>

              {/* SEPARATEUR */}
              <hr style={{ margin: "50px auto", width: "70%", border: "0.5px solid #d6dce0ff" }} />

              <img
                src="/4.png"
                alt="Exemple"
                style={{ width: "70%", margin: "20px 0", borderRadius: "8px" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, justo ac finibus sodales, diam magna tincidunt libero, eu convallis orci neque nec urna. Donec vulputate, mi vitae lacinia blandit, sem nisl dictum arcu, eu pretium nisl turpis a neque. Nullam ac nisl faucibus, tempor magna eget, viverra lectus. Nunc ullamcorper porta risus sit amet vulputate. Mauris eget erat vel nibh aliquet interdum quis eu ligula. Donec feugiat lectus porttitor tellus ornare dictum. Pellentesque quis sem orci. Fusce ullamcorper nisl ac ullamcorper imperdiet. Maecenas tincidunt tristique nulla eget consequat. Phasellus ut vulputate neque. Vestibulum blandit felis ultrices, tristique odio vestibulum, consectetur augue. Proin ac elit commodo, tristique mauris in, ultrices justo. 
              </p>

              {/* SEPARATEUR */}
              <hr style={{ margin: "50px auto", width: "80%", border: "1px solid #bbc3c8" }} />
              
              <p style={{ marginTop: "100px", fontWeight: "bold" }}>
                🎉 Félicitations, vous avez atteint la fin de la formation !
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
