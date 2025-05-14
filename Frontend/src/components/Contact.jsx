


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
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
          Get in <span className="text-pink-500">Touch!</span>
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Have any questions or concerns? We're here to help you with anything related to our bookstore.
        </p>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaEnvelope className="text-pink-500 text-3xl mb-3" />
          <h3 className="font-semibold">Email Us</h3>
          <p className="text-gray-600">contact@bookstore.com</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaPhone className="text-pink-500 text-3xl mb-3" />
          <h3 className="font-semibold">Call Us</h3>
          <p className="text-gray-600">+123 456 7890</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaMapMarkerAlt className="text-pink-500 text-3xl mb-3" />
          <h3 className="font-semibold">Visit Us</h3>
          <p className="text-gray-600">123 Book Street, Library City</p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-12 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded-lg" type="text" placeholder="Your Name" required />
          <input className="w-full p-3 border rounded-lg" type="email" placeholder="Your Email" required />
          <textarea className="w-full p-3 border rounded-lg" placeholder="Your Message" rows="4" required></textarea>
          <button className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Back Button */}
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

export default Contact;

