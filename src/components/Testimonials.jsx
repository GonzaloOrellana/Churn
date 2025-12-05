import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Aisha',
            role: 'Cliente',
            rating: 5,
            comment: 'La mejor churrería, venden las cosas más ricas, te entregan todo rapidisimo y los dueños son muy amables, la recomiendo',
            avatar: '/imagenes/aisha.png'
        },
        {
            id: 2,
            name: 'nicolas perez',
            role: 'Cliente',
            rating: 5,
            comment: 'Los Churros riquísimos, muy crujientes, con mucho relleno, y baratísimos, volveria a ir sin dudarlo',
            avatar: '/imagenes/unnamed.png'
        },
        {
            id: 3,
            name: 'Camila Vaca',
            role: 'Cliente',
            rating: 5,
            comment: 'Los mejores churros que probé! No los cambio por otros. La verdadera relación entre precio-calidad. La foto es de un pedido que hicimos para un evento, quedaron todos fascinados!',
            avatar: '/imagenes/camiVaca.png'
        }
    ];

    return (
        <section id="testimonios" className="testimonials-section">
            <div className="container testimonials-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="testimonials-header"
                >
                    <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
                    <p className="testimonials-subtitle">
                        La opinión de quienes nos eligen día a día es lo que más nos motiva a seguir mejorando
                    </p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="testimonial-card"
                        >
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=fc6471&color=fff&size=80`;
                                        }}
                                    />
                                </div>
                                <div className="testimonial-info">
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                    <p className="testimonial-role">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="testimonial-rating">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={i < testimonial.rating ? 'star filled' : 'star'}
                                    />
                                ))}
                                <span className="rating-number">{testimonial.rating}.0</span>
                            </div>

                            <p className="testimonial-comment">{testimonial.comment}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
