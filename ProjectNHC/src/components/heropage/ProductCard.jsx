import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

function ProductCard({ imgSrc, name, price }) {
  return (
    <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden mx-2 transition-transform transform hover:scale-105">
      <img
        src={imgSrc}
        alt={name}
        className="object-contain w-full h-48 rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-500">{price}</p>
        <button className="bg-green-600 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-700 transition-colors duration-300">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

// Prop validation
ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Expecting a string (image URL)
  name: PropTypes.string.isRequired, // Expecting a string (product name)
  price: PropTypes.string.isRequired, // Expecting a string (price)
};

export default ProductCard;
