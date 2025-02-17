// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import google from "../../images/google.png";

// const HomePage = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const cursorRef = useRef(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX + 10, y: e.clientY + 10 });
//     };

//     document
//       .getElementById("main-section")
//       .addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document
//         .getElementById("main-section")
//         .removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const teamMembers = [
//     {
//       name: "Mayank Yadav",
//       designation: "Web Developer",
//       skills: [
//         { name: "React.js" },
//         { name: "Node.js" },
//         { name: "JavaScript" },
//         { name: "Material UI" },
//       ],
//       salary: "$90,000",
//       imageUrl: google,
//       companyLogoUrl: google,
//     },
//     {
//       name: "Olivia Kearney",
//       designation: "Global Marketing Manager",
//       skills: [{ name: "Strategic Planning" }, { name: "Digital Marketing" }],
//       salary: "$120,000",
//       companyLogoUrl: google,
//     },
//     {
//       name: "Brian Lavery",
//       designation: "Head of Shopping Ads",
//       skills: [{ name: "Ads Management" }, { name: "Campaign Strategies" }],
//       salary: "$130,000",
//       companyLogoUrl: google,
//     },
//     {
//       name: "Neil Patel",
//       designation: "Founder",
//       skills: [
//         { name: "SEO" },
//         { name: "Content Marketing" },
//         { name: "Growth Hacking" },
//       ],
//       salary: "$100,000",
//       companyLogoUrl: google,
//     },
//   ];

//   const faqs = [
//     {
//       question: "What social media platforms do you specialize in?",
//       answer:
//         "We specialize in Instagram, Facebook, Twitter, LinkedIn, and Pinterest for targeted marketing strategies.",
//     },
//     {
//       question: "How long does it take to build a website?",
//       answer:
//         "The timeline varies based on the complexity, but typically it takes 4-6 weeks to build a professional website.",
//     },
//     {
//       question: "Do you offer SEO services?",
//       answer:
//         "Yes, we offer full SEO services, including on-page and off-page optimization to increase organic traffic.",
//     },
//     {
//       question: "What’s included in social media marketing?",
//       answer:
//         "Our social media marketing services include strategy development, content creation, campaign management, and analytics reporting.",
//     },
//   ];

//   return (
//     <div className="mt-10">
//       {/* Hero Section */}
//       <section
//         id="main-section"
//         className="relative bg-blue-900 text-white h-screen flex items-center justify-center p-2"
//       >
// <div
//   id="cursor"
//   ref={cursorRef}
//   style={{
//     height: "30px",
//     width: "30px",
//     borderRadius: "50%",
//     backgroundColor: "white",
//     position: "absolute",
//     transition: "all ease ",
//     left: `${cursorPosition.x}px`,
//     top: `${cursorPosition.y}px`,
//   }}
// ></div>
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-30"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1569185278-dc9a041ee34c')",
//           }}
//         ></div>
//         <div className="text-center z-10 px-6 md:px-12">
//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
//             Accelerate Your Growth with Social Media Marketing & Web Development
//           </h1>
//           <p className="text-lg mb-6">
//             Elevate your business through powerful social media strategies and
//             stunning websites. We turn your vision into reality.
//           </p>
//           <button className="bg-orange-500 text-white py-2 px-6 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105">
//             Get Started
//           </button>
//         </div>
//       </section>

//      <section>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="text-center space-y-6">
//           <h1 className="text-4xl font-semibold text-gray-800">
//             Lessons and insights <span className="text-green-500">from 8 years</span>
//           </h1>
//           <p className="text-xl text-gray-600">
//             Where to grow your business as a photographer: site or social media?
//           </p>
//           <button className="bg-green-500 text-gray-800 px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all transform hover:scale-105">
//           Register Now
//         </button>
//         </div>
//       </div>
//     </section>

