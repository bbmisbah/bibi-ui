import React from "react";

export type CardProps = {
  name: string;
  image: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ name, image, description }) => {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        width:'300px',
        height: '320px',
        alignItems: "center",
        marginLeft: "1rem",
      }}
    >
      <img
        src={image}
        alt={name} style={{width:'250px', height: 'auto', fontSize: 12}}
      />
      <h3 >{name }</h3>
      <p style={{paddingBottom:'5rem'}}>{description}</p>
    </div>
  );
};
