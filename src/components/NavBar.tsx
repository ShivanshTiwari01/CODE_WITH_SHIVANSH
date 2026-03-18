import { useTheme } from '../app/contexts/ThemeContext';
import { useState } from 'react';

const navLinks = [
  'About',
  'Services',
  'Experience',
  'Tech',
  'Projects',
  'Contact',
];

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed w-full bg-opacity-80 backdrop-blur-md bg-[var(--background)] z-50 border-b border-[var(--gray-200)] shadow-sm'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='text-xl font-bold text-[var(--primary)] cursor-pointer'
          >
            Home
          </button>

          <div className='flex items-center gap-4'>
            {/* Desktop Nav */}
            <div className='hidden md:flex space-x-5 text-sm font-medium'>
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300'
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Hire Me Button */}
            <a
              href='#contact'
              className='hidden md:inline-block px-4 py-2 rounded-full bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-md'
            >
              Hire Me
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className='p-2 rounded-lg hover:bg-[var(--gray-100)] transition-colors duration-300'
              aria-label='Toggle theme'
            >
              {theme === 'light' ? (
                <svg
                  className='w-5 h-5 text-[var(--foreground)]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                </svg>
              ) : (
                <svg
                  className='w-5 h-5 text-[var(--foreground)]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707'
                  />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              className='md:hidden p-2 rounded-lg hover:bg-[var(--gray-100)] transition-colors duration-300'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label='Toggle menu'
            >
              <svg
                className='w-5 h-5 text-[var(--foreground)]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {menuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='md:hidden pb-4 px-2 flex flex-col gap-2'>
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className='block py-2 px-3 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--gray-100)] rounded-lg transition-colors duration-200'
              >
                {item}
              </a>
            ))}
            <a
              href='#contact'
              onClick={() => setMenuOpen(false)}
              className='mt-1 text-center py-2 px-3 rounded-full bg-[var(--primary)] text-white text-sm font-semibold'
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
