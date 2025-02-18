
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserAuth from './components/authentication/UserAuth';
// import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import AboutUs from './components/about/AboutUs';
import Services from './components/services/Services';
import ProductsPage from './components/products/Products';
import ContactUs from './components/contact/ContactUs';
import Footer from './components/footer/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showUserAuth, setShowUserAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      const timer = setTimeout(() => {
        setShowUserAuth(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    setShowUserAuth(false); 
  };

  const handleCloseUserAuth = () => {
    setShowUserAuth(false); 
  };

  return (
    <Router>
      {isAuthenticated ? (
        <>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          {showUserAuth && <UserAuth onClose={handleCloseUserAuth} onLogin={handleLogin} />}
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
