# Button Component

Il componente `Button` è un pulsante personalizzabile che puoi utilizzare per azioni interattive nelle tue applicazioni React. Questo componente supporta diverse varianti di stile, dimensioni e comportamenti, permettendo di adattarsi facilmente a qualsiasi esigenza.

## Caratteristiche

- **Varianti di stile**: Puoi scegliere tra più varianti visive per adattare il pulsante al design della tua applicazione.
- **Dimensioni**: Tre diverse dimensioni (piccolo, medio, grande) per controllare l'aspetto del pulsante.
- **Funzionalità di disabilitazione**: Puoi disabilitare il pulsante in base a specifiche condizioni.
- **Azione al clic**: Puoi associare una funzione da eseguire quando il pulsante viene cliccato.
- **Supporto per `fullWidth`**: Estendi il pulsante a tutta la larghezza disponibile del suo contenitore.

## Installazione

Per utilizzare il componente `Button` nel tuo progetto, devi prima installare il pacchetto che contiene il componente:

```bash
npm install @bibi-ui/button
```

### Prerequisiti

- React (versione 17 o superiore)

## Utilizzo

1. **Importazione del Componente**

   Importa il componente `Button` nel tuo file React dove desideri usarlo (ad esempio, in `App.tsx`):

   ```tsx
   import { Button } from '@bibi-ui/button';
   ```

2. **Utilizzo di Base**

   Puoi utilizzare il componente `Button` nel seguente modo:

   ```tsx
   import React from 'react';
   import { Button } from '@bibi-ui/button';

   const App: React.FC = () => {
     return (
       <div>
         <Button
           onClick={() => alert('Button clicked!')}
           label="Click Me"
           variant="primary"
           size="large"
         />
       </div>
     );
   };

   export default App;
   ```

3. **Proprietà del Componente**

   Il componente `Button` accetta le seguenti proprietà:

   - `children` (facoltativo): Contenuto del pulsante (es. testo o icona).
   - `onClick` (facoltativo): Funzione da eseguire al clic del pulsante.
   - `type`: Tipo di pulsante, può essere `"button"`, `"submit"`, o `"reset"`. Il valore predefinito è `"button"`.
   - `variant`: Variante del pulsante, può essere `"primary"`, `"secondary"`, o `"danger"`. La variante predefinita è `"primary"`.
   - `size`: Dimensione del pulsante, può essere `"small"`, `"medium"`, o `"large"`. La dimensione predefinita è `"large"`.
   - `disabled`: Imposta il pulsante come disabilitato. Il valore predefinito è `false`.
   - `fullWidth`: Se impostato su `true`, il pulsante si estenderà su tutta la larghezza disponibile del contenitore. Il valore predefinito è `false`.
   - `label` (facoltativo): Testo da visualizzare nel pulsante (se non utilizzato `children`).

4. **Esempio di Personalizzazione**

   Puoi personalizzare il pulsante scegliendo varianti e dimensioni diverse:

   ```tsx
   <Button
     onClick={() => console.log('Primary Button Clicked')}
     variant="primary"
     size="medium"
   >
     Primary Button
   </Button>

   <Button
     onClick={() => console.log('Secondary Button Clicked')}
     variant="secondary"
     size="small"
   >
     Secondary Button
   </Button>

   <Button
     onClick={() => console.log('Danger Button Clicked')}
     variant="danger"
     size="large"
   >
     Danger Button
   </Button>
   ```

5. **Disabilitare il Pulsante**

   Puoi disabilitare un pulsante in base a determinate condizioni. Ecco un esempio di come farlo:

   ```tsx
   <Button
     onClick={() => console.log('Disabled Button Clicked')}
     variant="primary"
     disabled={true}
   >
     Disabled Button
   </Button>
   ```

6. **Pulsante a Larghezza Completa**

   Se desideri che il pulsante si estenda per tutta la larghezza disponibile del suo contenitore, puoi utilizzare la proprietà `fullWidth`:

   ```tsx
   <Button
     onClick={() => console.log('Full Width Button Clicked')}
     variant="primary"
     fullWidth={true}
   >
     Full Width Button
   </Button>
   ```

## API del Componente

| Proprietà     | Tipo                              | Descrizione                                                                                             |
|---------------|-----------------------------------|---------------------------------------------------------------------------------------------------------|
| `children`    | `React.ReactNode` (facoltativo)   | Contenuto del pulsante (può essere testo o icona).                                                      |
| `onClick`     | `() => void` (facoltativo)        | Funzione che viene eseguita al clic del pulsante.                                                        |
| `type`        | `"button" | "submit" | "reset"` | Tipo di pulsante (predefinito: `"button"`).                                                             |
| `variant`     | `"primary" | "secondary" | "danger"` | Variante visiva del pulsante (predefinito: `"primary"`).                                                |
| `size`        | `"small" | "medium" | "large"`   | Dimensione del pulsante (predefinito: `"large"`).                                                       |
| `disabled`    | `boolean` (predefinito: `false`)  | Se `true`, il pulsante sarà disabilitato.                                                               |
| `fullWidth`   | `boolean` (predefinito: `false`)  | Se `true`, il pulsante si estende a tutta la larghezza del suo contenitore.                            |
| `label`       | `string` (facoltativo)            | Etichetta da visualizzare nel pulsante (se non si usano `children`).                                    |

## Conclusioni

Il componente `Button` è altamente configurabile e ti consente di creare pulsanti che si adattano perfettamente al design della tua applicazione. È semplice da usare e offre un ampio controllo su aspetto e comportamento. Puoi personalizzarlo ulteriormente per rispondere alle tue esigenze specifiche.

```

### Descrizione del contenuto:

- **Introduzione**: Introduce il componente `Button` e le sue caratteristiche principali.
- **Installazione**: Spiega come installare il pacchetto e i prerequisiti necessari.
- **Utilizzo**: Fornisce un esempio di utilizzo del componente e come configurarlo.
- **Esempi di Personalizzazione**: Mostra come cambiare le varianti, le dimensioni e altre proprietà del pulsante.
- **API**: Dettaglia tutte le proprietà disponibili per il componente.
- **Conclusioni**: Conclude con un riassunto delle capacità del componente.

Questo `README.md` fornisce una guida completa su come usare e personalizzare il componente `Button` nella libreria.