// src/ProductsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "motion/react";

// Product Data
const products = [
  {
    id: 1,
    name: "DCS",
    description: "A complete solution for health monitoring with appointment booking and online consultation facilities.",
    image: "https://source.unsplash.com/400x300/?technology,consulting",
    link: "#",
  },
  {
    id: 2,
    name: "Temperature Converter",
    description: "A temperature converter that allows you to convert various temperature forms.",
    image: "https://source.unsplash.com/400x300/?temperature,tech",
    link: "#",
  },
  {
    id: 3,
    name: "Smart Home Automation",
    description: "Control your home appliances remotely using AI-powered automation.",
    image: "https://source.unsplash.com/400x300/?smart-home,technology",
    link: "#",
  },
  {
    id: 4,
    name: "AI Chatbot",
    description: "Automate customer support with an intelligent AI-powered chatbot.",
    image: "https://source.unsplash.com/400x300/?robot,chatbot",
    link: "#",
  },
  {
    id: 5,
    name: "Cloud Storage Solutions",
    description: "Secure, scalable, and fast cloud storage for your data needs.",
    image: "https://source.unsplash.com/400x300/?cloud,server",
    link: "#",
  },
  {
    id: 6,
    name: "E-commerce Platform",
    description: "A complete solution to start your online store and scale your business.",
    image: "https://source.unsplash.com/400x300/?shopping,ecommerce",
    link: "#",
  },
];

const ProductsPage = () => {

  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-gray-50 mt-6">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-green-600 origin-left w-full h-2 top-0 fixed z-50"
      >
        {" "}
      </motion.div>

      {/* 🌟 Hero Section */}
      <section className="text-center py-20 px-6 bg-gray-100">
        <h1 className="text-3xl font-semibold text-green-800 mb-4">Our Products</h1>
        <p className="text-md text-green-600 mb-6 max-w-3xl mx-auto">
          Explore our latest innovations, designed to revolutionize the digital experience.
        </p>
      </section>

      {/* 🔥 Products Grid Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {products.map((product) => (
            <div key={product.id} className="relative bg-white p-4 rounded-xl shadow-md transition-all ease-in-out duration-300 hover:scale-105 border border-gray-200">
              
              {/* 📸 Image */}
              <img src={product.image} alt={product.name} 
                   className="w-full h-52 object-cover rounded-lg shadow-sm"  />

              {/* 📝 Product Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>

                {/* 🔗 Visit Product Button */}
                <a href={product.link} 
                   className="mt-4 inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-80 transition">
                  Visit Product
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 🚀 Call to Action (CTA) */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl text-green-800 font-semibold mb-4">Want to See More?</h2>
        <p className="text-md text-green-600 mb-10 max-w-2xl mx-auto">
          Explore our full catalog and discover the perfect products for you.
        </p>
        <Link to="/contact"
          className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default ProductsPage;
