import React from "react";

type HeroProps = {
  title: string; // Titolo principale del componente Hero
  subtitle?: string; // Sottotitolo opzionale
  backgroundImage?: string; // URL dell'immagine di sfondo
  actions?: React.ReactNode; // Azioni opzionali (es. pulsanti)
  textAlignment?: "left" | "center" | "right"; // Allineamento del testo
  overlayColor?: string; // Colore dell'overlay (opacità sopra lo sfondo)
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  actions,
  textAlignment = "center",
  overlayColor = "rgba(0, 0, 0, 0.5)",
}) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: textAlignment,
        height: "400px",
        color: "#fff",
        background: backgroundImage
          ? `linear-gradient(${overlayColor}, ${overlayColor}), url(${backgroundImage}) center/cover no-repeat`
          : "#333",
        textAlign: textAlignment,
        padding: "2rem",
      }}
    >
      <div style={{ zIndex: 2, maxWidth: "800px" }}>
        <h1 style={{ margin: "0 0 1rem", fontSize: "2.5rem" }}>{title}</h1>
        {subtitle && <p style={{ margin: "0 0 2rem", fontSize: "1.25rem" }}>{subtitle}</p>}
        <div>{actions}</div>
      </div>
    </div>
  );
};



