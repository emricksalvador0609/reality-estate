import React from 'react';

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-white text-gray-800">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-4xl font-bold mb-6 text-emerald-700">Get in Touch</h2>
      <p className="mb-12 text-gray-600">
        Interested in a property or have questions? Fill out the form and our team will get back to you shortly.
      </p>

      <form className="grid gap-6 text-left">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
