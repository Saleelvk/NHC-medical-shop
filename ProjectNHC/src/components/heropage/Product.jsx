import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Link } from "react-router-dom"; 


import {
  PersonalCare,
  Agro,
  HomeCare,
  Healthcare,
  FoodandBeverages,
} from "../../assets/Products.jsx";

const Product = () => { 

  const products = [
    ...PersonalCare,
    ...Agro,
    ...HomeCare,
    ...Healthcare,
    ...FoodandBeverages,
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }, 
  };

  return (
    <div className="flex justify-center my-4">
      <div className="relative z-20 w-full text-center my-10">
        <h1 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Products
        </h1>
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
        >
          {products.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                
                <div className="relative h-64">
                  <img
                    src={item.image} 
                    alt={item.name}
                    className="object-contain w-full h-full rounded-t-xl"
                  />
                </div>

            
                <div className="p-6 flex flex-col justify-between text-left flex-1">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-2 font-poppins truncate">
                      {item.name}
                    </h5>
                    <p className="text-sm text-gray-500 font-poppins">
                      ₹{item.price}
                    </p>
                  </div>
                  {/* Add to Cart Button */}
                  <Link
                    to={`/product/${item.id}`}
                    className="w-full"
                    key={item.id}
                  >
                    <button className="bg-green-600 text-white py-2 px-3 font-poppins rounded-md text-md hover:bg-green-700  mt-4 w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Product;
