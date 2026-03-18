import { FiGithub, FiLinkedin, FiMail, FiCoffee } from 'react-icons/fi';

const Footer = () => (
  <footer className='py-10 border-t border-[var(--gray-200)] bg-[var(--background)]'>
    <div className='max-w-5xl mx-auto px-4 flex flex-col items-center gap-4'>
      <div className='flex items-center gap-5'>
        <a
          href='https://github.com/ShivanshTiwari01'
          target='_blank'
          rel='noopener noreferrer'
          className='p-2 rounded-full text-[var(--gray-700)] hover:text-[var(--primary)] hover:bg-[var(--gray-100)] transition-all duration-300'
          aria-label='GitHub'
        >
          <FiGithub size={20} />
        </a>
        <a
          href='https://linkedin.com/in/shivanshtiwari01'
          target='_blank'
          rel='noopener noreferrer'
          className='p-2 rounded-full text-[var(--gray-700)] hover:text-[var(--primary)] hover:bg-[var(--gray-100)] transition-all duration-300'
          aria-label='LinkedIn'
        >
          <FiLinkedin size={20} />
        </a>
        <a
          href='mailto:shivanshtiwari2014@gmail.com'
          className='p-2 rounded-full text-[var(--gray-700)] hover:text-[var(--primary)] hover:bg-[var(--gray-100)] transition-all duration-300'
          aria-label='Email'
        >
          <FiMail size={20} />
        </a>
      </div>
      <p className='text-sm text-[var(--gray-700)]'>
        © {new Date().getFullYear()} Shivansh Tiwari. All rights reserved.
      </p>
      <p className='text-xs text-[var(--gray-700)]'>
        Crafted with <FiCoffee className='inline-block text-[var(--primary)]' />{' '}
        and passion in India.
      </p>
    </div>
  </footer>
);

export default Footer;
