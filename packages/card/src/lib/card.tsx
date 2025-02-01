import React from 'react';
import './card.module.css'; // Importa il file CSS

type CardProps = {
  name: string;
  image: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ name, image, description }) => {
  return (
    <div className="card-container">
      <img
        src={image}
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
    </div>
  );
};