//     <section className="flex justify-center items-center py-16 px-6 bg-white">
//         <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
//           <div className="text-center md:text-left space-y-6">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               The unseen of spending three years at Pixelgrade
//             </h2>
//             <p className="text-lg text-gray-600">
//               Learn how our work transformed our company. It's not just the design, it's the hard work.
//             </p>
//             <button className="bg-green-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-all">
//               Learn More
//             </button>
//           </div>
//           <div className="flex justify-center">
//             <img src="https://via.placeholder.com/300" alt="illustration" className="max-w-sm" />
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       {/* <section className="bg-blue-50 py-16">
//         <div className="text-center space-y-6">
//           <h2 className="text-3xl font-semibold text-gray-800">
//             Helping a local business reinvent itself
//           </h2>
//           <p className="text-lg text-gray-600">
//             We needed help with our hard work and dedication. Here's what we've accomplished.
//           </p>
//         </div>
//         <div className="flex justify-center space-x-12 mt-12">
//           <div className="bg-white p-8 shadow-lg rounded-lg text-center space-y-4 max-w-xs">
//             <h3 className="text-xl font-semibold text-gray-800">2,245,341</h3>
//             <p className="text-gray-600">Visitors</p>
//           </div>
//           <div className="bg-white p-8 shadow-lg rounded-lg text-center space-y-4 max-w-xs">
//             <h3 className="text-xl font-semibold text-gray-800">46,328</h3>
//             <p className="text-gray-600">Leads</p>
//           </div>
//           <div className="bg-white p-8 shadow-lg rounded-lg text-center space-y-4 max-w-xs">
//             <h3 className="text-xl font-semibold text-gray-800">828,867</h3>
//             <p className="text-gray-600">Event Bookings</p>
//           </div>
//           <div className="bg-white p-8 shadow-lg rounded-lg text-center space-y-4 max-w-xs">
//             <h3 className="text-xl font-semibold text-gray-800">1,926,436</h3>
//             <p className="text-gray-600">Payments</p>
//           </div>
//         </div>
//       </section> */}

//       {/* Third Section */}
//       {/* <section className="py-16 px-6 bg-white">
//         <div className="text-center space-y-6">
//           <h2 className="text-3xl font-semibold text-gray-800">
//             How to design your site footer like we did
//           </h2>
//           <p className="text-lg text-gray-600">
//             Learn the key principles we applied to design the best footer for our website.
//           </p>
//           <button className="bg-green-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-all">
//             Learn More
//           </button>
//         </div>
//       </section> */}

//       {/* Fourth Section */}
//       <section className="bg-gray-800 py-16 text-white">
//         <div className="max-w-6xl mx-auto flex justify-center items-center flex-col text-center space-y-6">
//           <img src="https://via.placeholder.com/100" alt="logo" className="mx-auto" />
//           <h3 className="text-2xl font-semibold">Tim Smith</h3>
//           <p className="text-lg opacity-80">CEO & Founder, Pixelgrade</p>
//           <div className="space-x-4 mt-6">
//             <a href="#" className="text-white">Instagram</a>
//             <a href="#" className="text-white">LinkedIn</a>
//             <a href="#" className="text-white">Twitter</a>
//             <a href="#" className="text-white">GitHub</a>
//           </div>
//         </div>
//       </section>

