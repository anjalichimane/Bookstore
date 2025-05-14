
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bookName = params.get("name");
  const bookPrice = parseFloat(params.get("price"));

  const [quantity, setQuantity] = useState(1);
  const totalPrice = (quantity * bookPrice).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🧾 Checkout Summary</h1>

        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">📚 Book Name:</span>
            <span>{bookName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">💰 Price per Unit:</span>
            <span>${bookPrice}</span>
          </div>
        </div>

        
        <div className="mb-4 flex items-center justify-between">
          <span className="font-semibold">🧮 Quantity:</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >-</button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >+</button>
          </div>
        </div>

    
        <div className="flex justify-between text-xl font-bold text-green-600 mb-6">
          <span>Total Price:</span>
          <span>${totalPrice}</span>
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-200"
          onClick={() => alert(`Proceeding to payment for ${bookName} ($${totalPrice})`)}
        >
          Proceed to Payment 💳
        </button>
      </div>
    </div>
  );
}

export default Checkout;
