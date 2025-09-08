'use client';

import Image from 'next/image';
import SectionTitle from './SectionTitle';

// Datos de testimonios — puedes moverlos a /data/testimonials.ts
const testimonials = [
  {
    id: 1,
    name: 'Leandro Agüero',
    role: 'Técnico PDR - Argentina',
    avatar: '/images/leandro.jpeg',
    quote:
      'Excelentes productos y a muy buen precio. Cumplieron con todo lo pactado. Profesionales al 100%. Totalmente recomendables.',
  },
  {
    id: 2,
    name: 'Mauro Ledesma',
    role: 'Taller Ledesma - Uruguay',
    avatar: '/images/mauro.jpeg',
    quote:
      'Muy buena atención y variedad de productos para microbollos. Las herramientas tienen una precisión increíble.',
  },
  {
    id: 3,
    name: 'Carla Soledad Picco',
    role: 'Distribuidora - Chile',
    avatar: '/images/carla.jpeg',
    quote:
      'Son excelentes en su atención y los precios que manejan son muy accesibles. Los recomiendo sin dudarlo.',
  },
  {
    id: 4,
    name: 'Federico Petri',
    role: 'Taller Petri - Paraguay',
    avatar: '/images/fede.jpeg',
    quote:
      'Muy buena atención y buen precio. Herramientas de excelente calidad, duraderas y precisas.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id='testimonials'
      className='py-16 md:py-24 lg:py-32 px-5 bg-white'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Título de la sección */}
        <div className='text-center mb-16'>
          <p className='text-foreground-accent font-semibold tracking-wider uppercase'>
            Testimonios
          </p>
          <SectionTitle>
            <h2 className='my-3 !leading-snug text-3xl md:text-4xl lg:text-5xl font-bold'>
              LO QUE DICEN QUIENES YA TRABAJAN CON NOSOTROS
            </h2>
          </SectionTitle>
        </div>

        {/* Grid de testimonios */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center'
            >
              {/* Avatar */}
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md'>
                <Image
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.name}`}
                  width={96}
                  height={96}
                  quality={90}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Nombre y cargo */}
              <h3 className='font-bold text-lg text-foreground'>
                {testimonial.name}
              </h3>
              <p className='text-sm text-foreground-accent mb-4'>
                {testimonial.role}
              </p>

              {/* Testimonio */}
              <blockquote className='text-foreground-accent text-sm leading-relaxed italic flex-grow'>
                “{testimonial.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
