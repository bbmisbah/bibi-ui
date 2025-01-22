# Componente Footer

Il componente `Footer` è un footer riutilizzabile e personalizzabile, progettato per essere utilizzato in modo coerente in diverse applicazioni. Supporta l'aggiunta di link, icone social e un messaggio di copyright.

## Funzionalità
- **Link**: Aggiungi link di navigazione al tuo footer.
- **Icone Social**: Includi link ai social media con icone personalizzate.
- **Testo Copyright**: Mostra un messaggio di copyright nella parte inferiore della pagina.
- **Design Responsivo**: Si adatta a diverse dimensioni dello schermo.

---

## Installazione

Assicurati di importare il componente nel tuo progetto:

```tsx
import { Footer } from "./components/Footer";
```

---

## Esempio di Utilizzo

Ecco un esempio di base su come utilizzare il componente `Footer`:

```tsx
import React from "react";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      {/* Contenuto dell'app */}
      <Footer
        links={[
          { label: "Home", href: "/" },
          { label: "Chi siamo", href: "/about" },
          { label: "Contatti", href: "/contact" },
        ]}
        socialLinks={[
          { icon: <i className="fab fa-facebook"></i>, href: "https://facebook.com" },
          { icon: <i className="fab fa-twitter"></i>, href: "https://twitter.com" },
        ]}
        copyright="© 2025 La tua azienda. Tutti i diritti riservati."
      />
    </div>
  );
};

export default App;
```

---

## Props

Il componente `Footer` accetta le seguenti proprietà:

| Proprietà       | Tipo                                              | Obbligatorio | Descrizione                                                                 |
|------------------|---------------------------------------------------|--------------|-----------------------------------------------------------------------------|
| `links`         | `Array<{ label: string; href: string }>`          | No           | Un array di link di navigazione da visualizzare nel footer.                |
| `socialLinks`   | `Array<{ icon: React.ReactNode; href: string }>`  | No           | Un array di link ai social media, ognuno contenente un'icona e un URL.     |
| `copyright`     | `string`                                          | No           | Testo da mostrare come messaggio di copyright, solitamente in fondo.       |

---

## Esempio di Props

Ecco alcuni esempi per personalizzare il `Footer`:

### Esempio di Link
```js
links={[
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/services" },
  { label: "Contatti", href: "/contact" }
]}
```

### Esempio di Social Links
```js
socialLinks={[
  { icon: <i className="fab fa-facebook"></i>, href: "https://facebook.com" },
  { icon: <i className="fab fa-instagram"></i>, href: "https://instagram.com" },
]}
```

### Esempio di Copyright
```js
copyright="© 2025 La tua azienda. Tutti i diritti riservati."
```

---

## Stile

Il componente `Footer` utilizza il file `footer.module.css` per la personalizzazione degli stili. Supporta le seguenti classi CSS:

| Nome Classe      | Descrizione                            |
|------------------|----------------------------------------|
| `.footer`        | Contenitore principale del footer.     |
| `.links`         | Stili per i link di navigazione.       |
| `.socialLinks`   | Stili per le icone dei social media.   |
| `.copyright`     | Stili per la sezione di copyright.     |

Per personalizzare ulteriormente gli stili, puoi modificare il file `footer.module.css` o fornire i tuoi stili personalizzati.

---

## Accessibilità

Il componente `Footer` è progettato per essere accessibile:
- **Ruoli ARIA**: I link di navigazione utilizzano HTML semantico per supporto ai lettori di schermo.
- **Navigazione da Tastiera**: Tutti i link e i pulsanti sono completamente navigabili tramite tastiera.

---

