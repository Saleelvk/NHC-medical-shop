import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation for route detection
import { MdLocalHospital } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const SiteProject = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Detect route change

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [location]);  

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <MdLocalHospital className="text-4xl text-green-500" />
          <span className="text-xl font-semibold text-gray-900">Nature Herbal Center</span>
        </Link>


        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`${menuOpen ? "block" : "hidden"} md:flex bg-green-100 md:relative md:flex-row text-center py-2`}>
  <div className="container mx-auto flex flex-col md:flex-row justify-center md:space-x-8 space-y-2 md:space-y-0">
    <Link
      to="/"
      className="text-xs lg:text-sm font-medium text-gray-700 hover:text-green-600"
      onClick={() => setMenuOpen(false)}
    >
      HOME
    </Link>

    <Link
      to="/products"
      className="text-xs lg:text-sm font-medium text-gray-700 hover:text-green-600"
      onClick={() => setMenuOpen(false)}
    >
      PRODUCTS
    </Link>

    <Link
      to="/#about-us"
      className="text-xs lg:text-sm font-medium text-gray-700 hover:text-green-600"
      onClick={() => setMenuOpen(false)}
    >
      ABOUT US
    </Link>

    <Link
      to="/#contact-us"
      className="text-xs lg:text-sm font-medium text-gray-700 hover:text-green-600"
      onClick={() => setMenuOpen(false)}
    >
      CONTACT US
    </Link>
  </div>
</nav>
    </header>
  );
};

export default SiteProject;
