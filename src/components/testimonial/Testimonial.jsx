import React from "react";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    feedback:
      "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
  },
  {
    name: "Tom Williams",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    feedback:
      "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
  },
  {
    name: "Michael Brown",
    role: "Online Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    feedback:
      "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
  },
];

const TestimonialCard = ({ name, role, image, rating, feedback }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg text-center">
      <p className="text-gray-300 mb-4">"{feedback}"</p>
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-yellow-400 ${i < rating ? "opacity-100" : "opacity-30"}`}>
            ★
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mb-2 border-2 border-gray-700" />
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-gray-800 py-10 px-6 md:px-20">
      <h2 className="text-white text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
