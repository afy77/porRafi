import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Portfolio from '../sections/Portfolio';
import Articles from '../sections/Articles';
import Contact from '../sections/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Articles />
            <Contact />
        </>
    );
};

export default Home;
