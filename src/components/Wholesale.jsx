import React from 'react';
import { motion } from 'framer-motion';
import './Wholesale.css';

const Wholesale = () => {
    const stats = [
        { number: '15+', label: 'Negocios' },
        { number: '2000+', label: 'Docenas mensuales' },
        { number: '100%', label: 'Satisfacción' }
    ];

    return (
        <section id="mayorista" className="wholesale-section">
            <div className="container wholesale-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="wholesale-content-split"
                >
                    {/* Left Side: Text & Stats */}
                    <div className="wholesale-text-side">
                        <h2 className="wholesale-title"> Venta Mayorista</h2>
                        <p className="wholesale-text">
                            Llevá la calidad de Churn a tu cafetería, panadería o negocio.
                            Ofrecemos productos premium con entrega garantizada y precios especiales.
                        </p>

                        {/* Stats Grid */}
                        <div className="wholesale-stats-grid">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="stat-card"
                                >
                                    <h3 className="stat-number">{stat.number}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="https://api.whatsapp.com/send/?phone=541128673102&text=Hola%21+Quiero+hacerte+un+pedido&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnePtbaeWW-y68pnczlro77dIP841_26hj8b69NhVJZUJ3n904y2ESA9frLs4_aem_vHnWeh59uooNcdc-kd73eA&brid=AWUwGOzYtz3qLsl12NQ_Wg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-wholesale"
                        >
                            Consultar precios
                        </a>
                    </div>

                    {/* Right Side: Image */}
                    <div className="wholesale-image-side">
                        <img
                            src="/imagenes/churro-tray.jpg"
                            alt="Wholesale Churn"
                            className="wholesale-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/600x400/fc6471/white?text=Churn+Wholesale";
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Wholesale;
