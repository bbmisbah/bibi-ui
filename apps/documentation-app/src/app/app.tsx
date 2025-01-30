<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";  // Link per la navigazione
import { Button } from "@bibi-ui/button";
import { Header } from "@bibi-ui/header";
import { Navbar } from "@bibi-ui/navbar ";
import { Footer } from "@bibi-ui/footer";
import { Hero } from "@bibi-ui/hero";
import { Grid } from "@bibi-ui/grid";
=======
import React from 'react';
import { Button } from '@bibi-ui/button';
import { Header } from '@bibi-ui/header';
import { Navbar } from '@bibi-ui/navbar ';
import { Footer }  from '@bibi-ui/footer';
import { Hero } from '@bibi-ui/hero';
import { Grid } from '@bibi-ui/grid';
import style from 'apps/documentation-app/src/styles.css';
>>>>>>> origin/main

const App: React.FC = () => {
  const componentsData = [
    {
      name: "Button",
      image: "https://component.gallery/static/6c328145b09763aaf5debda0c2dbf266/Button%20Icon..svg",
<<<<<<< HEAD
      description: "Component used to trigger an action or event",
      route: "/button",
=======
      description: "Buttons allow the use to take actions or make choices",
>>>>>>> origin/main
    },
    {
      name: "Header",
      image: "https://component.gallery/static/8da6484bc584b46766a4b7fd8fcf3b1c/Header%20Icon..svg",
<<<<<<< HEAD
      description: "An element that appears across the top of all pages on a website or application.",
      route: "/header",
=======
      description: "Header is used to display a title and subtitle for a page or section.",
>>>>>>> origin/main
    },
    {
      name: "Navbar",
      image: "https://component.gallery/static/a64c877443e412accdea0de33931d076/Navigation%20Icon..svg",
<<<<<<< HEAD
      description: "Navbar is used to show a navigation bar on the top of the page.",
      route: "/navbar",
=======
      description: "Navbar is used for navigation, providing links to different sections of the site.",
    },
    {
      name: "Card",
      image: "https://component.gallery/static/56edd72ea7e2a56adb07b28d58a0c266/Card%20Icon..svg",
      description: "Card is a component for displaying content in a box with an image, title, and description.",
>>>>>>> origin/main
    },
    {
      name: "Footer",
      image: "https://component.gallery/static/11425a32dd05c91dd4e441c4f8dc4f54/Footer%20Icon..svg",
<<<<<<< HEAD
      description: "Footer is used at the bottom of the page to display copyright and legal information or links to related content.",
      route: "/footer",
=======
      description: "Footer displays content such as links, copyrights, and contact information.",
>>>>>>> origin/main
    },
    {
      name: "Hero",
      image: "https://component.gallery/static/e52c057ca09f2da159fb45b11a5ed204/Hero%20i%20icon..svg",
<<<<<<< HEAD
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

=======
      description: "Hero is a component for displaying a large box or image with a title and description",
    },
  ];
>>>>>>> origin/main
  return (
    <>
      <Header
        title="Bibi-ui"
        subtitle="Components Library"
        actions={
          <Button
            children="Sign Up"
            label="Click Me"
<<<<<<< HEAD
            onClick={() => alert("Sign up with email")}
=======
            onClick={() => alert('Sign up with email')}
            type="button"
            size="large"
            variant="secondary"
          />
        }
      />
      
      <Navbar>
        <a href="#home">Home</a> 
        <a href="#about">Docs</a>
        <a href="#services">Components</a>
        <a href="#contact">Guides</a>
      </Navbar>

       {/* Hero Section */}
       <Hero
        title="Benvenuto su Bibi-ui"
        subtitle="Scopri tutti i componenti"
        backgroundImage="https://via.placeholder.com/1920x600" // dopo cambiare sfondo (in todo: cambiare grafica app)
        actions={
          <Button
            children="Scopri di più"
            label="Scopri di più"
            onClick={() => alert('Discover more about the app!')}
>>>>>>> origin/main
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
<<<<<<< HEAD
      {/* Usa il componente Grid */}
      <Grid columns={3} gap="1.5rem" components={componentsWithLinks} />
=======
{/* Grid per mostrare i componenti */}
<Grid 
      cards={componentsData}
      columns={3} 
      gap="2rem" 
      style={{ paddingTop: "2rem" , margin: "3rem", marginTop: "0.2rem"}} 
      >
      </Grid>

>>>>>>> origin/main
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
