'use client';

const stats = [
  {
    value: '+5.000',
    label: 'Herramientas vendidas en 2024',
  },
  {
    value: '+20',
    label: 'Países atendidos',
  },
  {
    value: '98%',
    label: 'Satisfacción de clientes',
  },
  {
    value: '5 años',
    label: 'Innovando en el mercado PDR',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section id='stats' className='mt-10 mb-5 lg:my-20'>
      <div className='relative h-full w-full z-10 mx-auto py-12 sm:py-20'>
        {/* Background Pattern + Radial Gradient */}
        <div className='h-full w-full'>
          <div className='rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]'>
            <div className='rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]'></div>
          </div>

          {/* Contenido centrado */}
          <div className='h-full flex flex-col items-center justify-center text-white text-center px-5'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl'>
              CIFRAS QUE HABLAN
            </h2>
            <p className='mx-auto max-w-xl text-lg opacity-90 mb-12'>
              Resultados reales, confianza global. Estas son las métricas que
              nos impulsan a seguir creciendo.
            </p>

            {/* Grid de estadísticas */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center p-6'
                >
                  <div className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-sm md:text-base opacity-90 leading-tight max-w-[180px]'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
