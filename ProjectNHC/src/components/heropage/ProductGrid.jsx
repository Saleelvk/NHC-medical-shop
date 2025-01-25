import React from "react";
import { useNavigate } from "react-router-dom"; 


import {
  PersonalCare,
  Agro,
  HomeCare,
  Healthcare,
  FoodandBeverages,
} from "../../assets/Products.jsx";

function ProductGrid() {
  const navigate = useNavigate(); 

  const allProducts = [
    ...PersonalCare,
    ...Agro,
    ...HomeCare,
    ...Healthcare,
    ...FoodandBeverages,
  ].slice(0, 4); 

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } }); 
  };

  return (
    <div>
      <section className="flex justify-center pb-12">
        <div className="container px-4">
          <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
            Herbal Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="group relative cursor-pointer"
                
              >
                {/* Product Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
               
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full h-full rounded-t-xl"
                    />
                  </div>

                  {/* Product Info with flexible space */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 font-poppins truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-poppins">
                      ₹{product.price}
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button onClick={() => handleProductClick(product)}  className="bg-green-600 text-white py-2 px-3 font-poppins rounded-md text-md hover:bg-green-700 transition-colors duration-300 mt-4 w-full sm:w-auto">
                      View Details 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductGrid;