//       {/* Fifth Section */}
//       <section className="py-16 px-6 bg-gray-50">
//         <div className="text-center space-y-6">
//           <h2 className="text-3xl font-semibold text-gray-800">
//             Caring is the new marketing
//           </h2>
//           <p className="text-lg text-gray-600">
//             Discover how we've created meaningful connections and fostered success with our customers.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
//           <div className="bg-white p-8 shadow-lg rounded-lg space-y-4">
//             <img src="https://via.placeholder.com/150" alt="card-image" className="mx-auto"/>
//             <h3 className="text-xl font-semibold text-gray-800">Creating Streamlined Safeguarding Processes with Online Tools</h3>
//             <button className="text-green-500 hover:text-green-600">Read more →</button>
//           </div>
//           <div className="bg-white p-8 shadow-lg rounded-lg space-y-4">
//             <img src="https://via.placeholder.com/150" alt="card-image" className="mx-auto"/>
//             <h3 className="text-xl font-semibold text-gray-800">What are your safeguarding responsibilities and how can you manage them?</h3>
//             <button className="text-green-500 hover:text-green-600">Read more →</button>
//           </div>
//           <div className="bg-white p-8 shadow-lg rounded-lg space-y-4">
//             <img src="https://via.placeholder.com/150" alt="card-image" className="mx-auto"/>
//             <h3 className="text-xl font-semibold text-gray-800">Revolutionizing the Membership Model With Nutrition Automation</h3>
//             <button className="text-green-500 hover:text-green-600">Read more →</button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-gray-50 p-2">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//             Our Services
//           </h2>
//           <p className="text-lg mb-12 text-gray-600">
//             Offering the best solutions for your business with industry-leading
//             services
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//               <h3 className="text-xl font-semibold text-blue-900 mb-4">
//                 Social Media Marketing
//               </h3>
//               <p className="text-gray-700 mb-4">
//                 Boost your brand's visibility and engagement through tailored
//                 social media strategies.
//               </p>
//               <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
//                 Learn More
//               </button>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//               <h3 className="text-xl font-semibold text-blue-900 mb-4">
//                 Website Development
//               </h3>
//               <p className="text-gray-700 mb-4">
//                 We create responsive, SEO-friendly websites that help you stand
//                 out and convert leads.
//               </p>
//               <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
//                 Learn More
//               </button>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//               <h3 className="text-xl font-semibold text-blue-900 mb-4">
//                 SEO Services
//               </h3>
//               <p className="text-gray-700 mb-4">
//                 Get to the top of Google search results with our comprehensive
//                 SEO services.
//               </p>
//               <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-16 bg-white p-2">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//             About Us
//           </h2>
//           <p className="text-lg text-gray-600 mb-6">
//             We are a team of passionate professionals dedicated to helping
//             businesses grow through innovative solutions.
//           </p>
//           <button className="bg-blue-900 text-white py-2 px-6 rounded-lg text-xl font-semibold">
//             Learn More About Us
//           </button>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section className="py-16 bg-gray-100 p-2">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//             Our Work
//           </h2>
//           <p className="text-lg text-gray-600 mb-12">
//             Take a look at some of the successful projects we've worked on to
//             elevate brands.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             <div className="bg-white shadow-lg rounded-lg">
//               <img
//                 src="https://via.placeholder.com/300"
//                 alt="Project 1"
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-6">
//                 <h3 className="font-semibold text-lg mb-4">
//                   E-commerce Website
//                 </h3>
//                 <p className="text-gray-700">
//                   A fully integrated e-commerce platform that enhances user
//                   experience.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg">
//               <img
//                 src="https://via.placeholder.com/300"
//                 alt="Project 2"
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-6">
//                 <h3 className="font-semibold text-lg mb-4">
//                   Social Media Campaign
//                 </h3>
//                 <p className="text-gray-700">
//                   A successful social media marketing campaign that drove
//                   engagement and sales.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg">
//               <img
//                 src="https://via.placeholder.com/300"
//                 alt="Project 3"
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-6">
//                 <h3 className="font-semibold text-lg mb-4">Brand Website</h3>
//                 <p className="text-gray-700">
//                   A brand new website designed to captivate and convert
//                   visitors.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-gray-900 text-white p-2">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
//           <p className="text-lg mb-12">
//             Hear directly from our clients who experienced growth through our
//             services.
//           </p>

