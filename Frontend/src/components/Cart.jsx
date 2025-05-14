import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-10 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart 🛒</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 border-b pb-4"
                >
                  <img
                    src={item.image || "https://via.placeholder.com/100x140?text=No+Image"}
                    alt={item.name}
                    className="w-24 h-32 object-cover rounded-md"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/100x140?text=No+Image")
                    }
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    {item.author && (
                      <p className="text-sm text-gray-600 italic">
                        by {item.author}
                      </p>
                    )}
                    <p className="text-pink-600 font-medium text-lg mt-1">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(index)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 text-right">
              <p className="text-xl font-semibold text-gray-800">
                Total: <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
              </p>
              <button className="mt-4 bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition text-lg">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
