import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Aggiungi Link per la navigazione
import styles from './navbar.module.css'; // Importa il file CSS

export type NavbarProps = {
  children: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);  // Stato per gestire l'apertura/chiusura della navbar

  // Funzione per toggle della navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Icona hamburger per dispositivi mobili */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776; {/* Icona hamburger */}
      </div>

      {/* Link della navbar che si aprono o chiudono */}
      <div className={`${styles['nav-links']} ${isOpen ? styles.active : ''}`}>
        {children}  {/* Renderizza i children (links) della navbar */}
      </div>
    </nav>
  );
};
