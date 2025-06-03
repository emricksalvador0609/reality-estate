import React from 'react';

const partners = [
  {
    id: 1,
    name: 'GreenBuild Corp',
    logo: `${process.env.REACT_APP_API_BASE_URL}/partners/greenbuild-logo.png`,
    url: 'https://greenbuild.com',
  },
  {
    id: 2,
    name: 'EcoHomes',
    logo: `${process.env.REACT_APP_API_BASE_URL}/partners/ecohomes-logo.svg`,
    url: 'https://ecohomes.com',
  },
  {
    id: 3,
    name: 'Urban Realty',
    logo: `${process.env.REACT_APP_API_BASE_URL}/partners/urbanrealty-logo.png`,
    url: 'https://urbanrealty.com',
  },
  {
    id: 4,
    name: 'Solar Solutions',
    logo: `${process.env.REACT_APP_API_BASE_URL}/partners/solar-logo.png`,
    url: 'https://solarsolutions.com',
  },
];

const Partners = () => (
  <section id="partners" className="py-20 bg-gray-50">
    <div className="container mx-auto max-w-6xl px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Trusted Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            aria-label={partner.name}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-h-16 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
