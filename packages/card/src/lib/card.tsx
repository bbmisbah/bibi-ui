<<<<<<< HEAD
import React from 'react';
//import './card.module.css'; // Importa il file CSS

type CardProps = {
=======
import React from "react";

export type CardProps = {
>>>>>>> origin/main
  name: string;
  image: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ name, image, description }) => {
  return (
<<<<<<< HEAD
    <div className='card-container'
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Poppins', sans-serif",
=======
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
>>>>>>> origin/main
      }}
    >
      <img
        src={image}
<<<<<<< HEAD
        alt={name}
        style={{
          width: '300px',
          height: '200px',
          objectFit: 'contain',
          marginBottom: '1rem',
        }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
=======
        alt={name} style={{width:'250px', height: 'auto', fontSize: 12}}
      />
      <h3 >{name }</h3>
      <p style={{paddingBottom:'5rem'}}>{description}</p>
>>>>>>> origin/main
    </div>
  );
};
