import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Location.css';

const Location = () => {
    return (
        <section id="ubicacion" className="location-section">
            <div className="container location-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="location-content-split"
                >
                    {/* Lado Izquierdo: Mapa */}
                    <div className="location-map-side">
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.6847253!2d-58.4918363!3d-34.690677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccecba08866cd%3A0xb40d37c44360b63a!2sChurn!5e0!3m2!1ses-419!2sar!4v1642625234567!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Ubicación Churn"
                                className="map-iframe"
                            ></iframe>
                        </div>
                    </div>

                    {/* Lado Derecho: Info */}
                    <div className="location-text-side">
                        <h2 className="location-main-title">Dónde Estamos</h2>
                        <p className="location-description">
                            Visitanos en nuestro local o elegí retiro en punto de venta.
                            ¡Te esperamos con churros recién hechos!
                        </p>

                        <div className="location-info-cards">
                            <div className="info-card">
                                <FaMapMarkerAlt className="info-icon" />
                                <div className="info-content">
                                    <h4 className="info-title">Dirección</h4>
                                    <p className="info-text">Cno. de la Virgen María 89, B1768 Villa Madero, Provincia de Buenos Aires</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <FaClock className="info-icon" />
                                <div className="info-content">
                                    <h4 className="info-title">Horarios</h4>
                                    <p className="info-text">Viernes: 15:30 a 19:00</p>
                                    <p className="info-text">Sábado: 09:00 a 12:00 y 15:30 a 19:00</p>
                                    <p className="info-text">Domingo: 09:00 a 12:00 y 15:30 a 19:00</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;
