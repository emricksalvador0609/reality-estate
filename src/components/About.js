import React from 'react';

const About = () => (
  <section id="about" className="py-24 px-6 bg-gray-100 text-gray-800">
    <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6 text-emerald-700">Who We Are</h2>
        <p className="text-lg mb-4 leading-relaxed">
          At PrimeNest Realty, we specialize in helping Filipinos find their perfect home—whether you're buying your first condo in the city or upgrading to a family house in the suburbs.
        </p>
        <p className="text-gray-700">
          With a decade of experience in Metro Manila and surrounding provinces, we’ve built a trusted network of agents, brokers, and satisfied homeowners. Your journey to homeownership starts with us.
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716"
          alt="Our Real Estate Team"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;
