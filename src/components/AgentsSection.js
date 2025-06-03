import React from 'react';
import { FaWhatsapp, FaFacebookMessenger, FaEnvelope } from 'react-icons/fa';

const agents = [
  {
    name: 'James Stallon',
    img: '/images/team-1.jpg',
    listings: 10,
    link: '/properties',
    socials: {
      whatsapp: '#',
      messenger: '#',
      email: 'mailto:james@example.com',
    },
  },
  {
    name: 'Sarah Johnson',
    img: '/images/team-2.jpg',
    listings: 8,
    link: '/properties',
    socials: {
      whatsapp: '#',
      messenger: '#',
      email: 'mailto:sarah@example.com',
    },
  },
  {
    name: 'Michael Lee',
    img: '/images/team-3.jpg',
    listings: 12,
    link: '/properties',
    socials: {
      whatsapp: '#',
      messenger: '#',
      email: 'mailto:michael@example.com',
    },
  },
  {
    name: 'Emily Davis',
    img: '/images/team-4.jpg',
    listings: 9,
    link: '/properties',
    socials: {
      whatsapp: '#',
      messenger: '#',
      email: 'mailto:emily@example.com',
    },
  },
];

const AgentsSection = () => {
  return (
    <section id="agents" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase">Agents</span>
          <h2 className="text-4xl font-bold mt-2">Our Agents</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                {/* Overlay icons */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a href={agent.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-white text-2xl hover:text-green-400 transition" />
                  </a>
                  <a href={agent.socials.messenger} target="_blank" rel="noopener noreferrer">
                    <FaFacebookMessenger className="text-white text-2xl hover:text-blue-400 transition" />
                  </a>
                  <a href={agent.socials.email}>
                    <FaEnvelope className="text-white text-2xl hover:text-red-400 transition" />
                  </a>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1">
                  <a href={agent.link} className="hover:text-emerald-600 transition">
                    {agent.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Listings</span> — {agent.listings} Properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
