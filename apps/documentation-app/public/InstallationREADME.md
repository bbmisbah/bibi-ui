
# Bibi-UI

**Bibi-UI** is a UI component library that helps you build modern, responsive, and reusable user interfaces. It contains basic components like buttons, grids, and modals, ideal for developing web applications with a consistent and easily customizable design.

## Installation

Follow these steps to install and set up Bibi-UI in your project.

### 1. Install @bibi-ui/core

To get started, install the core Bibi-UI library into your project by running one of the following commands:

#### With npm:
```bash
npm i @bibi-ui/core
```

### 2. Install Optional Dependencies

If you want to use advanced features of Bibi-UI, such as custom themes or grid layouts, you can install the optional packages:

#### For custom theme support:
```bash
npm i @bibi-ui/theme
```

#### For grid layout support:
```bash
npm i @bibi-ui/grid
```

### 3. Install React (if not already installed)

Bibi-UI is compatible with React 16.8 or higher versions. If you don't have React in your project yet, you can install it with:

```bash
npm i react react-dom
```

### 4. Add the Provider

To use Bibi-UI correctly, wrap your application with the `Provider` component. This provider manages the styling and themes, if used.

Here is an example of how to set it up:

```tsx
import React from "react";
import { Provider } from "@bibi-ui/core"; // Import Bibi-UI's provider

function App() {
  return (
    <Provider>
      {/* The rest of your application */}
    </Provider>
  );
}

export default App;
```

### 5. Configure TypeScript (if you're using TypeScript)

If you're using TypeScript, update the `tsconfig.json` settings to include the following options:

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

If you're using JavaScript, you can skip this step.

## Usage

Once the library is installed, you can start using Bibi-UI components in your project. Here is an example of how to use the `Button` component:

```tsx
import React from "react";
import { Button } from "@bibi-ui/core"; // Import the Button component

const Demo = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

export default Demo;
```

### Available Components

- **Button**: A button for customizable actions.
- **Grid**: A grid layout to organize your components responsively.
- **Modal**: A pop-up to display additional content in an elegant way.

Check out the full documentation for a list of all components and how to use them.

## Contribute

Whether you're a beginner or an advanced user of Bibi-UI, contributing is the best way to connect with other developers building amazing products with this library. Visit our [contribution page](#) to learn more.

## Documentation

Visit our [full documentation](#) for more detailed examples, usage guides, and tutorials on how to customize and extend the components.
```

This version retains the same structure as the original Italian one, translated into English.