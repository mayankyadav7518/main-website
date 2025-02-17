// src/ServicesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "motion/react";
import {
  FaDesktop,
  FaTools,
  FaBullhorn,
  FaArrowUp,
  FaPenNib,
  FaCloud,
} from "react-icons/fa"; // Importing icons
import { GoGraph } from "react-icons/go";


const ServicesPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-gray-50 mt-6">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-green-600 origin-left w-full h-2 top-0 fixed z-50"
      >
        {" "}
      </motion.div>
      {/* Hero Section */}
      {/* <section className="text-center py-16 px-6 bg-gray-100">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-6 max-w-3xl mx-auto">
          We offer a wide range of services tailored to meet your needs. Explore
          our offerings below:
        </p>
      </section> */}

      <section className="text-center py-20 px-6 bg-gray-100">
        <h1 className="text-3xl font-semibold text-green-800 mb-4">Our Services</h1>
        <p className="text-md text-green-600 mb-6 max-w-3xl mx-auto">
        We offer a wide range of services tailored to meet your needs. Explore
        our offerings below:
        </p>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1: Web Development */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <FaDesktop className="mx-auto text-4xl text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Web Development
            </h3>{" "}
            <hr className="text-gray-300" />
            <p className="text-gray-600 text-sm text-center mt-3">
              Expert advice from certified professionals in various fields.
              Schedule your consultation today!
            </p>
          </div>

          {/* Service 2: UI/UX Design */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <FaTools className="mx-auto text-4xl text-green-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              UI/UX Design
            </h3>{" "}
            <hr className="text-gray-300" />
            <p className="text-gray-600 text-sm text-center mt-3">
              Easily book appointments online at your convenience. No more
              waiting in line!
            </p>
          </div>

          {/* Service 3: Social Media Marketing */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <FaBullhorn className="mx-auto text-4xl text-yellow-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Social Media Marketing
            </h3>{" "}
            <hr className="text-gray-300" />
            <p className="text-gray-600 text-sm text-center mt-3">
              Receive consultations via secure video calls. Connect with our
              specialists from anywhere.
            </p>
          </div>

          {/* Service 4: SEO Services */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <GoGraph className="mx-auto text-4xl text-red-500 mb-6 text-center" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              SEO Services
            </h3>{" "}
            <hr className="text-gray-300" />
            <p className="text-gray-600 text-sm text-center mt-3">
              Track your health metrics with our advanced tools. Stay informed
              about your health status.
            </p>
          </div>

          {/* Service 5: Content Writing */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <FaPenNib className="mx-auto text-4xl text-teal-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Content Writing
            </h3>{" "}
            <hr className="text-gray-300" />
            <p className="text-gray-600 text-sm text-center mt-3">
              24/7 emergency assistance available at your fingertips. We are
              here to help in critical situations.
            </p>
          </div>

          {/* Service 6: Cloud Services */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <FaCloud className="mx-auto text-4xl text-gray-600 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Cloud Services
            </h3>{" "}
            <hr className="text-gray-300" />
            <p className="text-gray-600 text-sm text-center mt-3">
              Seamlessly manage your data in the cloud with our cutting-edge
              cloud solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-md text-green-600 mb-10 max-w-2xl mx-auto">
          Our team is here to help you build, grow, and optimize your business.
          Let's start a conversation.
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

export default ServicesPage;
