'use client';

import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section
      id='about'
      className='relative py-16 md:py-24 lg:py-32 px-5 bg-gray-900 text-white overflow-hidden rounded-lg shadow-lg'
    >
      {/* Imagen de fondo con overlay */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/background-factory.webp' // ← Reemplaza con tu imagen de fábrica/taller
          alt='Taller de MB Herramientas PDR en Córdoba'
          fill
          quality={80}
          className='object-cover'
          style={{ objectPosition: 'center' }}
        />
        <div className='absolute inset-0 bg-black bg-opacity-60'></div>{' '}
        {/* Overlay oscuro para mejorar legibilidad */}
      </div>

      <div className='max-w-5xl mx-auto text-center md:text-left'>
        {/* Subtítulo decorativo */}
        <p className='text-primary font-semibold tracking-wider uppercase mb-4'>
          SOBRE NOSOTROS
        </p>

        {/* Título principal */}
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8'>
          INNOVACIÓN Y CALIDAD
          <br className='hidden md:block' /> DESDE CÓRDOBA, ARGENTINA
        </h2>

        {/* Texto principal */}
        <div className='space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0'>
          <p>
            En MB Herramientas PDR combinamos tecnología de vanguardia con el
            conocimiento profundo del oficio. Nuestra misión es simple: darte
            las herramientas más confiables del mercado para que cada reparación
            sea perfecta, rápida y rentable.
          </p>
          <p>
            Con presencia en más de 20 países, servimos tanto al técnico
            independiente como a grandes distribuidores, siempre con el mismo
            compromiso: calidad sin concesiones y servicio sin excusas.
          </p>
        </div>

        {/* Botón opcional (CTA) */}
        <div className='mt-10 flex justify-center md:justify-start'>
          <a
            href='#distributors'
            className='px-8 py-3 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-primary-dark transition inline-block'
          >
            Conocé nuestra red global
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
