import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Made bigger */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src="/lovable-uploads/dc2764ac-81de-4147-94c0-0c35f1327f51.png" 
              alt="eCloudBridge Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              Case Studies
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-orange-600 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
