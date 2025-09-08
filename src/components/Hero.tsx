'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Datos del carrusel — puedes moverlos a /data/heroProducts.ts
const heroProducts = [
  {
    id: 1,
    name: 'Juego de Puntas Intercambiables',
    description:
      'Diseño ergonómico, punta láser y recubrimiento antideslizante.',
    image: '/images/puntas.png',
  },
  {
    id: 2,
    name: 'Lámpara LED PDR 360°',
    description:
      'Iluminación profesional para detectar microabolladuras con precisión.',
    image: '/images/lampara.png',
  },
  {
    id: 3,
    name: 'Kit Glue Pulling Premium',
    description:
      'Incluye 50 adhesivos + 3 extractores. Ideal para abolladuras profundas.',
    image: '/images/kit.png',
  },
  {
    id: 4,
    name: 'Martillo Táctil MB Precision',
    description:
      'Impacto controlado y mango antivibración para trabajo prolongado.',
    image: '/images/martillos.png',
  },
  //   {
  //     id: 5,
  //     name: 'Gancho Angular ProFlex',
  //     description:
  //       'Ángulo ajustable para zonas de difícil acceso. Acero inoxidable templado.',
  //     image: '/images/products/gancho-angular.webp',
  //   },
  //   {
  //     id: 6,
  //     name: 'Kit de Adhesivos MB Strong',
  //     description:
  //       'Adhesión ultra rápida y resistente. Compatible con cualquier sistema.',
  //     image: '/images/products/kit-adhesivos.webp',
  //   },
  //   {
  //     id: 7,
  //     name: 'Soporte Magnético 360°',
  //     description:
  //       'Fijación segura en cualquier ángulo. Base antideslizante reforzada.',
  //     image: '/images/products/soporte-magnetico.webp',
  //   },
  //   {
  //     id: 8,
  //     name: 'Set de Reflectores PDR Pro',
  //     description:
  //       'Patrones de líneas para lectura precisa de la superficie metálica.',
  //     image: '/images/products/set-reflectores.webp',
  //   },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4; // Mostrar 4 productos por vez
  const totalSlides = Math.ceil(heroProducts.length / productsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 500000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Obtiene los productos para el slide actual
  const getCurrentProducts = () => {
    const start = currentIndex * productsPerPage;
    return heroProducts.slice(start, start + productsPerPage);
  };

  const visibleProducts = getCurrentProducts();

  return (
    <section
      id='hero'
      className='relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5'
    >
      {/* Background Pattern */}
      <div className='absolute left-0 top-0 bottom-0 -z-10 w-full'>
        <div className='absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className='absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]'></div>

      {/* Hero Content */}
      <div className='text-center max-w-6xl mx-auto'>
        <h1 className='text-4xl md:text-6xl md:leading-tight font-bold text-foreground'>
          FÁBRICA DE HERRAMIENTAS Y ACCESORIOS PDR
        </h1>
        <p className='mt-4 text-lg md:text-xl text-foreground max-w-3xl mx-auto'>
          Herramientas profesionales para desabollado sin pintura. Venta directa
          de fábrica, envíos a todo el mundo y atención personalizada desde
          Córdoba, Argentina.
        </p>

        {/* CTA Buttons */}
        <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-fit mx-auto'>
          <a
            href='#products'
            className='px-8 py-3 text-black bg-primary font-semibold rounded-lg shadow-md hover:bg-primary-dark transition'
          >
            Ver Productos
          </a>
          <a
            href='https://wa.me/549XXXXXXXXXX'
            target='_blank'
            rel='noopener noreferrer'
            className='px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition flex items-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
            </svg>
            Hablar con un asesor
          </a>
        </div>

        {/* Product Carousel — 4 at a time */}
        <div className='relative mt-16 md:mt-20 overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * productsPerPage;
              const slice = heroProducts.slice(start, start + productsPerPage);

              // Rellenar con elementos vacíos si no hay suficientes productos
              while (slice.length < productsPerPage) {
                slice.push({
                  id: `empty-${slideIndex}-${slice.length}` as any,
                  name: '',
                  description: '',
                  image: '',
                });
              }

              return (
                <div
                  key={slideIndex}
                  className='flex-shrink-0 w-full flex'
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {slice.map((product, idx) => (
                    <div key={product.id} className='w-1/2 px-2'>
                      <div className='bg-white rounded-xl shadow-lg p-4 h-full flex flex-col justify-between transition-transform hover:scale-105'>
                        {product.image && (
                          <div className='h-48 md:h-56 overflow-hidden rounded-lg mb-4'>
                            <Image
                              src={product.image}
                              alt={product.name || 'Producto MB Tools'}
                              width={300}
                              height={200}
                              quality={90}
                              className='w-full h-full object-contain'
                            />
                          </div>
                        )}
                        {product.name && (
                          <>
                            <h3 className='font-bold text-lg md:text-xl text-foreground text-left'>
                              {product.name}
                            </h3>
                            <p className='text-muted-foreground text-sm mt-2 text-left'>
                              {product.description}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className='flex justify-center mt-8 space-x-2 mb-4'>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
