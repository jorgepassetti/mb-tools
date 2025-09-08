'use client';

import { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    country: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí integrarías tu lógica de envío (Formspree, Nodemailer, API, etc.)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', contact: '', country: '', message: '' });
    }, 1500);
  };

  return (
    <section id='contact' className='mt-10 mb-5 lg:my-20'>
      <div className='relative h-full w-full z-10 mx-auto py-12 sm:py-20'>
        {/* Background Pattern + Radial Gradient (igual que en CTA y Stats) */}
        <div className='h-full w-full'>
          <div className='rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]'>
            <div className='rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]'></div>
          </div>

          {/* Contenido centrado */}
          <div className='h-full flex flex-col items-center justify-center text-white text-center px-5'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl'>
              ¿Tenés dudas? Te asesoramos sin compromiso.
            </h2>

            <p className='mx-auto max-w-xl text-lg opacity-90 mb-8'>
              Dejanos tus datos y un asesor se comunicará con vos en menos de 24
              hs. También podés escribirnos directamente por WhatsApp para una
              respuesta inmediata.
            </p>

            {/* WhatsApp Button (opcional, arriba del formulario) */}
            <a
              href='https://wa.me/549XXXXXXXXXX' // ← ¡REEMPLAZA CON TU NÚMERO!
              target='_blank'
              rel='noopener noreferrer'
              className='mb-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full flex items-center gap-2 transition'
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
              Escribinos por WhatsApp
            </a>

            {/* Formulario */}
            <div className='w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-8'>
              {submitSuccess ? (
                <div className='text-center py-8'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-16 h-16 mx-auto text-green-400 mb-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <h3 className='text-xl font-bold mb-2'>¡Consulta enviada!</h3>
                  <p>Un asesor se contactará con vos en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div>
                    <input
                      type='text'
                      name='name'
                      placeholder='Nombre completo'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-primary'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='contact'
                      placeholder='Email o Teléfono (con código de país)'
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-primary'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='country'
                      placeholder='País'
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-primary'
                    />
                  </div>
                  <div>
                    <textarea
                      name='message'
                      placeholder='¿En qué podemos ayudarte?'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className='w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full py-3 px-6 bg-primary text-black font-bold rounded-lg hover:bg-primary-dark transition disabled:opacity-70 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? 'Enviando...' : 'ENVIAR CONSULTA'}
                  </button>
                </form>
              )}
            </div>

            {/* Horario de atención */}
            <p className='mt-6 text-sm opacity-80'>
              *Lunes a Viernes, de 9:00 a 18:00 hs (GMT-3)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
