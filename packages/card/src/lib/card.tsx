import React, { useState } from 'react';
import styles from './card.module.css'; // Importa il file CSS

type CardProps = {
  name: string;
  image: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ name, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles['card-container']} // Usa la classe CSS per la card
      style={{
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: isHovered ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
