# Header Component

The `Header` component is a simple and customizable header for your application. It supports a main title, an optional subtitle, and action buttons or elements.

## Installation

```bash
npm install your-component-library
```

## Usage

```tsx
import React from "react";
import { Header } from "your-component-library";
import { Button } from "your-component-library";

const App = () => {
  return (
    <Header
      title="Dashboard"
      subtitle="Manage your settings and preferences"
      actions={<Button>Settings</Button>}
    />
  );
};

export default App;
```

## Props

| Prop Name  | Type                     | Default | Description                                      |
|------------|--------------------------|---------|--------------------------------------------------|
| `title`    | `string`                  | `""`    | Main title of the header.                        |
| `subtitle` | `string`                  | `""`    | Optional subtitle displayed below the title.     |
| `actions`  | `React.ReactNode`         | `null`  | Optional actions like buttons or icons.          |

## Styling

The `Header` component uses inline styles by default. You can customize it further with global styles or CSS modules.

Example CSS:

```css
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

header h1 {
  margin: 0;
}

header p {
  margin: 0;
  color: #6c757d;
}
```

## Accessibility

- Uses a semantic `<header>` element.
- Titles are rendered as `<h1>` for proper document structure.
- Supports additional actions with `React.ReactNode` for flexibility.



