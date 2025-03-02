
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiPhoneCall } from "react-icons/fi";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const handleLinkClick = () => setIsMenuOpen(false);

//   return (
//     <nav className="flex justify-between items-center py-4 px-6 bg-gray-900 fixed top-0 left-0 w-full z-50">
//       {/* Logo */}
//       <div className="text-xl font-semibold text-green-500">Nexcents</div>

//       {/* Hamburger Icon for Mobile */}
//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-green-500">
//           {!isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-8 h-8"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-8 h-8"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Menu for Desktop */}
//       <div className="hidden md:flex space-x-6 items-center">
//         {["/", "/about", "/services", "/blogs", "/contact"].map(
//           (path, index) => {
//             const labels = ["Home", "About", "Services", "Blogs", "Contact"];
//             return (
//               <Link
//                 key={path}
//                 to={path}
//                 onClick={handleLinkClick}
//                 className={`hover:text-gray-400 transition-all ${
//                   location.pathname === path
//                     ? "text-green-500 font-bold"
//                     : "text-white"
//                 }`}
//               >
//                 {labels[index]}
//               </Link>
//             );
//           }
//         )}
//       </div>

//       {/* Mobile Menu */}
//       <ul
//         className={`${
//           isMenuOpen ? "flex-col" : "hidden"
//         } flex md:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}
//       >
//         {["/", "/about", "/services", "blogs", "/contact"].map(
//           (path, index) => {
//             const labels = ["Home", "About", "Services", "Blogs", "Contact"];
//             return (
//               <li key={path}>
//                 <Link
//                   to={path}
//                   onClick={handleLinkClick}
//                   className={`block py-2 px-4 transition-all ${
//                     location.pathname === path
//                       ? "text-green-500 font-bold bg-gray-100"
//                       : "text-gray-700 hover:text-gray-400"
//                   }`}
//                 >
//                   {labels[index]}
//                 </Link>
//               </li>
//             );
//           }
//         )}
//       </ul>

//       <Link
//         to="/contact"
//         className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-all hidden md:flex items-center gap-2"
//       >
//         <FiPhoneCall />
//         <span>Contact Us</span>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;












import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 flex justify-between items-center px-6 ${
        isShrunk
          ? "w-2/3 h-16 bg-white text-black py-2 shadow-lg"
          : "w-full bg-gray-900 text-white py-4"
      }`}
    >
      {/* Logo */}
      <div className="text-xl text-green-500 font-semibold transition-all duration-300">
        Nexcents
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className={`${isShrunk ? "text-black" : "text-green-500"}`}>
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu for Desktop */}
      <div
        className={`hidden md:flex items-center transition-all duration-300 ${
          isShrunk ? "space-x-4" : "space-x-6"
        }`}
      >
        {["/", "/about", "/services", "/blogs", "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Services", "Blogs", "Contact"];
          return (
            <Link
              key={path}
              to={path}
              onClick={handleLinkClick}
              className={`hover:text-gray-500 transition-all ${
                location.pathname === path
                  ? "text-green-500 font-bold"
                  : ""
              }`}
            >
              {labels[index]}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? "flex-col" : "hidden"
        } flex md:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}
      >
        {["/", "/about", "/services", "/blogs", "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Services", "Blogs", "Contact"];
          return (
            <li key={path}>
              <Link
                to={path}
                onClick={handleLinkClick}
                className={`block py-2 px-4 transition-all ${
                  location.pathname === path
                    ? "text-green-500 font-bold bg-gray-100"
                    : "text-gray-700 hover:text-gray-400"
                }`}
              >
                {labels[index]}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        to="/contact"
        className={`${
          isShrunk ? "bg-black text-white py-3 px-4 text-sm" : "bg-green-500 text-white py-2 px-6 text-base"
        } rounded-xl hover:opacity-80 transition-all hidden md:flex items-center gap-2`}
      >
        <FiPhoneCall />
        <span>Contact Us</span>
      </Link>
    </nav>
  );
};

export default Navbar;
