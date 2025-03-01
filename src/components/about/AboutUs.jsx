// src/AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";

import Testimonials from "../testimonial/Testimonial";
import ScrollProgress from "../ScrollProgress";

const AboutUs = () => {

  return (
    <section className="bg-gray-5 mt-6">
      <ScrollProgress />
      <section className="text-center py-20 px-6 bg-indigo-50">
        <h1 className="text-3xl font-semibold text-blue-900 mb-4">About Us</h1>
        <p className="text-md text-blue-900 mb-6 max-w-3xl mx-auto">
          We started our journey with a small but ambitious team, driven by the
          passion to solve real-world problems using technology. From humble
          beginnings in 2020, we’ve grown into a full-service digital agency.
        </p>
      </section>
      <div className="bg-indigo-50 mx-auto">
        {/* 🎯 Mission Section */}
        <div className="bg-blue-900 text-white p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-md sm:text-md">
            We are driven by the mission to bring innovation to the forefront of
            every project. Our goal is to create lasting partnerships with
            clients, offering cutting-edge web development and digital
            solutions.
          </p>
        </div>

        {/* 💡 Values Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 text-center">
            {["Innovation", "Integrity", "Collaboration"].map((value) => (
              <div
                key={value}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  {value}
                </h3>
                <p className="text-gray-600 text-md">
                  {value === "Innovation" &&
                    "We embrace new ideas and push boundaries to deliver value-driven solutions."}
                  {value === "Integrity" &&
                    "We uphold honesty and transparency, fostering trust with every client."}
                  {value === "Collaboration" &&
                    "We work closely with our clients to achieve shared success."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🏆 Achievements Section */}
        <div className="text-center mt-16 mb-10">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Our Achievements
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "500+ Projects Delivered",
                desc: "Successfully completed over 500 projects across various industries.",
              },
              {
                title: "100+ Clients Worldwide",
                desc: "Building global relationships through excellence and trust.",
              },
              {
                title: "Awarded Top 10 Agency",
                desc: "Recognized for innovation and customer satisfaction.",
              },
            ].map((achieve, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg w-72 hover:shadow-xl transition-transform hover:scale-105"
              >
                <h3 className="text-md font-semibold text-blue-900 mb-4">
                  {achieve.title}
                </h3>
                <p className="text-gray-600 text-md">{achieve.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ Testimonials Section */}
        <Testimonials />

        {/* 📞 Contact Section */}
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-md text-blue-900 mb-10">
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
    </section>
  );
};

export default AboutUs;
