import React from "react";
import { Card, CardProps } from '@bibi-ui/card';// Import del componente Card



type GridProps = {
  children?: React.ReactNode; 
  cards?: CardProps[]; 
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
  cards,
  columns = 3,
  gap = "1rem",
  rowGap,
  columnGap,
  justifyItems = "stretch",
  alignItems = "stretch",
  style,
  border = "none",
  borderColor = "#000",
  borderRadius = "0",
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        rowGap,
        columnGap,
        justifyItems,
        alignItems,
        border,
        borderColor,
        borderRadius,
        ...style,
        marginRight: "2rem"
      }}
    >
      {cards
        ? cards.map((card, index) => (
            <Card key={index} {...card} /> // Usa il componente Card
          ))
        : children}
    </div>
  );
};
