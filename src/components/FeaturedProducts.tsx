'use client';

import SectionTitle from './SectionTitle';
import Image from 'next/image';

// Datos de productos destacados — puedes moverlos a /data/featuredProducts.ts
const featuredProducts = [
  {
    id: 1,
    name: 'Juego de Palancas MB ProSeries',
    description:
      'Diseño ergonómico, punta de precisión láser y recubrimiento antideslizante. Ideal para microabolladuras complejas.',
    image: '/images/puntas.png',
    cta: 'Más info',
  },
  {
    id: 2,
    name: 'Lámpara LED PDR 360°',
    description:
      'Iluminación profesional con ángulo ajustable. Detecta hasta la más mínima deformación en la chapa.',
    image: '/images/lampara.png',
    cta: 'Más info',
  },
  {
    id: 3,
    name: 'Kit Glue Pulling Premium',
    description:
      'Incluye 50 adhesivos + 3 extractores de diferentes tamaños. Perfecto para abolladuras profundas y difíciles.',
    image: '/images/kit.png',
    cta: 'Más info',
  },
  {
    id: 4,
    name: 'Martillo Táctil MB Precision',
    description:
      'Impacto controlado y mango antivibración. Diseñado para sesiones largas sin fatiga en la muñeca.',
    image: '/images/martillos.png',
    cta: 'Más info',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id='featured-products' className='py-10 lg:py-20 px-5 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        {/* Título de la sección */}
        <div className='text-center mb-16'>
          <p className='text-foreground-accent font-semibold tracking-wider uppercase'>
            Productos Destacados
          </p>
          <SectionTitle>
            <h2 className='my-3 !leading-snug text-3xl md:text-4xl lg:text-5xl font-bold'>
              LOS FAVORITOS DE LOS PROFESIONALES
            </h2>
          </SectionTitle>
        </div>

        {/* Grid de productos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col'
            >
              {/* Imagen del producto */}
              <div className='h-56 md:h-64 overflow-hidden bg-gray-100'>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  quality={90}
                  className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              {/* Contenido del producto */}
              <div className='p-5 flex flex-col flex-grow'>
                <h3 className='text-lg md:text-xl font-bold text-foreground mb-3'>
                  {product.name}
                </h3>
                <p className='text-foreground-accent text-sm leading-relaxed mb-4 flex-grow'>
                  {product.description}
                </p>
                <a
                  href='#contact'
                  className='inline-block mt-auto px-5 py-2 bg-primary text-black font-semibold text-center rounded-lg hover:bg-primary-dark transition'
                >
                  {product.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
