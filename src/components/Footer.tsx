
import { Mail, Phone, MapPin, Cloud, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/dc2764ac-81de-4147-94c0-0c35f1327f51.png" 
                alt="eCloudBridge Logo" 
                className="h-12 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Bridging the gap between your business and the cloud. We provide comprehensive 
              cloud and DevOps solutions that drive digital transformation and business growth.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                <Github className="h-5 w-5" />
              </div>
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
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Cloud Migration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Security & Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">MLOps & Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">DevOps Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-orange-400">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-200 block">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} eCloudBridge. All rights reserved. Bridging your business to the cloud future.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <Cloud className="h-5 w-5" />
              <span className="text-sm font-medium">Powered by Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
