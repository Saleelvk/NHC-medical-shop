import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

// Static product data
import {
  PersonalCare,
  Agro,
  HomeCare,
  Healthcare,
  FoodandBeverages,
} from "../../assets/Products.jsx";

function ProductDescription() {
  const { id } = useParams(); // Get product id from URL params
  const navigate = useNavigate();

  // Combine all products from different categories
  const products = [
    ...PersonalCare,
    ...Agro,
    ...HomeCare,
    ...Healthcare,
    ...FoodandBeverages,
  ];

  // Find the product based on the id from the URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <p className="text-lg text-gray-600">Product not found.</p>
      </div>
    );
  }

  const createWhatsAppLink = () => {
    const message = `Hi, I am interested in this product, ${product.name}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/8075543651?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3 py-3 md:py-0">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:h-[600px] h-[400px]">
          <div className="relative w-full h-full">
            <button
              onClick={() => navigate(-1)} // Back to the previous page
              className="absolute top-3 left-3 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
              aria-label="Back to Products"
            >
              <IoArrowBack />
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center font-poppins">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-gray-600 text-xl mb-4">₹{product.price}</p>
          <p className="text-sm text-gray-700 mb-4">{product.description}</p>
          <a
            href={createWhatsAppLink()}
            className="block bg-green-600 text-white text-center py-3 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
