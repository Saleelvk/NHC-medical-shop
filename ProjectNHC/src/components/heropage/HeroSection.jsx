import React from "react";
import image1 from "../../assets/images/7502.png";
import image2 from "../../assets/images/7525.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <section className="relative bg-[#f0f7f4] pb-36 pt-10 font-poppins">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4 md:px-8">
          {/* Left Section */}
          <div className="space-y-4 w-full ">
            <h1 className="text-4xl md:text-5xl w-full font-bold tracking-tight text-gray-900">
              Ensuring Purity
            </h1>
            <h1 className="text-4xl md:text-5xl w-full  font-bold tracking-tight text-gray-900">
              Ensuring Health
            </h1>

            <p className="text-lg text-gray-600">
              Discover our range of natural herbal products for your well-being.
            </p>
            <Link to={"/products"}>
              <button className="bg-green-600 cursor-pointer  hover:bg-green-500 text-white py-2 px-6 rounded-full mt-4">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right Section (Images) */}
          <div className="relative w-full md:w-auto mt-12 md:mt-0 hidden md:flex justify-between">
  <img
    src={image1}
    alt="Product Collection 1"
    className="w-[50%] md:w-[50%] h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 -mr-1"
  />
  <img
    src={image2}
    alt="Product Collection 2"
    className="w-[50%] md:w-[50%] h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
  />
</div>

        </div>

        {/* Decorative Wave SVG */}
        <div className="absolute bottom-0  left-0 right-0">
          <svg
            className="text-white h-48 md:h-62 w-full"
            viewBox="0 0 1440 320"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
