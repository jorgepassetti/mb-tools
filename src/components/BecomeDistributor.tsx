'use client';

const BecomeDistributor: React.FC = () => {
  const benefits = [
    'Inversión inicial desde USD 3.000',
    'Capacitación técnica y comercial',
    'Material de marketing y demostración',
    'Soporte logístico y postventa',
    'Exclusividad por zona (según disponibilidad)',
  ];

  return (
    <section
      id='distributors'
      className='py-16 md:py-24 lg:py-32 px-5 bg-gradient-to-br from-primary-light to-primary-dark text-gray-900'
    >
      <div className='max-w-5xl mx-auto text-center'>
        {/* Título llamativo */}
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6'>
          ¿Querés revender las herramientas PDR más demandadas?
        </h2>

        {/* Texto introductorio */}
        <p className='text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed'>
          Unite a nuestra red global de distribuidores. Ofrecé a tus clientes
          herramientas de primera calidad, con márgenes competitivos y soporte
          constante de fábrica.
        </p>

        {/* Lista de beneficios */}
        <div className='mb-12'>
          <ul className='space-y-4 inline-block text-left'>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className='flex items-center gap-3 text-lg md:text-xl'
              >
                <span className='text-green-300 text-xl'>✅</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Botón grande de CTA */}
        <a
          href='https://wa.me/549XXXXXXXXXX' // ← ¡REEMPLAZA CON TU NÚMERO DE WHATSAPP!
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block px-10 py-4 bg-gray-900     text-primary font-bold text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300'
        >
          QUIERO SER DISTRIBUIDOR ➔
        </a>

        {/* Texto pequeño de apoyo (opcional) */}
        <p className='mt-6 text-sm opacity-90'>
          Respuesta inmediata de lunes a viernes de 9 a 18 hs (GMT-3)
        </p>
      </div>
    </section>
  );
};

export default BecomeDistributor;
