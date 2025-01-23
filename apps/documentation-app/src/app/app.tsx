import React from 'react';
import { Button } from '@bibi-ui/button';
import { Header } from '@bibi-ui/header';
import { Navbar } from '@bibi-ui/navbar ';
import { Footer }  from '@bibi-ui/footer';
import { Hero } from '@bibi-ui/hero';
import { Grid } from '@bibi-ui/grid';
import style from 'apps/documentation-app/src/styles.css';

const App: React.FC = () => {
  const componentsData = [
    {
      name: "Button",
      image: "https://component.gallery/static/6c328145b09763aaf5debda0c2dbf266/Button%20Icon..svg",
      description: "Buttons allow the use to take actions or make choices",
    },
    {
      name: "Header",
      image: "https://component.gallery/static/8da6484bc584b46766a4b7fd8fcf3b1c/Header%20Icon..svg",
      description: "Header is used to display a title and subtitle for a page or section.",
    },
    {
      name: "Navbar",
      image: "https://component.gallery/static/a64c877443e412accdea0de33931d076/Navigation%20Icon..svg",
      description: "Navbar is used for navigation, providing links to different sections of the site.",
    },
    {
      name: "Card",
      image: "https://component.gallery/static/56edd72ea7e2a56adb07b28d58a0c266/Card%20Icon..svg",
      description: "Card is a component for displaying content in a box with an image, title, and description.",
    },
    {
      name: "Footer",
      image: "https://component.gallery/static/11425a32dd05c91dd4e441c4f8dc4f54/Footer%20Icon..svg",
      description: "Footer displays content such as links, copyrights, and contact information.",
    },
    {
      name: "Hero",
      image: "https://component.gallery/static/e52c057ca09f2da159fb45b11a5ed204/Hero%20i%20icon..svg",
      description: "Hero is a component for displaying a large box or image with a title and description",
    },
  ];
  return (
    <>
      <Header
        title="Bibi-ui"
        subtitle="Components Library"
        actions={

          <Button
            children= "Sign Up"
            label="Click Me"
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
            type="button"
            size="large"
            variant="primary"
          />
        }
        textAlignment="center"
        overlayColor="rgba(0, 0, 0, 0.3)"
      />
{/* Grid per mostrare i componenti */}
<Grid 
      cards={componentsData}
      columns={3} 
      gap="2rem" 
      style={{ paddingTop: "2rem" , margin: "3rem", marginTop: "0.2rem"}} 
      >
      </Grid>

      <Footer
        links={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        /*
        socialLinks={[
          { icon: <FaFacebook />, href: "https://facebook.com" },
          { icon: <FaTwitter />, href: "https://twitter.com" },
          { icon: <FaInstagram />, href: "https://instagram.com" },
        ]} */
        copyright="© 2025 Bibi-ui. All rights reserved."
        backgroundColor="#212529"
        textColor="#fff"
      />

      
      </>

      
  );
};

export default App;
