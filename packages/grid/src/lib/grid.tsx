import React, { useState, useEffect } from 'react';
import { Card } from '@bibi-ui/card';
import { Link } from 'react-router-dom';

type ComponentProps = {
  name: string;
  image: string;
  description: string;
  route: string;
  link: React.ReactNode;
};

type GridProps = {
  components: ComponentProps[];
  gap?: string;
  columns?: number;
};

export const Grid: React.FC<GridProps> = ({ gap = '2rem', components }) => {
  const [columns, setColumns] = useState(3); // Imposta 3 colonne per default

  // Funzione per determinare il numero di colonne in base alla larghezza dello schermo
  const updateColumns = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setColumns(1); // Una colonna su schermi piccoli
    } else {
      setColumns(3); // Tre colonne su schermi più grandi
    }
  };

  // Aggiungi un event listener per aggiornare il numero di colonne al cambiare delle dimensioni della finestra
  useEffect(() => {
    updateColumns(); // Chiama una volta all'inizio
    window.addEventListener('resize', updateColumns); // Aggiungi l'event listener
    return () => window.removeEventListener('resize', updateColumns); // Pulisci l'event listener
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`, // Usa il numero dinamico di colonne
        gap: gap,
        padding: '2rem',
      }}
    >
      {components.map((component, index) => (
        <Link to={component.route} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
            name={component.name}
            image={component.image}
            description={component.description}
          />
        </Link>
      ))}
    </div>
  );
};
