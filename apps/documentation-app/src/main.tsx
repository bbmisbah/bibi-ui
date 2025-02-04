import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ButtonPage } from '../../routes/Button/ButtonPage'; 
import React from 'react';
import App from './app/app';
import { HeaderPage } from '../../routes/Header/HeaderPage'; 
import { NavbarPage } from '../../routes/Navbar/NavbarPage';
import { FooterPage } from '../../routes/Footer/FooterPage';
import { HeroPage } from '../../routes/Hero/HeroPage';
import { GridPage } from '../../routes/Grid/GridPage'
import { ComponentsPage } from '../../routes/ComponentsPage';
import { InstallationPage } from '../../routes/Installation/InstallationPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/header" element={<HeaderPage />} />
        <Route path="/navbar" element={<NavbarPage />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="/hero" element={<HeroPage />} />
        <Route path="/grid" element={<GridPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/installation" element={<InstallationPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
