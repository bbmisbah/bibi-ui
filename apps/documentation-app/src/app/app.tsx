import React from 'react';
import { Button } from '@bibi-ui/button';
import { Header } from '@bibi-ui/header';
import { Navbar } from '@bibi-ui/navbar ';
import { Footer }  from '@bibi-ui/footer';
import { Hero } from '@bibi-ui/hero';
import { Grid } from '@bibi-ui/grid'

const App: React.FC = () => {
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
        title="Welcome to Bibi-ui"
        subtitle="Discover all the reusable components you will need"
        backgroundImage="https://via.placeholder.com/1920x600" // dopo cambiare sfondo (in todo: cambiare grafica app)
        actions={
          <Button
            children="Learn More"
            label="Learn More"
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
<Grid columns={2} gap="2rem" style={{ padding: "2rem" , margin: "1rem"}} border="2px solid #333" // Applica un bordo a tutta la grid
        borderColor="teal"
        borderRadius="8px" >

        <Header
          title="Components Library"
          subtitle="Components Library"
        />

        <Button
          children="Click Me"
          label="Click Me"
          onClick={() => alert("Button clicked!")}
          type="button"
          size="medium"
          variant="secondary"
        />

<Navbar>
        <a href="#home">Home</a> 
        <a href="#about">Docs</a>
        <a href="#services">Components</a>
        <a href="#contact">Guides</a>
      </Navbar>

        <Footer
          links={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          copyright="© 2025 Bibi-ui. All rights reserved."
          backgroundColor="#212529"
          textColor="#fff"
        />
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
