import React from 'react';
import { Button } from '@bibi-ui/button';
import { Header } from '@bibi-ui/header';
import { Navbar } from '@bibi-ui/navbar ';

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
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </Navbar>
      </>
  );
};

export default App;
