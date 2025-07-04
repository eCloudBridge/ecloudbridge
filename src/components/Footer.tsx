
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/dc2764ac-81de-4147-94c0-0c35f1327f51.png" 
                alt="eCloudBridge Logo" 
                className="h-8 w-auto mr-2"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Bridging the gap between your business and the cloud. We provide comprehensive 
              cloud and DevOps solutions that drive digital transformation and business growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-6366477677</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@ecloudbridge.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>No.112, AKR Tech Park, "A" Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, Bengaluru, Karnataka, India – 560068</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Security & Compliance</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Data Management</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">DevOps Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} eCloudBridge. All rights reserved. Bridging your business to the cloud future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
