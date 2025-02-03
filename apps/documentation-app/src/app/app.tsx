import React from "react";
import { Link } from "react-router-dom";  // Link per la navigazione
import { Button } from "@bibi-ui/button";
import { Header } from "@bibi-ui/header";
import { Navbar } from "@bibi-ui/navbar ";
import { Footer } from "@bibi-ui/footer";
import { Hero } from "@bibi-ui/hero";
import { Grid } from "@bibi-ui/grid";

const App: React.FC = () => {
  const componentsData = [
    {
      name: "Button",
      image: "https://component.gallery/static/6c328145b09763aaf5debda0c2dbf266/Button%20Icon..svg",
      description: "A component used to trigger an action or event",
      route: "/button",
    },
    {
      name: "Header",
      image: "https://component.gallery/static/8da6484bc584b46766a4b7fd8fcf3b1c/Header%20Icon..svg",
      description: "An element that appears across the top of all pages on a website or application.",
      route: "/header",
    },
    {
      name: "Navbar",
      image: "https://component.gallery/static/a64c877443e412accdea0de33931d076/Navigation%20Icon..svg",
      description: "Navbar is used to show a navigation bar on the top of the page.",
      route: "/navbar",
    },
    {
      name: "Footer",
      image: "https://component.gallery/static/11425a32dd05c91dd4e441c4f8dc4f54/Footer%20Icon..svg",
      description: "Footer is used at the bottom of the page to display copyright and legal information or links to related content.",
      route: "/footer",
    },
    {
      name: "Hero",
      image: "https://component.gallery/static/e52c057ca09f2da159fb45b11a5ed204/Hero%20i%20icon..svg",
      description: "Hero is a large banner, usually appearing as one of the first items on a page; it often contains a full-width image.",
      route: "/hero",
    },
    {
      name: "Grid",
      image: "https://component.gallery/static/252d744b1c127db6f89bba94c55f600c/Table%20Icon..svg",
      description: "Grid is a layout for managing grid layouts",
      route: "/grid",
    },
  ];

  const componentsWithLinks = componentsData.map((component) => ({
    ...component,
    link: (
      <Link to={component.route} style={{ textDecoration: "none", color: "inherit" }}>
        {component.name}
      </Link>
    ),
  }));

  return (
    <>
      <Header
        title="Bibi-ui"
        subtitle="Components Library"
        actions={
          <Button
            children="Sign Up"
            label="Click Me"
            onClick={() => alert("Sign up with email")}
            type="button"
            size="large"
            variant="primary"
          />
        }
      />
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/components">Components</Link>
        <Link to="/guides">Guides</Link>
      </Navbar>
      <Hero
        title="Design with ease,"
        title2="code with efficiency."
        subtitle="Explore Bibi-UI's components."
        backgroundImage=""
        actions={
          <Button
            children="Discover"
            label="Start Using"
            onClick={() => alert("Discover more about the app!")}
            type="button"
            size="large"
            variant="primary"
            classname="secondbutton"
          />
        }
        textAlignment="left"
        overlayColor="rgba(0, 0, 0, 0.3)"
      />
      {/* Usa il componente Grid */}
      <Grid columns={3} gap="1.5rem" components={componentsWithLinks} />
      <Footer
        links={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyright="© 2025 Bibi-ui. All rights reserved."
        backgroundColor="#07444b"
        textColor="#fff"
      />
    </>
  );
};

export default App;
