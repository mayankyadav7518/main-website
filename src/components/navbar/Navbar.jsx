// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLinkClick = () => {
//     setMenuOpen(false); // Close the menu when a link is clicked
//   };

//   return (
//     <nav className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold">MyWebsite</h1>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center">
//             <Link className="hover:text-gray-400" to="/" onClick={handleLinkClick}>Home</Link>
//             <Link className="hover:text-gray-400" to="/about" onClick={handleLinkClick}>About</Link>
//             <Link className="hover:text-gray-400" to="/services" onClick={handleLinkClick}>Services</Link>
//             <Link className="hover:text-gray-400" to="/products" onClick={handleLinkClick}>Our Products</Link>
//             <Link className="hover:text-gray-400" to="/contact" onClick={handleLinkClick}>Contact</Link>
            
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {menuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-800">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link className="block px-3 py-2 text-white hover:bg-gray-700 rounded" to="/" onClick={handleLinkClick}>Home</Link>
//             <Link className="block px-3 py-2 text-white hover:bg-gray-700 rounded" to="/about" onClick={handleLinkClick}>About</Link>
//             <Link className="block px-3 py-2 text-white hover:bg-gray-700 rounded" to="/services" onClick={handleLinkClick}>Services</Link>
//             <Link className="block px-3 py-2 text-white hover:bg-gray-700 rounded" to="/products" onClick={handleLinkClick}>Our Products</Link>
//             <Link className="block px-3 py-2 text-white hover:bg-gray-700 rounded" to="/contact" onClick={handleLinkClick}>Contact</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const handleLinkClick = () => setIsMenuOpen(false);

//   return (
//     <nav className="flex justify-between items-center py-4 px-6 bg-white fixed top-0 left-0 w-full z-50">
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
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-8 h-8"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Menu for Desktop */}
//       <div className="hidden md:flex space-x-6 items-center">
//         <Link className="hover:text-gray-400" to="/" onClick={handleLinkClick}>
//           Home
//         </Link>
//         <Link className="hover:text-gray-400" to="/about" onClick={handleLinkClick}>
//           About
//         </Link>
//         <Link className="hover:text-gray-400" to="/services" onClick={handleLinkClick}>
//           Services
//         </Link>
//         <Link className="hover:text-gray-400" to="/products" onClick={handleLinkClick}>
//           Our Products
//         </Link>
//         <Link className="hover:text-gray-400" to="/contact" onClick={handleLinkClick}>
//           Contact
//         </Link>
//       </div>

//       {/* Mobile Menu */}
//       <ul
//         className={`${
//           isMenuOpen ? 'flex-col' : 'hidden'
//         } flex md:hidden space-y-4 absolute top-16 left-0 w-full bg-white shadow-lg`}
//       >
//         <li>
//           <Link to="/" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:text-gray-400">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:text-gray-400">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/services" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:text-gray-400">
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link to="/products" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:text-gray-400">
//             Our Products
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" onClick={handleLinkClick} className="block py-2 px-4 text-gray-700 hover:text-gray-400">
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Register Button (Visible only on desktop) */}
//       <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all hidden md:block">
//         Register Now
//       </button>
//     </nav>
//   );
// };

// export default Navbar;










import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-xl font-semibold text-green-500">Nexcents</div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-green-500">
          {!isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu for Desktop */}
      <div className="hidden md:flex space-x-6 items-center">
        {["/", "/about", "/services","/products" , "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Services", "Our Products", "Contact"];
          return (
            <Link
              key={path}
              to={path}
              onClick={handleLinkClick}
              className={`hover:text-gray-400 transition-all ${
                location.pathname === path ? "text-green-500 font-bold" : "text-gray-700"
              }`}
            >
              {labels[index]}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu */}
      <ul className={`${isMenuOpen ? "flex-col" : "hidden"} flex md:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}>
        {["/", "/about", "/services", "/products", "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Services", "Our Products", "Contact"];
          return (
            <li key={path}>
              <Link
                to={path}
                onClick={handleLinkClick}
                className={`block py-2 px-4 transition-all ${
                  location.pathname === path ? "text-green-500 font-bold bg-gray-100" : "text-gray-700 hover:text-gray-400"
                }`}
              >
                {labels[index]}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Register Button (Desktop Only) */}
      <button className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-all hidden md:block">
        Register Now
      </button>
    </nav>
  );
};

export default Navbar;
