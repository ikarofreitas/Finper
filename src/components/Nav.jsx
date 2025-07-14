import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiPieChart as PieChart, FiMenu as Menu, FiX as X, FiUser as User } from 'react-icons/fi';

export default function Nav(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Verifica se está na página Dashboard
    const isDashboard = location.pathname === '/dashboard';

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
              <div 
                onClick={() => navigate('/')}
                className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center cursor-pointer"
              >
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <span 
                onClick={() => navigate('/')}
                className="text-xl font-bold text-gray-900 cursor-pointer"
              >
                Finper
              </span>
            </div>

            {/* Desktop Menu - Mostra apenas se não estiver no Dashboard */}
            {!isDashboard && (
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
            )}

            {/* Auth Buttons - Mostra apenas se não estiver no Dashboard */}
            {!isDashboard && (
              <div className="hidden md:flex items-center space-x-4 gap-3">
                <button 
                  onClick={() => navigate('/login')}
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium cursor-pointer"
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Cadastro
                </button>
              </div>
            )}

            {/* User Profile - Mostra apenas se estiver no Dashboard */}
            {isDashboard && (
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 cursor-default">Olá, Usuário</span>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            )}

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
                {/* Menu para páginas normais */}
                {!isDashboard && (
                  <>
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
                      <button 
                        onClick={() => navigate('/login')}
                        className="text-gray-600 hover:text-green-600 transition-colors font-medium text-left"
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => navigate('/register')}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit"
                      >
                        Cadastro
                      </button>
                    </div>
                  </>
                )}
                
                {/* Menu para Dashboard */}
                {isDashboard && (
                  <div className="flex items-center space-x-3 py-2">
                    <span className="text-sm text-gray-600">Olá, Usuário</span>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
      </div>
    )
}