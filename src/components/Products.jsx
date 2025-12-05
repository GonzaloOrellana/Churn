import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Products.css';

const Products = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 968);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const products = [
        {
            id: 1,
            name: 'Clasico',
            description: 'La simpleza perfecta. Churro clásico espolvoreado con azúcar, ideal para acompañar tu café.',
            image: '/imagenes/productos/churroClasico.png'
        },
        {
            id: 2,
            name: 'Dulce de Leche',
            description: 'El favorito de todos. Relleno generoso de dulce de leche premium.',
            image: '/imagenes/productos/churroDDLGemini.png'
        },
        {
            id: 3,
            name: 'Chocolate',
            description: 'Para los amantes del cacao. Churro bañado en nuestro exclusivo chocolate semiamargo.',
            image: '/imagenes/productos/ChurroChocolateGemini.png'
        },
        {
            id: 4,
            name: 'Crema Pastelera',
            description: 'Nuestro churro tradicional relleno con abundante crema pastelera artesanal.',
            image: '/imagenes/productos/cremapastelera.png'
        },
        {
            id: 5,
            name: 'Chocolate Blanco',
            description: 'El churro bañado en chocolate blanco es una experiencia única',
            image: '/imagenes/productos/churroBlancoGemini.png'
        },
        {
            id: 6,
            name: 'Chipa',
            description: '¡Chipa caliente, recién salida del horno! Tierna, esponjosa y con el punto justo de queso.',
            image: '/imagenes/productos/chipaGemini.png'
        },
        {
            id: 7,
            name: 'Berlinesa',
            description: 'Suave masa frita rellena de la más rica crema pastelera o dulce de leche. Un clásico irresistible.',
            image: '/imagenes/productos/berlinesaGemini.png'
        },
        {
            id: 8,
            name: 'Dona Pink',
            description: 'El equilibrio perfecto entre ternura y sabor. ¡Prueba nuestra dona pink y déjate seducir!',
            image: '/imagenes/productos/donaPink.png'
        },
        {
            id: 9,
            name: 'Dona Oreo',
            description: 'La unión perfecta de tu galleta favorita con una dona dulce y esponjosa. ¡Un placer que no puedes dejar de probar!',
            image: '/imagenes/productos/donaOreo.png'
        },
        {
            id: 9,
            name: 'Dona Chocotorta',
            description: 'La fusión perfecta de dos clásicos argentinos.',
            image: '/imagenes/productos/donaChocotorta.png'
        },
    ];

    return (
        <section id="productos" className="products-section">
            <div className="container products-container">
                <Swiper
                    direction={isMobile ? 'horizontal' : 'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination, Navigation, Autoplay]}
                    className="products-vertical-carousel"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="product-slide-vertical">
                            <div className="product-content-split">
                                {/* Lado Izquierdo: Texto */}
                                <div className="product-text-side">
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h2 className="product-title-large">{product.name}</h2>
                                        <p className="product-description-large">{product.description}</p>
                                    </motion.div>
                                </div>

                                {/* Lado Derecho: Imagen */}
                                <div className="product-image-side">
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image-large"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Products;
