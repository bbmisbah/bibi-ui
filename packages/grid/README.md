## Componente `Grid`

Il componente `Grid` ti consente di creare una griglia flessibile e riutilizzabile con diverse opzioni di personalizzazione, come il numero di colonne, la spaziatura e le proprietà di allineamento.

### Uso di base

```tsx
import { Grid } from '@bibi-ui/grid';

const App = () => {
  return (
    <Grid columns={3} gap="1rem">
      <div>Elemento 1</div>
      <div>Elemento 2</div>
      <div>Elemento 3</div>
      <div>Elemento 4</div>
      <div>Elemento 5</div>
      <div>Elemento 6</div>
    </Grid>
  );
};
```

### Props del componente `Grid`

| Nome           | Tipo                | Descrizione                                                                                      | Valore Predefinito |
|----------------|---------------------|--------------------------------------------------------------------------------------------------|--------------------|
| `children`     | `React.ReactNode`    | Gli elementi figli che verranno mostrati nella griglia.                                           | -                  |
| `columns`      | `number`             | Il numero di colonne da visualizzare nella griglia.                                                | `3`                |
| `gap`          | `string`             | La spaziatura tra gli elementi della griglia.                                                     | `1rem`             |
| `rowGap`       | `string`             | La spaziatura tra le righe.                                                                       | -                  |
| `columnGap`    | `string`             | La spaziatura tra le colonne.                                                                    | -                  |
| `justifyItems` | `"start" | "center" | "end" | "stretch"` | Allineamento orizzontale degli elementi della griglia.                                             | `"stretch"`        |
| `alignItems`   | `"start" | "center" | "end" | "stretch"` | Allineamento verticale degli elementi della griglia.                                               | `"stretch"`        |
| `style`        | `React.CSSProperties` | Stili CSS personalizzati da applicare alla griglia.                                               | -                  |
| `border`       | `string`             | Il bordo della griglia.                                                                           | `"none"`           |
| `borderColor`  | `string`             | Il colore del bordo della griglia.                                                                | `"#000"`           |
| `borderRadius` | `string`             | Il raggio di curvatura del bordo.                                                                 | `"0"`              |

### Esempio avanzato

Puoi anche aggiungere un bordo, un colore personalizzato e un raggio di curvatura per la griglia.

```tsx
import { Grid } from '@bibi-ui/grid';

const App = () => {
  return (
    <Grid
      columns={2}
      gap="2rem"
      border="2px solid #333"
      borderColor="teal"
      borderRadius="8px"
      style={{ padding: '2rem', margin: '1rem' }}
    >
      <div>Elemento 1</div>
      <div>Elemento 2</div>
      <div>Elemento 3</div>
      <div>Elemento 4</div>
    </Grid>
  );
};
```

### Personalizzazione

Puoi facilmente personalizzare il comportamento della griglia tramite le seguenti proprietà:

- **`columns`**: Modifica il numero di colonne (ad esempio, `columns={4}` per una griglia a 4 colonne).
- **`gap`**: Imposta la spaziatura tra gli elementi (ad esempio, `gap="2rem"`).
- **`justifyItems` e `alignItems`**: Per allineare gli elementi all'interno della griglia.
- **`border`**: Aggiungi un bordo personalizzato (ad esempio, `border="1px solid black"`).
- **`borderColor`**: Imposta il colore del bordo.
- **`borderRadius`**: Definisci il raggio di curvatura del bordo per angoli arrotondati.

## Componenti inclusi in Bibi-UI

Oltre al componente `Grid`, Bibi-UI include altri componenti utili per costruire la tua interfaccia utente:

- **`Button`**
- **`Navbar`**
- **`Header`**
- **`Footer`**
- **`Hero`**

### Esempio di utilizzo dei componenti

```tsx
import { Button, Header, Navbar, Footer, Hero } from '@bibi-ui/core';

const App = () => {
  return (
    <>
      <Header title="Bibi-UI" subtitle="Componenti riutilizzabili" />
      <Navbar>
        <a href="#home">Home</a>
        <a href="#docs">Docs</a>
      </Navbar>

      <Hero title="Benvenuto in Bibi-UI" subtitle="Scopri i componenti riutilizzabili per il tuo progetto" />

      <Button children="Clicca qui" onClick={() => alert("Cliccato!")} />

      <Footer links={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]} />
    </>
  );
};
```

