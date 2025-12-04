import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand-section">
                        <h3 className="footer-brand">Churn</h3>
                        <p className="footer-tagline">Churros de verdad, hechos con amor.</p>
                    </div>

                    <div className="footer-links-section">
                        <a href="#inicio" className="footer-link">Inicio</a>
                        <a href="#productos" className="footer-link">Productos</a>
                        <a href="#sobre-nosotros" className="footer-link">Sobre Nosotros</a>
                        <a href="#mayorista" className="footer-link">Mayoristas</a>
                        <a href="#ubicacion" className="footer-link">Ubicación</a>
                        <a href="#contacto" className="footer-link">Contacto</a>
                    </div>

                    <div className="footer-social-section">
                        <a
                            href="https://instagram.com/churreria.churn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                        >
                            <FaInstagram />

                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 Churn. Todos los derechos reservados.
                    </p>
                    <p className="footer-credit">
                        Diseñado y desarrollado por{' '}
                        <a
                            href="https://gonzaorellana.com.ar/portfolio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="credit-link"
                        >
                            Gonzalo Orellana
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
