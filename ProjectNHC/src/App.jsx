import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import ProductGrid from "./components/heropage/ProductGrid.jsx";
import Product from "./components/heropage/Product.jsx";
import AboutSection from "./components/heropage/AboutSection.jsx";
import ContactSection from "./components/heropage/ContactSection.jsx";
import CardList from "./components/productlist/Cardlist.jsx"; 
import Homepage from "./components/heropage/Homepage.jsx";
import SiteHeader from "./components/heropage/SiteProject.jsx";
import ProductDescription from "./components/heropage/ProdcutDiscription.jsx";

export default function App() {
  return ( 
    <div>
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/product-grid" element={<ProductGrid />} />
          <Route path="/products" element={<CardList />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/product" element={<Product />} /> 
        </Routes>
      </main>
    </div>
  );
}
