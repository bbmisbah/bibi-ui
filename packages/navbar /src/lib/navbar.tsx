import React from 'react';
import styles from './navbar.module.css'; // Importa il file CSS

export type NavbarProps = {
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className={styles.navbar}> 
      <div className={styles['nav-links']}>
        {children}  {/* per renderizzare i children (links) della navbar */}
      </div>
    </nav>
  );
};

