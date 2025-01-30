# Button Component

The `Button` component is a highly customizable and reusable element. It offers multiple visual variants, sizes, and features, making it adaptable to various designs and use cases.


## Installation

Ensure your build system supports CSS modules. Import the component into your project.

```bash
npm install --save bibi-ui
```


## Usage 
`import { Button } from "@bibi-ui"`

const App = () => {
  return (
    <Button onClick={() => console.log("Clicked!")}>
      Click Me
    </Button>
  );
};



## Props


| Prop Name   | Type                            | Default     | Description                                                                 |
|-------------|---------------------------------|-------------|-----------------------------------------------------------------------------|
| `children`  | `React.ReactNode`              | `undefined` | The button content, such as text or icons.                                 |
| `onClick`   | `() => void`                   | `undefined` | Function executed when the button is clicked.                              |
| `type`      | `"button"`, `"submit"`, `"reset"` | `"button"`  | Specifies the button type.                                                 |
| `variant`   | `"primary"`, `"secondary"`, `"danger"` | `"primary"` | Defines the visual style of the button.                                    |
| `size`      | `"small"`, `"medium"`, `"large"` | `"large"`   | Specifies the button size.                                                 |
| `disabled`  | `boolean`                      | `false`     | If `true`, disables the button, preventing clicks and interactions.        |
| `fullWidth` | `boolean`                      | `false`     | If `true`, makes the button stretch to fill the container width.           |
| `label`     | `string`                       | `undefined` | Accessible text for assistive technologies, useful when no `children`.     |


## Variants 
The component supports the following variants, defined in your CSS file:

Primary (Default): For primary actions.
Secondary: For secondary actions.
Danger: For actions requiring user attention or confirmation.

```
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
```

## Sizes 
The button comes in the following sizes:
small: For small buttons.
medium: For medium-sized buttons.
large (Default): For large buttons.

```
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

```

## Full Width
```
<Button fullWidth>Full Width</Button>
```

## Accessibility 
- Use the label prop to add descriptive alternative text, especially when the button contains only an icon.
- The button fully supports keyboard focus for accessibility.

```
<Button label="Download" onClick={() => console.log("Download")}>
  📥
</Button>
```

## Additional Notes 
- The component is designed to be flexible and adaptable to various contexts.
- For advanced customizations, you can extend the CSS classes or pass additional props via ...rest.

