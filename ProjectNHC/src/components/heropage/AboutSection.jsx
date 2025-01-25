import React from "react";
import image1 from "../../assets/images/7520.png";
import image2 from "../../assets/images/6205.png";
// import image3 from "../assets/images/7473.png";

function AboutSection({id}) { 
  return (
    <section id="about-us" className="py-28 bg-[#f9f9f9] overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          About Us
        </h2>

        <div className="relative max-w-7xl mx-auto">
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-y-0 left-1/4 right-0 bg-[#f0f7f4] rounded-[40px]" />
          </div>

          {/* Content Wrapper */}
          <div className="relative">
            {/* Image Section */}
            <div className="flex justify-center gap-4 mb-12">
              <div className="w-[200px] sm:w-[220px] flex justify-center">
                <img
                  src={image1}
                  alt="Herbal Products Collection"
                  className="w-full object-contain rounded-lg"
                />
              </div>
              <div className="w-[200px] sm:w-[220px] flex justify-center">
                <img
                  src={image2} 
                  alt="Herbal Products Collection"
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Description Section */}
            <div className="text-center">
              <p className="text-gray-600 leading-relaxed text-lg sm:w-4/5 mx-auto">
                We, Nature Herbal Center, are based in Malad West, Mumbai,
                Maharashtra. As one of the most renowned and trusted dealers in
                herbal products, we offer a wide range of items including herbal
                tablets, syrups, capsules, oils, beauty products, healthcare
                solutions, skincare items, and perfumes. Believing that there is
                no substitute for quality when it comes to health, we strive to
                provide the most effective products to our customers. Contact us
                today to explore our offerings!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
