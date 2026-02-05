import React from 'react';
import MainLayout from './src/components/MainLayout';
import Hero from './src/sections/Hero';
import About from './src/sections/About';
import Skills from './src/sections/Skills';
import Experience from './src/sections/Experience';
import Portfolio from './src/sections/Portfolio';
import Articles from './src/sections/Articles';
import Contact from './src/sections/Contact';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Articles />
      <Contact />
    </MainLayout>
  );
}
