import React from 'react';

type CardProps = {
  name: string;
  image: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ name, image, description }) => {
  return (
    <div
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
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
