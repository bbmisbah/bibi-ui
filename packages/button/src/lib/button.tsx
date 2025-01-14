import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css"; // File CSS per gli stili

type ButtonProps = {
  children?: React.ReactNode; // contenuto del pulsante , (es: testo o icona)
  onClick?: () => void; // funzione eseguita al click
  type?: "button" | "submit" | "reset"; // tipo di pulsante
  variant?: "primary" | "secondary" | "danger"; // variante visiva del pulsante
  size?: "small" | "medium" | "large"; //dimensione del pulsante
  disabled?: boolean; // disabilita il pulsante
  fullWidth?: boolean; // estende pulsante su tutta la larghezza 
  label?: string; 
};

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "large",
  disabled = false,
  fullWidth = false,
  ...rest}: ButtonProps ) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]}`;
  return ( 
    <button
    className={buttonClass}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};


//export default Button;

