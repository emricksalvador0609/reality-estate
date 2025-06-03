import React, { useState, useEffect } from 'react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'listings', label: 'Listings' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 150;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500
        ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-emerald-200' : 'bg-transparent'}
        `}
      style={{ willChange: 'background-color, box-shadow' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-wide text-emerald-700 hover:text-emerald-800 transition"
        >
          GreenRoof
        </a>

        <nav className="hidden md:flex space-x-10 text-gray-700 font-semibold tracking-wide text-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative py-1 cursor-pointer transition-colors hover:text-emerald-700 ${
                activeSection === link.id ? 'text-emerald-700' : ''
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 transition-all duration-500
                  ${activeSection === link.id ? 'opacity-100' : 'opacity-0'}
                `}
              />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-emerald-700 hover:text-emerald-800 transition focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-emerald-200 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-emerald-700 font-semibold hover:text-emerald-800 border-b border-emerald-100 last:border-none`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
