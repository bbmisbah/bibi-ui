import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; 


export const HeaderPage: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        // URL relativo al file `readme.md` nella cartella `public`
        const response = await fetch("/HeaderREADME.md");
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
    <div className="page-container">
      
      <ReactMarkdown
                    children={markdownContent}
                    remarkPlugins={[remarkGfm]} // Abilita il supporto per le tabelle
                  />
    </div>
  );
};


