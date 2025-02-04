import React from 'react';

type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  links?: FooterLink[]; // Elenco di link da mostrare nel footer
  socialLinks?: { icon: React.ReactNode; href: string }[]; // Link ai social con icone
  copyright?: string; // Testo di copyright
  backgroundColor?: string; // Colore di sfondo del footer
  textColor?: string; // Colore del testo
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({
  links = [],
  socialLinks = [],
  copyright = "© 2025 Your Company",
  backgroundColor = "#f8f9fa",
  textColor = "#212529",
}) => {
  return (
    <footer className='footer'
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid #ddd",
        marginTop:"0rem"
      }}
    >
      {/* Link principali */}
      {links.length > 0 && (
        <nav style={{ marginBottom: "1rem" }}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{
                margin: "0 1rem",
                color: textColor,
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              style={{
                margin: "0 0.5rem",
                color: textColor,
                fontSize: "1.2rem",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      )}

      {/* Copyright */}
      <div style={{ fontSize: "0.9rem" }}>{copyright}</div>
    </footer>
  );
};

//export default Footer;