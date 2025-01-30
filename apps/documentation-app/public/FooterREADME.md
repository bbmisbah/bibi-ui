# Footer Component

The `Footer` component is a flexible and customizable footer for your application. It supports navigation links, social media links with icons, and a copyright notice.

## Installation

```bash
npm install bibi-ui
```

## Usage

```tsx
import React from "react";
import { Footer } from "your-component-library";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <Footer
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
      socialLinks={[
        { icon: <FaTwitter />, href: "https://twitter.com" },
        { icon: <FaFacebook />, href: "https://facebook.com" },
        { icon: <FaInstagram />, href: "https://instagram.com" },
      ]}
      copyright="© 2025 Your Company"
      backgroundColor="#222"
      textColor="#fff"
    />
  );
};

export default App;
```

## Props

| Prop Name       | Type                                      | Default                 | Description                                        |
|----------------|-----------------------------------------|-------------------------|----------------------------------------------------|
| `links`        | `{ label: string; href: string; }[]`    | `[]`                    | List of navigation links to be displayed.         |
| `socialLinks`  | `{ icon: React.ReactNode; href: string; }[]` | `[]`              | List of social media links with corresponding icons. |
| `copyright`    | `string`                                | `"© 2025 Your Company"` | Footer copyright text.                            |
| `backgroundColor` | `string`                            | `"#f8f9fa"`             | Background color of the footer.                   |
| `textColor`    | `string`                                | `"#212529"`             | Text color of the footer.                         |

## Styling

The `Footer` component uses inline styles by default, but you can override them with global styles or CSS modules.

Example CSS:

```css
footer {
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
}

footer a {
  margin: 0 1rem;
  text-decoration: none;
}
```

## Accessibility

- Uses semantic `<footer>` element.
- Links include `rel="noopener noreferrer"` for security.
- Icons support screen readers when provided as accessible elements.



