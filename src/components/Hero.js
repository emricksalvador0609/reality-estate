import React, { useState } from 'react';

const Hero = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle search submit logic here
    alert(`Searching for "${search}" in category "${category}"`);
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-6 relative"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_API_BASE_URL}/real-state-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 max-w-4xl text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-serif">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 font-light max-w-2xl mx-auto">
          Discover the best listings in your favorite neighborhoods with trusted agents.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto mb-8"
        >
          <input
            type="text"
            placeholder="Search by location, address, or keywords"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-3 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-md"
          />
          <div className="select-wrapper">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-white text-gray-800 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="apartment">Apartment</option>
              <option value="land">Land</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
            Browse Listings
          </button>
        </form>

      
      </div>
    </section>
  );
};

export default Hero;
