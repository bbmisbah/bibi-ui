import React from 'react';
import { Button } from '@bibi-ui/button';
import { Header } from '@bibi-ui/header';
import { Navbar } from '@bibi-ui/navbar ';
import { Footer }  from '../../../../packages/footer/src/lib/footer';

const App: React.FC = () => {
  return (
    <>
      <Header
        title="Documentation App"
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
