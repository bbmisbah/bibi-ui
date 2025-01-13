import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // File CSS per gli stili

type ButtonProps = {
  children: React.ReactNode; // contenuto del pulsante , (es: testo o icona)
  onClick?: () => void; // funzione eseguita al click
  type?: "button" | "submit" | "reset"; // tipo di pulsante
  variant?: "primary" | "secondary" | "danger"; // variante visiva del pulsante
  size?: "small" | "medium" | "large"; //dimensione del pulsante
  disabled?: boolean; // disabilita il pulsante
  fullWidth?: boolean; // estende pulsante su tutta la larghezza 
};

const Button = ({children,onClick,type = "button",variant = "primary",size = "medium",disabled = false,fullWidth = false,...rest}: ButtonProps ) => {
  return ( 
    <button
      className={`button button--${variant} button--${size} ${
        fullWidth ? "button--fullWidth" : ""
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};


export default Button;

