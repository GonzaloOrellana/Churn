import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Wholesale from './components/Wholesale';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <Products />
                <About />
                <Wholesale />
                <Testimonials />
                <Location />
                <Gallery />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
