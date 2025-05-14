
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
      {/* Heading Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          About <span className="text-pink-500">Us</span>
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-pink-500">BookStore</span>, your go-to destination for all things books!
          We are dedicated to making reading more accessible, enjoyable, and immersive.
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
         src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80"
         alt="BookStore"
         className="w-full rounded-lg shadow-md"
        />

        <div className="text-gray-700 space-y-4">
          <h2 className="text-2xl font-semibold text-pink-500">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li>Extensive collection across various genres</li>
            <li>Affordable pricing with special discounts</li>
            <li>Quick and reliable delivery services</li>
            <li>Community-driven book reviews & recommendations</li>
          </ul>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <Link to="/">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
