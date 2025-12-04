import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-pill">
                <nav className="nav-left">
                    <button onClick={() => scrollToSection('inicio')} className="nav-link active">Inicio</button>
                    <button onClick={() => scrollToSection('productos')} className="nav-link">Productos</button>
                    <button onClick={() => scrollToSection('sobre-nosotros')} className="nav-link">Sobre Nosotros</button>
                </nav>

                <div className="logo-container">
                    <img src="/imagenes/logoChurn.jpg" alt="Churn Logo" className="header-logo-img" />
                </div>

                <nav className="nav-right">
                    <button onClick={() => scrollToSection('mayorista')} className="nav-link">Venta Mayorista</button>
                    <button onClick={() => scrollToSection('ubicacion')} className="nav-link">Ubicación</button>
                    <button onClick={() => scrollToSection('contacto')} className="nav-link">Contacto</button>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>
                    <FaTimes />
                </button>
                <button onClick={() => scrollToSection('inicio')} className="mobile-link">Inicio</button>
                <button onClick={() => scrollToSection('productos')} className="mobile-link">Productos</button>
                <button onClick={() => scrollToSection('sobre-nosotros')} className="mobile-link">Sobre Nosotros</button>
                <button onClick={() => scrollToSection('mayorista')} className="mobile-link"> Venta Mayorista</button>
                <button onClick={() => scrollToSection('ubicacion')} className="mobile-link">Ubicación</button>
                <button onClick={() => scrollToSection('contacto')} className="mobile-link">Contacto</button>
            </div>
        </header>
    );
};

export default Header;
