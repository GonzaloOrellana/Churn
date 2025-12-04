import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Wholesale from './components/Wholesale';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <Products />
                <About />
                <Wholesale />
                <Location />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
