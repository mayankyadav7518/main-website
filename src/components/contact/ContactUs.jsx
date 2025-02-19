import React, { useState } from "react";
import { motion, useScroll } from "motion/react";
import google from "../../images/google.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import {
  FaLocationDot,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const ContactUs = () => {
  const { scrollYProgress } = useScroll();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycby76iVMSusEUu53Zgs3Q5duW88tq2cvgIwjMA-bqlFWCXL98E_XcWUJBfU-tcRuCEW3/exec";

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.result === "success") {
        setResult("Form Submitted Successfully ✅");
        setFormData({ name: "", contact: "", email: "", message: "" });
      } else {
        setResult("Failed to submit the form ❌");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mt-6 bg-indigo-50">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-green-600 origin-left w-full h-2 top-0 fixed z-50"
      >
        {" "}
      </motion.div>
     <section className="text-center py-20 px-6">
        <h1 className="text-3xl font-semibold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-md text-blue-900 mb-6 max-w-3xl mx-auto">
        Any questions or remarks? Just write us a message..!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center container mx-auto px-2">
        <div className="flex flex-col gap-10 pt-6 md:gap-14 shadow-lg rounded-lg md:p-8 bg-gradient-to-b from-gray-800 to-gray-700 h-[70vh] max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          <h1 className="text-white text-xl md:text-2xl text-center font-semibold">
            Contact Information
          </h1>

          <div className="px-6 md:px-14 text-white">
            {/* Phone */}
            <div className="flex items-center gap-4 text-md md:text-sm p-4">
              <BiSolidPhoneCall className="text-xl" />
              <h2>
                <a href="tel:+7518868219" className="hover:underline">
                  7518868219
                </a>
              </h2>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 text-md md:text-sm p-4">
              <IoMail className="text-xl" />
              <h2>
                <a
                  href="mailto:mayankkumar11.2015@gmail.com"
                  className="hover:underline"
                >
                  mayankyadav@gmail.com
                </a>
              </h2>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 text-md md:text-sm p-4">
              <FaLocationDot className="text-xl" />
              <h2>
                <a
                  href="https://surl.li/pkbhrk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Gorakhpur, Uttar Pradesh, India, 273209
                </a>
              </h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 text-2xl mt-16 p-6">
              <BsInstagram className="text-rose-600 cursor-pointer hover:scale-110 transition-transform" />
              <FaFacebook className="text-blue-800 cursor-pointer hover:scale-110 transition-transform" />
              <FaYoutube className="text-red-700 cursor-pointer hover:scale-110 transition-transform" />
              <FaWhatsapp className="text-green-600 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* 📩 Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-blue-900 text-center mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm text-center mb-4">
            Reach out to us and we'll respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your Name"
              required
            />

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your Contact Number"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your Email Address"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your Message"
              rows="4"
              required
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700 flex justify-center items-center transition"
            >
              Submit Now <i className="ri-arrow-right-double-line ml-2"></i>
            </button>
          </form>

          {/* ✅ Form Submission Message */}
          {result && (
            <div
              className={`mt-4 text-center text-lg font-medium ${
                result.includes("Successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {result}
            </div>
          )}
        </div>
      </div>

      {/* Google Map Embed */}
      <h1 className="text-center text-2xl font-semibold mt-10 text-blue-900">
        Find us here...
      </h1>
      <div className="w-[100%] h-[60vh] mt-2 py-10 px-6">
        <iframe
          className="w-full h-full rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0635635700256!2d83.37087017499818!3d26.76213497677967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144c39aa24411%3A0x80466b579ee90b3a!2sGorakhpur%2C%20Uttar%20Pradesh%20273209!5e0!3m2!1sen!2sin!4v1717693232893"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
