# Grid

The `Grid` component is a flexible layout system that displays a collection of components in a structured grid format. It is designed to provide a visually appealing way to showcase reusable UI components.

## Installation

```bash
npm install @bibi-ui/grid
```

## Import

```tsx
import { Grid } from "@bibi-ui/grid";
```

## Props

### `GridProps`

| Name       | Type                 | Default  | Description                                         |
|-----------|----------------------|----------|-----------------------------------------------------|
| `columns` | `number | string`     | Required | Number of columns in the grid layout.              |
| `gap`     | `string`              | `"2rem"` | Space between grid items.                          |
| `components` | `ComponentProps[]` | Required | List of components to be displayed inside the grid.|

### `ComponentProps`

| Name         | Type              | Description                                      |
|-------------|------------------|--------------------------------------------------|
| `name`      | `string`          | Name of the component.                          |
| `image`     | `string`          | URL or path to the component’s preview image.   |
| `description` | `string`        | Short description of the component.             |
| `route`     | `string`          | Navigation path to the component details page.  |
| `link`      | `React.ReactNode` | Custom link to access more details.             |

## Usage

```tsx
import React from "react";
import { Grid } from "@bibi-ui/grid";
import { BrowserRouter as Router } from "react-router-dom";

const componentsList = [
  {
    name: "Button",
    image: "/images/button.png",
    description: "A versatile button component.",
    route: "/components/button",
    link: <a href="/components/button">View Details</a>,
  },
  {
    name: "Card",
    image: "/images/card.png",
    description: "A customizable card component.",
    route: "/components/card",
    link: <a href="/components/card">View Details</a>,
  },
];

export const Example = () => {
  return (
    <Router>
      <Grid columns={2} gap="1.5rem" components={componentsList} />
    </Router>
  );
};
```

## Accessibility

- Uses semantic `div` and `a` elements for proper structure.
- Ensures keyboard navigation compatibility.

