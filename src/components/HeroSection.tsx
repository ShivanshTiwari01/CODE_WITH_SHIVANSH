import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#fff' },
        links: {
          enable: true,
          color: '#fff',
          distance: 150,
          opacity: 0.2,
          width: 1,
        },
        move: { enable: true, speed: 1, outModes: { default: OutMode.bounce } },
        number: { value: 40, density: { enable: true, area: 800 } },
        opacity: { value: 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section className='relative pt-32 pb-32 px-4 bg-gradient-to-br from-[var(--primary)] via-[#3b82f6] to-[#1e40af] text-white overflow-hidden'>
      {init && (
        <Particles
          id='tsparticles'
          options={particlesOptions}
          className='absolute inset-0 w-full h-full z-0 pointer-events-none'
        />
      )}
      <div className='relative max-w-4xl mx-auto text-center z-10'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='mb-10 relative inline-block group'
        >
          <div className='absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 opacity-60 blur-lg scale-110 group-hover:scale-125 group-hover:opacity-80 transition-all duration-500 z-0'></div>
          <div className='relative w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto z-10 hover:scale-105 transition-transform duration-300'>
            <Image
              src='/my_image_prof.png'
              alt='Shivansh Tiwari'
              fill
              sizes='250px'
              className='object-cover object-center w-full h-full'
              priority
            />
          </div>
          <div className='absolute bottom-0 right-0 bg-green-400 rounded-full p-1.5 border-2 border-white z-20'>
            <span className='block w-3 h-3 bg-green-500 rounded-full animate-pulse'></span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent'
        >
          Shivansh Tiwari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='text-2xl md:text-3xl font-semibold text-cyan-200 mb-6'
        >
          Software Engineer &amp; System Architect
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className='text-lg md:text-xl text-indigo-50 max-w-3xl mx-auto leading-relaxed mb-10'
        >
          I build{' '}
          <span className='font-semibold text-cyan-300'>
            scalable, production-grade systems
          </span>{' '}
          end to end—ranging from distributed backends and AI-integrated
          applications to polished React frontends and automated CI/CD
          pipelines. Let’s turn your idea into a real product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <a
            href='#projects'
            className='inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:scale-110 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 border-2 border-white focus:outline-none animate-glow'
          >
            🔍 View My Work
          </a>
          <a
            href='#contact'
            className='inline-block px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-lg shadow-xl hover:scale-110 hover:bg-white/20 transition-all duration-300 border-2 border-white/60 focus:outline-none'
          >
            💼 Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
