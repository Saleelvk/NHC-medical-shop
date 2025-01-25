import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Static product data
import {
  PersonalCare,
  Agro,
  HomeCare,
  Healthcare,
  FoodandBeverages,
} from "../../assets/Products.jsx";

function CardList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredData =
    selectedCategory === "All"
      ? [
          ...PersonalCare,
          ...Healthcare,
          ...HomeCare,
          ...Agro,
          ...FoodandBeverages,
        ]
      : selectedCategory === "PersonalCare"
      ? PersonalCare
      : selectedCategory === "Agro"
      ? Agro
      : selectedCategory === "HomeCare"
      ? HomeCare
      : selectedCategory === "Healthcare"
      ? Healthcare
      : FoodandBeverages;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const renderProductItem = (product) => (
    <div
     
      className="bg-white rounded-lg shadow-lg flex flex-col justify-between cursor-pointer font-poppins overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-100"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-2 font-poppins">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 font-poppins mb-4">
          ₹{product.price}
        </p>
        <button  onClick={() => handleProductClick(product)} className="bg-green-600 text-white py-2 px-3 rounded-md text-sm hover:bg-green-700 transition-colors duration-300 w-full">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-6 font-poppins">
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-300"
          value="All"
          onClick={handleCategoryChange}
        >
          All
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-300"
          value="PersonalCare"
          onClick={handleCategoryChange}
        >
          Personal Care
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-300"
          value="Agro"
          onClick={handleCategoryChange}
        >
          Agro
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-300"
          value="HomeCare"
          onClick={handleCategoryChange}
        >
          Home Care
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-300"
          value="Healthcare"
          onClick={handleCategoryChange}
        >
          Healthcare
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-300"
          value="FoodandBeverages"
          onClick={handleCategoryChange}
        >
          Food & Beverages
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <React.Fragment key={item.id}>
            {renderProductItem(item)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CardList;
