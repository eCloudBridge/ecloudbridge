
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-gray-200' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Made bigger */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src="/dc2764ac-81de-4147-94c0-0c35f1327f51.png" 
              alt="eCloudBridge Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-600 hover:bg-white' 
                  : 'text-white hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/services"
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-600 hover:bg-white' 
                  : 'text-white hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              Services
            </Link>
            
            <Link 
              to="/products"
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-600 hover:bg-white' 
                  : 'text-white hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              Products
            </Link>
            
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-orange-600 hover:bg-white' 
                    : 'text-white hover:text-orange-400 hover:bg-white/10'
                }`}
              >
                About
              </button>
            ) : (
              <Link 
                to="/"
                className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-orange-600 hover:bg-white' 
                    : 'text-white hover:text-orange-400 hover:bg-white/10'
                }`}
              >
                About
              </Link>
            )}
            
            <Link 
              to="/case-studies"
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-600 hover:bg-white' 
                  : 'text-white hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              Case Studies
            </Link>
            
            {isHomePage ? (
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                Contact
              </Button>
            ) : (
              <Link to="/">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Contact
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link 
                to="/"
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/products"
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/"
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/case-studies"
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/"
                className="block w-full text-left px-3 py-2 text-orange-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
