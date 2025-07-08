
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <svg 
            width="1800" 
            height="900" 
            viewBox="0 0 1800 900" 
            className="animate-infinite-flow"
          >
            <path
              d="M450,450 C225,225 225,675 450,450 C675,225 675,675 450,450 C675,675 1125,675 1350,450 C1575,225 1575,675 1350,450 C1125,675 675,675 450,450"
              fill="none"
              stroke="url(#privacyInfiniteGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="privacyInfiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Your privacy and data protection are our top priorities
            </p>
          </div>
        </div>
      </section>
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at hello@ecloudbridge.com
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
