import React from 'react';
import { Card } from '@bibi-ui/card';

type ComponentProps = {
  name: string;
  image: string;
  description: string;
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
        <Card
          key={index}
          name={component.name}
          image={component.image}
          description={component.description}
        />
      ))}
    </div>
  );
};
