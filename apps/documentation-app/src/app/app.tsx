import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@bibi-ui/button";
import { Header } from "@bibi-ui/header";
import { Navbar } from "@bibi-ui/navbar ";
import { Footer } from "@bibi-ui/footer";
import { Hero } from "@bibi-ui/hero";
import {ComponentsPage} from "../../../routes/ComponentsPage";  
import './App.css';

const App: React.FC = () => {

  return (
      <>
        <Header
          title="Bibi-UI"
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
        <Navbar
        className="navbar">
          <Link to="/">Home</Link>
          <Link to="/installation">Installation</Link>
          <Link to="/components">Components</Link>  {/* Aggiunto il link alla nuova pagina */}
        </Navbar>

        <Routes>
          <Route path="/" element={
            <>
              <Hero
              className="hero"
                title="Design with ease,"
                title2="code with efficiency."
                subtitle="Explore Bibi-UI's components."
                backgroundImage=""
                actions={
                  <Link to="/components">
                  <Button
                    children="Components"
                    label="Start Using"
                    type="button"
                    size="large"
                    variant="primary"
                    classname="secondbutton"
                  /> </Link>
                }
                actions2= {
                  <Link to="/installation">
                  <Button
                    children="Installation"
                    label="Start Using"
                    type="button"
                    size="large"
                    variant="primary"
                    classname="secondbutton"
                  /> </Link>
                }
                textAlignment="left"
                overlayColor="rgba(0, 0, 0, 0.3)"
              />
            </>
          } />
          <Route path="/components" element={<ComponentsPage />} />  {/* Nuova route */}
        </Routes>

        <Footer className="footer"
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
