
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Here you would typically handle the newsletter subscription
  };

  const handleServiceClick = (serviceName: string) => {
    const serviceId = serviceName.toLowerCase().replace(/\s+/g, '-').replace('&', 'and');
    navigate('/services');
    // Use setTimeout to ensure the page has loaded before scrolling
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
      {/* Infinite Symbol Background Animation - Added to Footer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <svg 
          width="1400" 
          height="700" 
          viewBox="0 0 1400 700" 
          className="animate-infinite-flow"
        >
          <path
            d="M350,350 C175,175 175,525 350,350 C525,175 525,525 350,350 C525,525 875,525 1050,350 C1225,175 1225,525 1050,350 C875,525 525,525 350,350"
            fill="none"
            stroke="url(#footerInfiniteGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="footerInfiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="25%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Moving Particle Universe Background */}
      <div className="absolute inset-0">
        {/* Moving particles */}
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-slow opacity-60" style={{top: '20%', left: '15%'}}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float-medium opacity-80" style={{top: '25%', left: '85%'}}></div>
        <div className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float-fast opacity-70" style={{top: '40%', left: '25%'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-float-slow opacity-60" style={{top: '60%', left: '75%'}}></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float-medium opacity-50" style={{top: '80%', left: '10%'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float-fast opacity-70" style={{top: '30%', left: '95%'}}></div>
        <div className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float-slow opacity-60" style={{top: '70%', left: '50%'}}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float-medium opacity-80" style={{top: '10%', left: '60%'}}></div>
        
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="footerConstellation" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#F59E0B', stopOpacity: 0.3}} />
              </linearGradient>
            </defs>
            <line x1="15%" y1="20%" x2="25%" y2="40%" stroke="url(#footerConstellation)" strokeWidth="1" className="animate-pulse" />
            <line x1="75%" y1="60%" x2="85%" y2="80%" stroke="url(#footerConstellation)" strokeWidth="1" className="animate-pulse animation-delay-2000" />
            <line x1="50%" y1="10%" x2="60%" y2="30%" stroke="url(#footerConstellation)" strokeWidth="1" className="animate-pulse animation-delay-4000" />
          </svg>
        </div>
        
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-float-orbit"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-xl animate-float-orbit-reverse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/dc2764ac-81de-4147-94c0-0c35f1327f51.png" 
                alt="eCloudBridge Logo" 
                className="h-12 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Bridging the gap between your business and the cloud. We provide comprehensive 
              cloud and DevOps solutions that drive digital transformation and business growth.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-gray-300 border border-gray-600 focus:border-orange-400 focus:outline-none flex-1"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                <Twitter className="h-5 w-5" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                <Phone className="h-5 w-5 mr-3 text-orange-400" />
                <span>+91-6366477677</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5 mr-3 text-orange-400" />
                <span>hello@ecloudbridge.com</span>
              </div>
              <div className="flex items-start text-gray-300 hover:text-orange-400 transition-colors">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-orange-400" />
                <span>No.112, AKR Tech Park, "A" Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, Bengaluru, Karnataka, India – 560068</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleServiceClick('Cloud Migration')}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block text-left"
                >
                  Cloud Migration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('Security & Compliance')}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block text-left"
                >
                  Security & Compliance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('MLOps & Data Analytics')}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block text-left"
                >
                  MLOps & Analytics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('DevOps Services')}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block text-left"
                >
                  DevOps Services
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Products</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-center">
              © {currentYear} eCloudBridge. All rights reserved. Bridging your business to the cloud future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
