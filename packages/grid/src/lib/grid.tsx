import React from 'react';
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
  children: React.ReactNode; 
  columns?: number; 
  gap?: string; 
  rowGap?: string; 
  columnGap?: string; 
  justifyItems?: "start" | "center" | "end" | "stretch"; 
  alignItems?: "start" | "center" | "end" | "stretch"; 
  style?: React.CSSProperties; 
  border?: string; 
  borderColor?: string; 
  borderRadius?: string; 
};

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3, 
  gap = "1rem", 
  rowGap,
  columnGap,
  justifyItems = "stretch", 
  alignItems = "stretch",
  style,
  border = 'none',
  borderColor = '#000', 
  borderRadius = '0',
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        rowGap,
        columnGap,
        justifyItems,
        alignItems,
        border: border,
        borderColor: borderColor,
        borderRadius: borderRadius,
        ...style, 
      }}
    >
      {children}
    </div>
  );
};
