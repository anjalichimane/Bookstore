
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const name = params.get("name");
  const price = params.get("price");
  const title = params.get("title");
  const category = params.get("category");
  const image = params.get("image");
  const author = params.get("author");

  const fallbackImage = "https://via.placeholder.com/200x300?text=No+Image";

  const handleBuyNow = () => {
    navigate(`/checkout?name=${encodeURIComponent(name)}&price=${price}`);
  };

  const handleAddToCart = () => {
    const book = { name, price, title, category, image, author };
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(book);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success(`${name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-10 px-4 flex flex-col items-center"
    >
      {/* Book Details Section */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row mb-16">
        {/* Left (Image) */}
        <div className="md:w-1/2 bg-white flex items-center justify-center p-6">
          <img
            src={image || fallbackImage}
            alt={name}
            onError={(e) => (e.target.src = fallbackImage)}
            className="rounded-lg shadow-md object-contain w-full max-h-[400px]"
          />
        </div>

        {/* Right (Details) */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
            {author && (
              <p className="text-md text-gray-600 mb-2 italic">
                By <span className="font-medium">{author}</span>
              </p>
            )}
            <div className="text-sm text-gray-600 mb-2">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                📚 {category}
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium ml-2">
                Bestseller
              </span>
            </div>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-400 text-xl ${index < 4 ? "fill-current" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
              <span className="text-sm text-gray-600 ml-2">(120 reviews)</span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {title ||
                "This book explores fascinating themes in a compelling and unforgettable way. Perfect for readers who love engaging storytelling and unique perspectives."}
            </p>
            <div className="text-3xl font-semibold text-pink-600 mb-4">${price}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Buy Now
            </button>
          </div>

          <button className="text-blue-600 underline text-sm mt-4 hover:text-blue-800 transition">
            Read Sample
          </button>

          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">Share this book:</p>
            <div className="flex gap-3">
              <a href="#" className="text-blue-500 hover:underline">Facebook</a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
              <a href="#" className="text-pink-600 hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      <div className="max-w-5xl w-full">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">You might also like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={`https://covers.openlibrary.org/b/id/${8231991 + id}-L.jpg`}
                alt={`Related Book ${id}`}
                className="mb-3 rounded-lg object-cover w-full h-60"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150x200?text=No+Image")
                }
              />
              <h4 className="text-base font-semibold text-gray-700 mb-1">
                Related Book {id}
              </h4>
              <p className="text-sm text-gray-500">$9.99</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default BookDetails;

