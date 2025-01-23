import React from "react";

type GridProps = {
  children: React.ReactNode; 
  columns?: number; 
  gap?: string; 
  rowGap?: string; 
  columnGap?: string; 
  justifyItems?: "start" | "center" | "end" | "stretch"; 
  alignItems?: "start" | "center" | "end" | "stretch"; 
  style?: React.CSSProperties; 
  border?: string; // Definisce il bordo del componente
  borderColor?: string; // Colore del bordo
  borderRadius?: string; // Raggio di curvatura del bordo
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
  borderColor = '#000', // Impostazione di default colore nero
  borderRadius = '0',
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
