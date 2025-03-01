// src/ProductsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "motion/react";
import wd from "../../images/wdtrends.webp";
import smm from "../../images/smm.jpg";
import it from "../../images/it.webp";
import marketting from "../../images/marketting.jpg";
import ScrollProgress from "../ScrollProgress";
import mypic from "../../images/my.jpeg";

// Product Data
const blogs = [
  {
    id: 1,
    name: "Web Development Trends 2025",
    description:
      "Key web development trends shaping businesses and enhancing user experience in 2025.",
    image: wd,
    blogger_name: "Mayank Yadav",
    blogger_image: mypic,
    blog_date: "15 March 2025",
    link: "#",
  },
  {
    id: 2,
    name: "Social Media Marketing Strategies",
    description:
      "How social media impacts branding, customer engagement, and digital advertising effectiveness.",
    image: smm,
    blogger_name: "Jane Smith",
    blogger_image: mypic,
    blog_date: "12 March 2025",
    link: "#",
  },
  {
    id: 3,
    name: "Why IT Services Matter",
    description:
      "The role of IT services in business efficiency, security, and technological innovation.",
    image: it,
    blogger_name: "Alex Johnson",
    blogger_image: mypic,
    blog_date: "10 March 2025",
    link: "#",
  },
  {
    id: 4,
    name: "Factors of Digital Marketing Success",
    description:
      "Latest SEO, content marketing, and paid advertising strategies for digital growth and attract more customers.",
    image: marketting,
    blogger_name: "Emily Carter",
    blogger_image: mypic,
    blog_date: "08 March 2025",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="bg-indigo-50 mt-6">
      <ScrollProgress />

      {/* 🌟 Hero Section */}
      <section className="text-center py-20 px-6 bg-indigo-50">
        <h1 className="text-3xl font-semibold text-blue-900 mb-4">
          Resources and Insights
        </h1>
        <p className="text-md text-blue-900 max-w-3xl mx-auto">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </section>

      {/* 🔥 Products Grid Section */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative bg-white p-4 rounded-xl shadow-md transition-all ease-in-out duration-300 hover:scale-105 border border-gray-200"
            >
              {/* 📸 Image */}
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full h-52 object-cover rounded-lg shadow-sm"
              />

              {/* 📝 Product Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>

                <div className="flex pt-12">
                  <div className="h-10 w-10 me-4">
                    <img
                      src={blog.blogger_image}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>

                  <div>
                    <h1 className="text-xs text-gray-500">
                      {blog.blogger_name}
                    </h1>
                    <h1 className="text-xs text-gray-500">{blog.blog_date}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Call to Action (CTA) */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-2xl text-blue-900 font-semibold mb-4">
          Want to See More?
        </h2>
        <p className="text-md text-blue-900 mb-10 max-w-2xl mx-auto">
          Explore our full catalog and discover the perfect products for you.
        </p>
        <Link
          to="/contact"
          className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Blog;
