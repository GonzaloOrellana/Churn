import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    const images = [
        {
            id: 1,
            src: '/imagenes/galeria/churros3.jpeg',
            alt: 'Galería Churn',
            gridArea: 'img1'
        },
        {
            id: 2,
            src: '/imagenes/galeria/churros2.jpeg',
            alt: 'Galería Churn',
            gridArea: 'img2'
        },
        {
            id: 3,
            src: '/imagenes/galeria/Clientes chicas.jpeg',
            alt: 'Galería Churn',
            gridArea: 'img3'
        },
        {
            id: 4,
            src: '/imagenes/galeria/Clientes 3.jpeg',
            alt: 'Galería Churn',
            gridArea: 'img4'
        },
        {
            id: 5,
            src: '/imagenes/galeria/fotoMayorista.jpeg',
            alt: 'Galería Churn',
            gridArea: 'img5'
        },
        {
            id: 6,
            src: '/imagenes/galeria/churros.jpeg',
            alt: 'Galería Churn',
            gridArea: 'img6'
        }
    ];

    return (
        <section id="galeria" className="gallery-section">
            <div className="gallery-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="gallery-header"
                >
                    <h2 className="gallery-title">Galería</h2>
                </motion.div>

                {/* Grid de imágenes */}
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="gallery-item"
                            style={{ gridArea: image.gridArea }}
                        >
                            <div className="gallery-image-wrapper">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="gallery-image"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

