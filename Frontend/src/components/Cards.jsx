import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cards({ item }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "https://via.placeholder.com/150?text=No+Image";

  const handleImageError = () => {
    setImageError(true);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevents triggering card click
    navigate(`/checkout?name=${encodeURIComponent(item.name)}&price=${item.price}`);
  };

  const handleCardClick = () => {
    navigate(`/details?name=${encodeURIComponent(item.name)}&price=${item.price}&title=${encodeURIComponent(item.title)}&category=${encodeURIComponent(item.category)}&image=${encodeURIComponent(item.image)}`);
  };

  return (
    <div className="mt-4 my-3 w-72 cursor-pointer" onClick={handleCardClick}> 
      <div className="card w-full bg-base-100 shadow-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="flex justify-center p-3 h-64"> 
          <img
            src={imageError ? fallbackImage : item.image}
            alt={item.name}
            className="w-full h-full object-contain rounded-lg shadow-md"
            onError={handleImageError} 
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-500">{item.title}</p>
          <p className="text-sm text-gray-500 italic mb-1">By {item.author}</p>
          <div className="card-actions flex justify-between items-center mt-2">
            <div className="badge badge-outline text-lg">${item.price}</div>
            <button
              className="px-3 py-1 rounded-md border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white duration-200"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
