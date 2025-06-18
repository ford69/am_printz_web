import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo-amp.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl">
                <img
                  src={logo}
                  alt="AM PRINTZ Logo"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold">AM PRINTZ</span>
                <p className="text-xs text-gray-400">Professional Printing</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for all printing needs. From business cards to large format prints,
              we deliver quality and excellence in every project.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a> */}
              <a href="https://www.instagram.com/amprintshub/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
          
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Business Cards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Brochures & Flyers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Large Format Printing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Custom Merchandise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Digital Printing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">St. Lomnava<br />Accra, Sowutuom, Ghana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">0553728715 / 0500554113</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">am.printshub@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Mon-Fri: 9AM-5:30PM<br />Sat/Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AM PRINTZ. All rights reserved. Quality printing solutions since 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;