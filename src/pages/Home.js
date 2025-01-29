import React from 'react';
import Clients from '../components/Clients';

import Footer from '../components/Footer';
import Hero from '../components/Hero';

import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from './Contact';
import FAQPage from './FaqPage';

const Home = () => {
    return (
        <>
            <Hero />
        
            <Services />
            <Clients />
            <Portfolio />
            
            <Contact/>
           <FAQPage/>
            <Footer />
        </>

    )
}

export default Home;