//           {/* Flexbox with responsive grid */}
//           <div className="flex flex-wrap justify-center gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3 lg:w-1/4">
//               <p className="text-lg mb-4">
//                 "Our sales skyrocketed after we implemented their social media
//                 strategies! Highly recommended!"
//               </p>
//               <p className="font-semibold">John Doe</p>
//               <p className="text-sm text-gray-400">CEO, E-commerce Business</p>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3 lg:w-1/4">
//               <p className="text-lg mb-4">
//                 "The new website they built for us is beautiful and
//                 user-friendly, exactly what we needed!"
//               </p>
//               <p className="font-semibold">Jane Smith</p>
//               <p className="text-sm text-gray-400">Founder, Startup</p>
//             </div>

//             {/* Testimonial 3 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3 lg:w-1/4">
//               <p className="text-lg mb-4">
//                 "Their team is highly responsive, and their work is second to
//                 none. Our business is growing rapidly!"
//               </p>
//               <p className="font-semibold">Alex Brown</p>
//               <p className="text-sm text-gray-400">
//                 Marketing Director, Tech Corp
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="p-8 bg-white text-center">
//         <h2 className="text-3xl font-bold text-blue-900 mb-12">
//           Our Team Members
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="group">
//               <div className="relative w-full h-80 rounded-xl shadow-lg transition-all duration-500">
//                 <div className="p-4 inline-block">
//                   <div className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 p-2 rounded-full inline-block">
//                     <img
//                       src={member.imageUrl}
//                       alt={member.name}
//                       className="w-32 h-32 rounded-full border-4 border-white"
//                     />
//                   </div>
//                   <img
//                     src={member.companyLogoUrl}
//                     className="w-16 h-16 absolute bottom-50 right-28 transform translate-x-1/2 translate-y-1/2 shadow-lg"
//                   />
//                 </div>

//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-600">{member.designation}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* FAQs */}
//       <section className="bg-gray-50 py-16 p-2">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border-b pb-4">
//                 <button
//                   onClick={() => toggle(index)}
//                   className="w-full text-left flex justify-between items-center cursor-pointer px-4 py-2 text-lg font-semibold text-gray-900 hover:text-blue-600 focus:outline-none transition-colors"
//                 >
//                   {faq.question}
//                   <i
//                     className={`ri-arrow-down-double-line w-6 h-6 transition-transform ${
//                       activeIndex === index ? "rotate-180" : "rotate-0"
//                     }`}
//                   ></i>
//                 </button>
//                 <div
//                   className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                     activeIndex === index ? "max-h-40" : "max-h-0"
//                   }`}
//                 >
//                   <p className="text-left px-4 py-2 text-gray-600">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 bg-white p-2">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//             Get in Touch
//           </h2>
//           <p className="text-lg text-gray-600 mb-6">
//             Ready to start your project? Reach out to us today!
//           </p>
//           <button className="bg-blue-900 text-white py-2 px-6 rounded-lg text-xl font-semibold">
//             Contact Us
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;












import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Link } from "react-router-dom";
import google from "../../images/google.png";
import myPic from "../../images/my.jpeg";
import Testimonials from "../testimonial/Testimonial";

