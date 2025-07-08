import { useState } from "react";
import { FiPieChart as PieChart, FiMenu as Menu, FiX as X } from 'react-icons/fi';

export default function Nav(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      };

    return(
        <div className="bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <a href="/">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              </a>
              <a href="/">
              <span className="text-xl font-bold text-gray-900 cursor-default cursor-pointer">FinanceApp</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
              >
                Contato
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4 gap-3">
                <a href="/login">
              <button className="text-gray-600 hover:text-green-600 transition-colors font-medium cursor-pointer">
                Login
              </button>
              </a>
              <a href="/cadastro">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer">
                Cadastro
              </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 hover:text-green-600 transition-colors text-left"
                >
                  Recursos
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 hover:text-green-600 transition-colors text-left"
                >
                  Depoimentos
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-green-600 transition-colors text-left"
                >
                  Contato
                </button>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <button className="text-gray-600 hover:text-green-600 transition-colors font-medium text-left">
                    Login
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
                    Cadastro
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      </div>
    )
}