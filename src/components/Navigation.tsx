
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

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
    // Always scroll to top first when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (location.pathname === '/') {
      // If we're on home page, scroll to specific section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    if (sectionId && location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-transparent backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer" onClick={() => handleNavClick('/')}>
            <img 
              src="/dc2764ac-81de-4147-94c0-0c35f1327f51.png" 
              alt="eCloudBridge Logo" 
              className="h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              onClick={() => handleNavClick('/')}
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/services"
              onClick={() => handleNavClick('/services', 'services')}
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}
            >
              Services
            </Link>
            
            <Link 
              to="/products"
              onClick={() => handleNavClick('/products', 'products')}
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}
            >
              Products
            </Link>
            
            <Link 
              to="/about"
              onClick={() => handleNavClick('/about', 'about')}
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/case-studies"
              onClick={() => handleNavClick('/case-studies', 'case-studies')}
              className={`font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}
            >
              Case Studies
            </Link>
            
            {/* Language Selector */}
            <LanguageSelector />
            
            <Link to="/contact" onClick={() => handleNavClick('/contact')}>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-800 hover:bg-orange-50' : 'text-white hover:bg-white/10'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
              <Link 
                to="/"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-50 font-medium rounded-md"
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-50 font-medium rounded-md"
                onClick={() => handleNavClick('/services', 'services')}
              >
                Services
              </Link>
              <Link 
                to="/products"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-50 font-medium rounded-md"
                onClick={() => handleNavClick('/products', 'products')}
              >
                Products
              </Link>
              <Link 
                to="/about"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-50 font-medium rounded-md"
                onClick={() => handleNavClick('/about', 'about')}
              >
                About
              </Link>
              <Link 
                to="/case-studies"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-50 font-medium rounded-md"
                onClick={() => handleNavClick('/case-studies', 'case-studies')}
              >
                Case Studies
              </Link>
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              <Link 
                to="/contact"
                className="block w-full text-left px-3 py-2 text-orange-600 font-medium hover:bg-orange-50 rounded-md"
                onClick={() => handleNavClick('/contact')}
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
