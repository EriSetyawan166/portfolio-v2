import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';

const Home: React.FC = () => {

    return (
        <div className='mb-20 px-10'>
            <Hero />
            <About />
            <TechStack />
            <Projects />
        </div>
    )
};

export default Home;
