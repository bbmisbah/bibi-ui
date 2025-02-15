import React from "react";

type HeroProps = {
  title: string; // Titolo principale del componente Hero
  title2:string;
  subtitle?: string; // Sottotitolo opzionale
  backgroundImage?: string; // URL dell'immagine di sfondo
  actions?: React.ReactNode; // Azioni opzionali (es. pulsanti)
  actions2?: React.ReactNode;
  textAlignment?: "left" | "center" | "right"; // Allineamento del testo
  overlayColor?: string; // Colore dell'overlay (opacità sopra lo sfondo)
  className?: string; 
};

export const Hero: React.FC<HeroProps> = ({
  title,
  title2,
  subtitle,
  backgroundImage,
  actions,
  actions2,
  textAlignment = "center",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  className,
}) => {
  return (
    <div
    className={className}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: textAlignment,
        height: "450px",
        color: "#fff",
        background: backgroundImage
          ? ` url(${backgroundImage}) center/cover no-repeat`
          : "#edf2fb",
        textAlign: textAlignment,
        padding: "2rem",
        paddingLeft: "5rem"
      }}
    >
      <div style={{ zIndex: 2, maxWidth: "800px" }}>
        <h1 style={{ margin: "0 0 1rem", fontSize: "3.5rem" }}>{title}</h1>
        <h1 style={{ margin: "0 0 1rem", fontSize: "3.5rem", marginTop:"-1rem" }}>{title2}</h1>
        {subtitle && <p style={{ margin: "0 0 2rem", fontSize: "1.5rem", fontStyle:"italic" }}>{subtitle}</p>}
        <div style={{display: "flex", gap: "1rem"}}>{actions} {actions2}</div>
        
      </div>
    </div>
  );
};



