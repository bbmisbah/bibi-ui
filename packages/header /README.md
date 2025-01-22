# Header Component

Il componente `Header` è una soluzione versatile per visualizzare un'intestazione in una pagina. Consente di aggiungere un titolo, un sottotitolo opzionale e azioni come pulsanti o link, il tutto con uno stile semplice e facilmente personalizzabile.

## Caratteristiche

- **Titolo e Sottotitolo**: Puoi aggiungere un titolo principale e un sottotitolo opzionale.
- **Azioni personalizzabili**: Puoi aggiungere azioni (come pulsanti o link) a destra del titolo.
- **Stile semplice e reattivo**: Viene fornito con uno stile di base, ma è facilmente personalizzabile per adattarsi al design della tua applicazione.

## Installazione

Per utilizzare il componente `Header` nel tuo progetto, devi prima installare il pacchetto che contiene il componente:

```bash
npm install @bibi-ui/header
```

### Prerequisiti

- React (versione 17 o superiore)

## Utilizzo

1. **Importazione del Componente**

   Importa il componente `Header` nel file in cui desideri utilizzarlo (ad esempio, in `App.tsx`):

   ```tsx
   import { Header } from '@bibi-ui/header';
   ```

2. **Utilizzo di Base**

   Puoi utilizzare il componente `Header` nel seguente modo:

   ```tsx
   import React from 'react';
   import { Header } from '@bibi-ui/header';

   const App: React.FC = () => {
     return (
       <div>
         <Header
           title="My Application"
           subtitle="The best app ever!"
           actions={<button>Click Me</button>}
         />
         {/* Contenuto principale */}
       </div>
     );
   };

   export default App;
   ```

3. **Proprietà del Componente**

   Il componente `Header` accetta le seguenti proprietà:

   - `title`: Il titolo principale dell'intestazione (obbligatorio).
   - `subtitle`: Il sottotitolo dell'intestazione (opzionale).
   - `actions`: Contenuto aggiuntivo da visualizzare a destra del titolo (ad esempio, pulsanti o link). Può essere un `ReactNode` (obbligatorio).

4. **Esempio di Personalizzazione**

   Puoi personalizzare l'intestazione come desideri, ad esempio aggiungendo azioni personalizzate:

   ```tsx
   <Header
     title="Dashboard"
     subtitle="Overview of your data"
     actions={
       <div>
         <button>Login</button>
         <button>Sign Up</button>
       </div>
     }
   />
   ```

   In questo esempio, l'intestazione include due pulsanti di login e registrazione accanto al titolo.

5. **Stile e Personalizzazione**

   Il componente `Header` ha uno stile di base, ma puoi personalizzarlo ulteriormente modificando direttamente le proprietà CSS tramite `style` inline o utilizzando classi CSS personalizzate.

   Esempio di utilizzo di `className` per un maggiore controllo:

   ```tsx
   <Header
     title="My App"
     subtitle="Your app subtitle"
     actions={<button className="custom-button">Action</button>}
   />
   ```

   Puoi anche applicare il tuo CSS per uno stile personalizzato.

## API del Componente

| Proprietà    | Tipo                          | Descrizione                                                                                              |
|--------------|-------------------------------|----------------------------------------------------------------------------------------------------------|
| `title`      | `string` (obbligatorio)       | Titolo principale dell'intestazione.                                                                     |
| `subtitle`   | `string` (facoltativo)        | Sottotitolo opzionale dell'intestazione.                                                                 |
| `actions`    | `React.ReactNode` (facoltativo) | Contenuto aggiuntivo (ad esempio, pulsanti o link) da visualizzare a destra del titolo.                  |

## Conclusioni

Il componente `Header` è una soluzione semplice e flessibile per la creazione di intestazioni nelle tue applicazioni React. Puoi utilizzarlo per visualizzare un titolo, un sottotitolo e azioni personalizzabili con facilità. Grazie alla sua configurabilità e facilità d'uso, è perfetto per la maggior parte delle necessità di intestazioni.

```

### Descrizione del contenuto:

- **Introduzione**: Introduce il componente `Header` e le sue caratteristiche principali.
- **Installazione**: Spiega come installare il pacchetto e i prerequisiti necessari.
- **Utilizzo**: Fornisce un esempio di utilizzo del componente e come configurarlo.
- **Esempi di Personalizzazione**: Mostra come cambiare i titoli, aggiungere azioni e personalizzare l'intestazione.
- **API**: Dettaglia tutte le proprietà disponibili per il componente.
- **Conclusioni**: Conclude con un riassunto delle capacità del componente.

Questo `README.md` fornisce una guida completa su come usare e personalizzare il componente `Header` nella libreria.