const HomePage = () => {
  const { scrollYProgress } = useScroll();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // const cursorRef = useRef(null);
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  //   };

  //   document
  //     .getElementById("main-section")
  //     .addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document
  //       .getElementById("main-section")
  //       .removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  const teamMembers = [
    {
      name: "Mayank Yadav",
      designation: "Web Developer",
      skills: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "JavaScript" },
        { name: "Material UI" },
      ],
      salary: "$90,000",
      imageUrl: myPic,
    },
    {
      name: "Olivia Kearney",
      designation: "Global Marketing Manager",
      skills: [{ name: "Strategic Planning" }, { name: "Digital Marketing" }],
      salary: "$120,000",
      imageUrl: myPic,
    },
    {
      name: "Brian Lavery",
      designation: "Head of Shopping Ads",
      skills: [{ name: "Ads Management" }, { name: "Campaign Strategies" }],
      salary: "$130,000",
      imageUrl: myPic,
    },
    {
      name: "Neil Patel",
      designation: "Founder",
      skills: [
        { name: "SEO" },
        { name: "Content Marketing" },
        { name: "Growth Hacking" },
      ],
      salary: "$100,000",
      imageUrl: myPic,
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
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-green-600 origin-left w-full h-2 top-0 fixed z-50"
      >
        {" "}
      </motion.div>
      <section id="main-section" className="relative">
        {/* <div
          id="cursor"
          ref={cursorRef}
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            backgroundColor: "green",
            position: "absolute",
            transition: "all ease 0.2s",
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y - 60}px`,
          }}
        ></div> */}
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="text-center space-y-6">
            <motion.h1
              drag
              dragConstraints={{ left: 10, top: 10, right: 10, bottom: 10 }}
              className="text-4xl font-semibold text-gray-800"
            >
              Lessons and insights{" "}
              <span className="text-green-500">from 8 years</span>
            </motion.h1>
            <p className="text-xl text-gray-600">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="bg-green-500 text-gray-800 px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all transform hover:scale-105">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* <section className="flex justify-center items-center py-16 px-6 bg-white">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-lg text-gray-600">
              Learn how our work transformed our company. It's not just the
              design, it's the hard work.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-all">
              Learn More
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/300"
              alt="illustration"
              className="max-w-sm"
            />
          </div>
        </div>
      </section> */}

      <div className="p-8 bg-white text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-12">
          Our Team Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative w-full h-80 rounded-xl shadow-lg hover:transition-all ease-in-out duration-300 transform hover:scale-105">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fifth Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Caring is the new marketing
          </h2>
          <p className="text-md text-gray-600">
            Discover how we've created meaningful connections and fostered
            success with our customers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <div className="bg-white p-8 shadow-lg rounded-lg space-y-4">
            <img
              src="https://via.placeholder.com/150"
              alt="card-image"
              className="mx-auto"
            />
            <h3 className="text-md font-semibold text-gray-800">
              Creating Streamlined Safeguarding Processes with Online Tools
            </h3>
            <button className="text-green-500 hover:text-green-600">
              Read more →
            </button>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg space-y-4">
            <img
              src="https://via.placeholder.com/150"
              alt="card-image"
              className="mx-auto"
            />
            <h3 className="text-md font-semibold text-gray-800">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h3>
            <button className="text-green-500 hover:text-green-600">
              Read more →
            </button>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg space-y-4">
            <img
              src="https://via.placeholder.com/150"
              alt="card-image"
              className="mx-auto"
            />
            <h3 className="text-md font-semibold text-gray-800">
              Revolutionizing the Membership Model With Nutrition Automation
            </h3>
            <button className="text-green-500 hover:text-green-600">
              Read more →
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 p-2">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-md mb-12 text-gray-600">
            Offering the best solutions for your business with industry-leading
            services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Social Media Marketing
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Boost your brand's visibility and engagement through tailored
                social media strategies.
              </p>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Website Development
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                We create responsive, SEO-friendly websites that help you stand
                out and convert leads.
              </p>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                SEO Services
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Get to the top of Google search results with our comprehensive
                SEO services.
              </p>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-100 p-2">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Work
          </h2>
          <p className="text-md text-gray-600 mb-12">
            Take a look at some of the successful projects we've worked on to
            elevate brands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  E-commerce Website
                </h3>
                <p className="text-gray-700 text-sm">
                  A fully integrated e-commerce platform that enhances user
                  experience.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Social Media Campaign
                </h3>
                <p className="text-gray-700 text-sm">
                  A successful social media marketing campaign that drove
                  engagement and sales.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 3"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">Brand Website</h3>
                <p className="text-gray-700 text-sm">
                  A brand new website designed to captivate and convert
                  visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     <Testimonials />

      {/* FAQs */}
      <section className="bg-gray-50 py-16 p-2">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
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
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-green-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-md text-green-600 mb-10">
          Whether you’re looking for a new project, collaboration, or have
          questions—contact us today.
        </p>
        <Link to="/contact"
          className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
