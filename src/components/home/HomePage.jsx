
import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaChartLine,
  FaCogs,
  FaCheckCircle,
  FaHandsHelping,
  FaDesktop,
  FaTools,
  FaBullhorn,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import google from "../../images/google.png";
import Testimonials from "../testimonial/Testimonial";
import "../../css/HomePage.css";
import ScrollProgress from "../ScrollProgress";

const HomePage = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Mayank Yadav",
      designation: "Web Developer",
      imageUrl: google,
    },
    {
      name: "Shikha Arya",
      designation: "Web Developer",
      imageUrl: google,
    },
    {
      name: "Anushka Yadav",
      designation: "Web Developer/HR",
      imageUrl: google,
    },
    {
      name: "Aman Nishad",
      designation: "Content Writer/Video Editor",
      imageUrl: google,
    },
    {
      name: "Arpita Pandey",
      designation: "Web Developer/SEO Expert",
      imageUrl: google,
    },
  ];

  const faqs = [
    {
      question: "What social media platforms do you specialize in?",
      answer:
        "We specialize in Instagram, Facebook, Twitter, LinkedIn, and Pinterest for targeted marketing strategies.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline varies based on the complexity, but typically it takes 4-6 weeks to build a professional website.",
    },
    {
      question: "Do you offer SEO services?",
      answer:
        "Yes, we offer full SEO services, including on-page and off-page optimization to increase organic traffic.",
    },
    {
      question: "What’s included in social media marketing?",
      answer:
        "Our social media marketing services include strategy development, content creation, campaign management, and analytics reporting.",
    },
  ];

  return (
    <div className="mt-10">
      {/* Hero Section */}
      <ScrollProgress />
      <section id="main-section" className="relative">
        <div className="flex justify-center items-center min-h-screen bg-indigo-50">
          <div className="heading text-center space-y-6">
            <motion.h1
              drag
              dragConstraints={{ left: 10, top: 10, right: 10, bottom: 10 }}
              className="text-4xl font-semibold text-gray-800"
            >
              <span className="lessons font-extrabold text-6xl">
                <span className="one">Branding..</span>{" "}
                <span span className="two">
                  Websites..
                </span>{" "}
                <span className="three"> Marketing..</span>{" "}
              </span>
            </motion.h1>
            <p className="text-xl text-gray-600">
              Transform Your Online Presence with Stunning Websites & Powerful
              Social Media Marketing
            </p>
            <button className="text-gray-800 px-10 py-4 rounded-full shadow-lg transition-all transform hover:scale-105">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <div className="p-8 bg-indigo-50 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-12">
          Our Team Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group ">
              <div className="relative bg-white w-full h-96 rounded-xl shadow-lg hover:transition-all ease-in-out duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 rounded-full inline-block p-1 mt-8">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-white"
                  />
                </div>
                <div className="p-4 mt-4">
                  <h3 className="text-md font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.designation}</p>
                </div>
                <div className="flex justify-center gap-4 pt-14">
                  <FaLinkedin className="text-xl text-blue-900 cursor-pointer" />
                  <FaFacebook className="text-xl text-blue-700 cursor-pointer" />
                  <FaGithub className="text-xl cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fifth Section */}
      <section className="py-16 px-6 bg-indigo-50">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-blue-900">Why Choose Us?</h2>
        <p className="text-md text-gray-600">
          Elevate your online presence with expert strategies and cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 mt-12 place-items-center">
        {/* Card 1 */}
        <div className="bg-white w-72 h-80 p-6 shadow-lg rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center items-center mt-6 mb-6 w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto">
            <FaChartLine size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Creative & Data-Driven</h3>
          <p className="text-gray-600 text-sm mt-2">
            A perfect blend of design and analytics to drive engagement.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-72 h-80 p-6 shadow-lg rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center items-center mt-6 mb-6 w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto">
            <FaCogs size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Tailored Solutions</h3>
          <p className="text-gray-600 text-sm mt-2">
            Every business is unique, and so are our strategies.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-72 h-80 p-6 shadow-lg rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center items-center mt-6 mb-6 w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mx-auto">
            <FaCheckCircle size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Proven Results</h3>
          <p className="text-gray-600 text-sm mt-2">
            Our clients see increased website traffic, leads, and brand awareness.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white w-72 h-80 p-6 shadow-lg rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center items-center mt-6 mb-6 w-16 h-16 bg-red-100 text-red-600 rounded-full mx-auto">
            <FaHandsHelping size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">End-to-End Support</h3>
          <p className="text-gray-600 text-sm mt-2">
            From development to marketing, we handle everything for you.
          </p>
        </div>
      </div>
    </section>


      {/* Services Section */}
 
<section className="px-6 bg-indigo-50 text-center pb-10">
<h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-md mb-12 text-gray-600">
            Offering the best solutions for your business with industry-leading
            services
          </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Service 1: Web Development */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105">
            <FaDesktop className="mx-auto text-4xl text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Web Apps
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
        </div>
      </section>


      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQs */}
      <section className="bg-indigo-50 py-16 p-2">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex justify-between items-center cursor-pointer px-4 py-2 text-md font-semibold text-gray-900 hover:text-blue-600 focus:outline-none transition-colors"
                >
                  {faq.question}
                  <i
                    className={`ri-arrow-down-double-line w-6 h-6 transition-transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  ></i>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-left px-4 py-2 text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-indigo-50 text-center py-10">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-md text-gray-600 mb-10">
          Whether you’re looking for a new project, collaboration, or have
          questions—contact us today.
        </p>
        <Link
          to="/contact"
          className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
