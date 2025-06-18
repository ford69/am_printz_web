import React, { useState } from 'react';
import { Menu, X,} from 'lucide-react';
import logo from '../assets/logo-amp.png'; // adjust path as needed


interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
{/* Logo */}
<div 
  className="flex items-center space-x-3 cursor-pointer group"
  onClick={() => setCurrentPage('home')}
>
  <div className=" group-hover:scale-110 transition-transform duration-300">
    <img
      src={logo}
      alt="AM PRINTS Logo"
      className="h-12 w-12 object-contain"
    />
  </div>
  <div className="flex flex-col">
    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
      AM PRINTS
    </span>
    <span className="text-xs text-black -mt-1">Professional Printing</span>
  </div>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-purple-600 ${
                  currentPage === item.id
                    ? 'text-purple-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Quote
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMenuOpen(false);
                }}
                className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg transition-all duration-300"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;