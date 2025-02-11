import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import '../Button/ButtonPage.css';
import remarkGfm from "remark-gfm";
import { Navbar } from "@bibi-ui/navbar ";
import { Link } from "react-router-dom";
import { Footer } from "@bibi-ui/footer";

export const GridPage: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        // URL relativo al file `readme.md` nella cartella `public`
        const response = await fetch("/GridREADME.md");
        if (!response.ok) {
          throw new Error("Errore nel caricamento del file Markdown");
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Errore durante il caricamento del Markdown:", error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <>
      <Navbar className="navbar">
        <Link to="/">Home</Link>
        <Link to="/installation">Installation</Link>
        <Link to="/components">Components</Link>
      </Navbar>
      <div className="page-container">

        <ReactMarkdown
          children={markdownContent}
          remarkPlugins={[remarkGfm]} // Abilita il supporto per le tabelle
        />
      </div>
      <Footer
        className="footer"
        links={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyright="© 2025 Bibi-ui. All rights reserved."
        backgroundColor="#07444b"
        textColor="#fff"
      />
    </>

  );
};


