import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="sobre-nosotros" className="about-section">
            <div className="container about-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="about-content-split"
                >
                    {/* Lado Izquierdo: Imagen */}
                    <div className="about-image-side">
                        <img
                            src="/imagenes/fotoAbout.jpeg"
                            alt="Equipo Churn"
                            className="about-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/600x400/fc6471/white?text=Churn+Love";
                            }}
                        />
                    </div>

                    {/* Lado Derecho: Texto */}
                    <div className="about-text-side">
                        <h2 className="about-title">Sobre Nosotros</h2>
                        <p className="about-text">
                            En Churn creemos que la excelencia está en los detalles.
                            No seguimos modas ni fórmulas rápidas: perfeccionamos el arte de hacer churros para ofrecer una experiencia que combina tradición y calidad.
                        </p>
                        <p className="about-text">
                            Cada pieza se elabora en el momento, con ingredientes seleccionados y una técnica que asegura la textura y el sabor perfectos.
                            Porque no buscamos que nos elijas por costumbre, sino por verdadero gusto.
                        </p>

                        {/* Sección de Fundadores */}
                        <div className="founders-container">
                            <div className="founder-item">
                                <img src="/imagenes/Sebastian.png" alt="Sebastian Vaca" className="founder-image" />
                                <div className="founder-info">
                                    <h3 className="founder-name">Sebastian Vaca</h3>
                                    <p className="founder-role">CEO and Founder</p>
                                </div>
                            </div>
                            <div className="founder-item">
                                <img src="/imagenes/Evelyn.png" alt="Evelyn Baigorria" className="founder-image" />
                                <div className="founder-info">
                                    <h3 className="founder-name">Evelyn Baigorria</h3>
                                    <p className="founder-role">CEO and Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
