import React from 'react';
import { Card } from '@bibi-ui/card';
import { Link } from 'react-router-dom';

type ComponentProps = {
  name: string;
  image: string;
  description: string;
  route: string;  // Aggiungi 'route' per il percorso
  link: React.ReactNode;
};

type GridProps = {
  columns: number | string;
  gap?: string;
  components: ComponentProps[];
};

export const Grid: React.FC<GridProps> = ({ columns, gap = '2rem', components }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
        padding: '2rem',
      }}
    >
      {components.map((component, index) => (
        <Link to={component.route} key={index} style={{ textDecoration: "none", color: "inherit" }}>
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
