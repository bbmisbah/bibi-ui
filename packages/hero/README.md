### `Hero` Component

The `Hero` component is a reusable UI element designed to display a prominent section with a background image, a title, a subtitle, and optional actions. It's perfect for building headers, promotional banners, or landing pages.

---

#### **Installation**

Ensure you have installed the library containing the Hero component.

```bash
npm install @bibi-ui/hero
```

---

#### **Usage**

```tsx
import React from "react";
import { Hero } from "@bibi-ui/hero";

const App: React.FC = () => {
  return (
    <Hero
      title="Welcome to Our Platform"
      subtitle="Start your journey with us today."
      backgroundImage="https://via.placeholder.com/1500x500"
      actions={
        <button onClick={() => alert("Action Clicked!")}>Get Started</button>
      }
      textAlignment="center"
      overlayColor="rgba(0, 0, 0, 0.7)"
    />
  );
};

export default App;
```

---

#### **Props**

| Prop Name        | Type                        | Default                       | Description                                                                 |
|-------------------|-----------------------------|-------------------------------|-----------------------------------------------------------------------------|
| `title`          | `string`                   | _Required_                   | The main title displayed in the Hero.                                      |
| `subtitle`       | `string`                   | `undefined`                  | The optional subtitle displayed under the title.                           |
| `backgroundImage`| `string`                   | `undefined`                  | URL of the background image for the Hero.                                  |
| `actions`        | `React.ReactNode`          | `undefined`                  | Optional actions, like buttons or links, to be displayed below the subtitle. |
| `textAlignment`  | `"left" | "center" | "right"` | `"center"`                   | Sets the alignment of the text inside the Hero.                            |
| `overlayColor`   | `string`                   | `"rgba(0, 0, 0, 0.5)"`       | Color and opacity of the overlay applied above the background image.       |

---

#### **Styling**

The `Hero` component uses inline styles for flexibility and quick customization. You can customize further by wrapping it with a styled component or applying your own CSS classes.

---

#### **Examples**

**1. Basic Hero with Title and Subtitle**

```tsx
<Hero
  title="Your Adventure Awaits"
  subtitle="Explore the unknown."
/>
```

**2. Hero with Actions**

```tsx
<Hero
  title="Join Us Now"
  subtitle="Discover what makes us special."
  backgroundImage="https://via.placeholder.com/1500x500"
  actions={<button onClick={() => alert("Sign Up!")}>Sign Up</button>}
/>
```

**3. Hero with Custom Alignment and Overlay Color**

```tsx
<Hero
  title="Aligned to the Left"
  subtitle="Text aligned to the left"
  backgroundImage="https://via.placeholder.com/1500x500"
  textAlignment="left"
  overlayColor="rgba(0, 128, 128, 0.6)"
/>
```



