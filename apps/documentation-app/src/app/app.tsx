import React from 'react';
import { Button } from '@bibi-ui/button';
import { Header } from '@bibi-ui/header';
import { Navbar } from '../../../../packages/navbar /src/lib/navbar';
import { Footer } from '@bibi-ui/footer';
import { Hero } from '@bibi-ui/hero';
import {Grid} from '@bibi-ui/grid';  // Importa il componente Grid
import {Card}  from '@bibi-ui/card';  // Importa il componente Card

const App: React.FC = () => {

  const componentsData = [
    {
      name: 'Button',
      image: 'https://component.gallery/static/6c328145b09763aaf5debda0c2dbf266/Button%20Icon..svg',
      description: 'Un pulsante personalizzabile.',
    },
    {
      name: 'Header',
      image: 'https://component.gallery/static/8da6484bc584b46766a4b7fd8fcf3b1c/Header%20Icon..svg',
      description: 'Un header responsivo e stiloso.',
    },
    {
      name: 'Footer',
      image: 'https://component.gallery/static/11425a32dd05c91dd4e441c4f8dc4f54/Footer%20Icon..svg',
      description: 'Un footer minimale e funzionale.',
    },
    {
      name: 'Card',
      image: 'https://component.gallery/static/56edd72ea7e2a56adb07b28d58a0c266/Card%20Icon..svg',
      description: 'Una card con immagine, titolo e descrizione.',
    },
    {
      name: 'Navbar',
      image: 'https://component.gallery/static/a64c877443e412accdea0de33931d076/Navigation%20Icon..svg',
      description: 'Un header responsivo e stiloso.',
    },
    {
      name: 'Hero',
      image: 'https://component.gallery/static/e52c057ca09f2da159fb45b11a5ed204/Hero%20i%20icon..svg',
      description: 'Un footer minimale e funzionale.',
    },
  
  ];

  return (
    <>
      <Header
        title="Bibi-ui"
        subtitle="Components Library"
        actions={
          <Button
            children="Sign Up"
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
        backgroundImage="https://via.placeholder.com/1920x600"
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
      <Grid columns={3} gap="1.5rem" components={componentsData} />

      <Footer
        links={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]}
        copyright="© 2025 Bibi-ui. All rights reserved."
        backgroundColor="#212529"
        textColor="#fff"
      />
    </>
  );
};

export default App;
