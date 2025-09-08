'use client';

import SectionTitle from './SectionTitle';

// Puedes mover estos datos a /data/whyChooseUs.ts si lo prefieres
const pillars = [
  {
    id: 1,
    icon: '🏭', // Puedes reemplazar por un componente de ícono (Heroicons, Lucide, etc.)
    title: 'Venta Directa de Fábrica',
    description:
      'Comprá directamente del fabricante. Precios más bajos, calidad garantizada y asesoramiento técnico incluido desde el primer contacto.',
  },
  {
    id: 2,
    icon: '🌍',
    title: 'Envíos a Todo el Mundo',
    description:
      'Realizamos envíos internacionales seguros y rápidos. Tu pedido llegará a tu taller, sin importar el país, con seguimiento en tiempo real.',
  },
  {
    id: 3,
    icon: '🛡️',
    title: 'Garantía de Fábrica',
    description:
      'Cada herramienta sale de nuestras instalaciones en Córdoba con garantía de calidad. Si hay un problema, lo resolvemos rápido y sin vueltas.',
  },
  {
    id: 4,
    icon: '👨‍🔧',
    title: 'Atención Personalizada',
    description:
      'Nuestro equipo de expertos te asesora antes, durante y después de la compra. Soporte técnico, recomendaciones de uso y capacitación incluida.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id='why-choose-us' className='py-10 lg:py-20 px-5'>
      <div className='max-w-6xl mx-auto'>
        {/* Título de la sección */}
        <div className='text-center mb-16'>
          <p className='text-foreground-accent font-semibold tracking-wider uppercase'>
            ¿Por qué elegirnos?
          </p>
          <SectionTitle>
            <h2 className='my-3 !leading-snug text-3xl md:text-4xl lg:text-5xl font-bold'>
              Calidad que se siente, <br className='hidden md:block' /> servicio
              que se nota
            </h2>
          </SectionTitle>
        </div>

        {/* Grid de 4 pilares */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className='flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group'
            >
              {/* Ícono grande */}
              <div className='text-5xl mb-4 group-hover:scale-110 transition-transform'>
                {pillar.icon}
              </div>

              {/* Título */}
              <h3 className='text-xl font-bold text-foreground mb-3'>
                {pillar.title}
              </h3>

              {/* Descripción */}
              <p className='text-foreground-accent leading-relaxed'>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
