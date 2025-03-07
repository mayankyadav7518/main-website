import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble, FaLinkedin, FaPaperPlane, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Hospital Management System</li>
              <li>User Management System</li>
              <li>E-Commerce Website</li>
              <li>AI Chatbot</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Use Cases</h3>
            <ul className="space-y-2 text-sm">
              <li>Web-designers</li>
              <li>Marketers</li>
              <li>Small Business</li>
              <li>Website Builder</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Themes</li>
              <li>Hosting</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-sm">Gorakhpur, Uttar Pradesh<br/>India, 273001</p>
            <p className="text-sm mt-2">mayank7518@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-6">
          <div className="bg-gray-800 w-full py-4 flex justify-center gap-6 rounded-lg">
            <FaFacebook className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaGithub className="text-xl cursor-pointer" />
            <FaLinkedin className="text-xl cursor-pointer" />
          </div>
          <p className="text-xs text-gray-500 mt-4">© 2025 All Rights Reserved</p>
          <div className="flex space-x-4 text-xs text-gray-500 mt-2">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales and Refunds</span>
            <span>Legal</span>
            <span>Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
