import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            alert('¡Mensaje enviado! Gracias por contactarnos.');
            setFormData({ nombre: '', email: '', mensaje: '' });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contacto" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="contact-content-split"
                >
                    {/* Left Side: Social Links */}
                    <div className="contact-social-side">
                        <h2 className="contact-title">Contacto</h2>
                        <p className="social-description">
                            También podés encontrarnos en nuestras redes sociales
                        </p>

                        <div className="social-links">
                            <a href="https://instagram.com/churreria.churn" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaInstagram className="social-icon" />
                                <div className="social-info">
                                    <span className="social-label">Instagram</span>
                                    <span className="social-handle">@churreria.churn</span>
                                </div>
                            </a>
                            <a href="mailto:churreria@churn.website" className="social-link">
                                <FaEnvelope className="social-icon" />
                                <div className="social-info">
                                    <span className="social-label">Email</span>
                                    <span className="social-handle">churreria@churn.website</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-side">
                        <div className="form-card">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className={errors.nombre ? 'error' : ''}
                                    />
                                    {errors.nombre && <span className="error-text">{errors.nombre}</span>}
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="mensaje"
                                        placeholder="Mensaje"
                                        rows="5"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        className={errors.mensaje ? 'error' : ''}
                                    ></textarea>
                                    {errors.mensaje && <span className="error-text">{errors.mensaje}</span>}
                                </div>

                                <button type="submit" className="btn-submit">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
