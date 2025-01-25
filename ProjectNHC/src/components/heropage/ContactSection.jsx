import React from "react";

function ContactSection({ id }) {
  return ( 
    <div id="contact-us" className="pt-24 lg:pt-0 mt-0 md:mt-10 ">
      <h1 className="text-center text-3xl font-poppins font-semibold mb-14">
        Contact Us
      </h1>
      <section className="py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Map Section */}
            <div className="space-y-8">
              <div className="relative h-[300px] sm:h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=75.99332,11.31999,75.99632,11.32002&layer=mapnik"
                  width="100%"
                  height="100%"
                  title="Mukkam Location, Kozhikode"
                />
              </div>

              {/* Contact Information */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-4 bg-white rounded-lg shadow-md flex items-start space-x-4">
                  <div className="text-green-600 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Our Office Address
                    </h3>
                    <p className="text-sm text-gray-600">
                      Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside
                      Goregaon Sports Complex, Malad West, Mumbai, Maharashtra
                      400064
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-md flex items-start space-x-4">
                  <div className="text-green-600 flex-shrink-0">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <div>
                      <h3 className="font-semibold text-gray-700">
                        General Enquiries
                      </h3>
                      <p className="text-sm text-gray-600">
                        websupport@justdial.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-md flex items-start space-x-4">
                  <div className="text-green-600 flex-shrink-0">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Call Us</h3>
                    <p className="text-sm text-gray-600">+91-8888888888</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-md flex items-start space-x-4">
                  <div className="text-green-600 flex-shrink-0">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Our Timing</h3>
                    <p className="text-sm text-gray-600">
                      Mon - Sun: 10:00 AM - 07:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 sm:p-8 bg-white rounded-lg shadow-md md:h-[500px] ">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 min-h-[150px]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
