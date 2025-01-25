import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import Product from "./Product";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
export default function Homepage() {

    const location = useLocation();
 
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
    return (
      <div>
        <main>
          <HeroSection />
          <ProductGrid />
          <Product />
          <AboutSection id="about-us" /> 
          <ContactSection id="contact-us" /> 
        </main>
      </div>
    );
  }
  
