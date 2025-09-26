import React, { useState } from "react";

function FlipCard({ imageSrc, alt, text }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "300px",
        height: "200px",
        perspective: "1000px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Recto (image) */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={imageSrc}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Verso (texte) */}
        <div
          style={{
            position: "absolute",
            width: "90%",
            height: "85%",
            background: "#94ccf9ff",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            borderRadius: "10px",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
