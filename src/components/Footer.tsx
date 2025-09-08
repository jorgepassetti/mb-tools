import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Columna 1: Sobre MB Herramientas PDR */}
        <div>
          {/* <Link href='/' className='flex items-center gap-2'>
            <h3 className='text-2xl font-bold cursor-pointer'>
              {siteDetails.siteName}
            </h3>
          </Link> */}

          <Link href='/' className='flex items-center gap-2'>
            {/* <FaFingerprint className='text-foreground min-w-fit w-7 h-7' /> */}

            <Image
              alt='Logo'
              width={40}
              height={40}
              src={siteDetails.siteLogoWhite}
            />
            <span className='manrope text-white text-xl font-semibold text-foreground cursor-pointer'>
              {siteDetails.siteName}
            </span>
          </Link>

          <p className='mt-4 text-gray-300 leading-relaxed'>
            Fabricantes de herramientas PDR de alta gama.
            <br />
            Córdoba, Argentina.
            <br />
            Envíos internacionales.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className='text-lg font-semibold mb-4'>Enlaces rápidos</h4>
          <ul className='text-gray-300 space-y-2'>
            <li>
              <Link href='#products' className='hover:text-white transition'>
                Productos
              </Link>
            </li>
            <li>
              <Link
                href='#distributors'
                className='hover:text-white transition'
              >
                Distribuidores
              </Link>
            </li>
            <li>
              <Link
                href='#testimonials'
                className='hover:text-white transition'
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link href='#about' className='hover:text-white transition'>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href='/terms' className='hover:text-white transition'>
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto + Redes Sociales */}
        <div>
          <h4 className='text-lg font-semibold mb-4'>Contacto</h4>
          <div className='text-gray-300 space-y-2'>
            <p>📞 +54 9 XXX XXX XXXX</p>
            <p>
              ✉️{' '}
              <a
                href='mailto:info@mbtools.com.ar'
                className='hover:text-white transition'
              >
                info@mbtools.com.ar
              </a>
            </p>
            <p>🌐 mbtools.com.ar</p>
          </div>

          {/* Redes Sociales */}
          <div className='mt-6 flex items-center gap-5'>
            <a
              href='https://instagram.com/mbtools_pdr'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <FaInstagram className='w-6 h-6 text-white hover:text-pink-500 transition' />
            </a>
            <a
              href='https://facebook.com/mbtoolspdr'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <FaFacebook className='w-6 h-6 text-white hover:text-blue-600 transition' />
            </a>
            <a
              href='https://youtube.com/@mbtools_pdr'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='YouTube'
            >
              <FaYoutube className='w-6 h-6 text-white hover:text-red-600 transition' />
            </a>
            <a
              href='https://wa.me/549XXXXXXXXXX'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='WhatsApp'
            >
              <FaWhatsapp className='w-6 h-6 text-white hover:text-green-500 transition' />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-10 pt-6 border-t border-gray-800 text-center text-gray-400'>
        <p>
          © {new Date().getFullYear()} MB Herramientas PDR. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
