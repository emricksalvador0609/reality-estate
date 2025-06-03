import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'listings', label: 'Listings' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const SidebarScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-20 left-6 w-40 bg-white rounded-lg shadow-md p-4">
      <ul className="space-y-4">
        {sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className={`block py-2 px-3 rounded cursor-pointer transition-colors ${
                activeSection === sec.id
                  ? 'bg-emerald-700 text-white font-semibold'
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
              }`}
            >
              {sec.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarScrollSpy;
