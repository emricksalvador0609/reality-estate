import React from 'react';

const properties = [
  {
    id: 1,
    image: `${process.env.REACT_APP_API_BASE_URL}/modern-house.jpg`,
    title: 'Modern Family House',
    location: 'Quezon City, Metro Manila',
    price: '₱8,500,000',
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    area: '180 sqm',
  },
  {
    id: 2,
    image: `${process.env.REACT_APP_API_BASE_URL}/condo-city-view.jpg`,
    title: 'Condo with City View',
    location: 'BGC, Taguig',
    price: '₱5,200,000',
    bedrooms: 2,
    bathrooms: 1,
    garages: 0,
    area: '85 sqm',
  },
  {
    id: 3,
    image: `${process.env.REACT_APP_API_BASE_URL}/cozy-suburban.jpg`,
    title: 'Cozy Suburban Home',
    location: 'Cavite City',
    price: '₱3,750,000',
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    area: '120 sqm',
  },
];

const Listings = () => (
  <section id="listings" className="py-24 px-6 bg-white">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Listings</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <a
            key={property.id}
            href="#"
            className="relative group block rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className={`
                absolute inset-0 bg-black bg-opacity-60 text-white px-6 flex flex-col justify-center
                opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300
              `}
            >
              <div className="mb-4">
                <div className="inline-block bg-emerald-600 text-sm font-semibold px-3 py-1 rounded">
                  {property.price}
                </div>
                <h3 className="text-2xl font-bold mt-2">{property.title}</h3>
                <figure className="text-sm mt-1">{property.location}</figure>
              </div>

              <ul className="flex justify-between text-sm">
                <li>
                  <header className="font-semibold">Area:</header>
                  <figure>{property.area}</figure>
                </li>
                <li>
                  <header className="font-semibold">Beds:</header>
                  <figure>{property.bedrooms}</figure>
                </li>
                <li>
                  <header className="font-semibold">Baths:</header>
                  <figure>{property.bathrooms}</figure>
                </li>
                <li>
                  <header className="font-semibold">Garages:</header>
                  <figure>{property.garages}</figure>
                </li>
              </ul>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Listings;
