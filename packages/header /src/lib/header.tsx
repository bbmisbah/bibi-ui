import React from 'react';

export type HeaderProps = {
  title?: string; // per titolo principale
  subtitle?: string; // sottotitolo opzionale
  actions?: React.ReactNode; // azioni opzionali (es. pulsanti)
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, actions }) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd',
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>{title}</h1>
        {subtitle && <p style={{ margin: 0, color: '#6c757d' }}>{subtitle}</p>}
      </div>
      <div>{actions}</div>
    </header>
  );
};

//export default Header;
