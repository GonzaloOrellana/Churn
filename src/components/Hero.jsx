import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const scrollToProducts = () => {
        document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="hero">
            {/* Blobs de Fondo Orgánicos */}
            <div className="blob blob-pink" style={{ top: '15%', right: '10%', width: '300px', height: '300px' }}></div>
            <div className="blob blob-cyan" style={{ bottom: '20%', left: '5%', width: '250px', height: '250px' }}></div>

            <div className="container">
                <div className="hero-content-wrapper">
                    {/* Contenido Izquierdo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text-section"
                    >


                        <h1 className="hero-main-title">
                            <span className="highlight-text">Churros </span> de verdad
                        </h1>

                        <p className="hero-description">
                            Hechos con amor
                        </p>

                        <div className="hero-buttons">
                            <a
                                href="https://api.whatsapp.com/send/?phone=541128673102&text=Hola%21+Quiero+hacerte+un+pedido&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnePtbaeWW-y68pnczlro77dIP841_26hj8b69NhVJZUJ3n904y2ESA9frLs4_aem_vHnWeh59uooNcdc-kd73eA&brid=AWUwGOzYtz3qLsl12NQ_Wg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary-hero"
                            >
                                Hace tu pedido
                            </a>
                            <button className="btn-secondary-hero" onClick={scrollToProducts}>
                                Explorar
                                <FaArrowRight className="btn-icon" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Imagen Derecha */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-image-section"
                    >
                        <div className="image-frame">
                            <img
                                src="/imagenes/bolsaChurn.png"
                                alt="Producto Churn"
                                className="hero-product-image"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
