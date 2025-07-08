
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
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
              stroke="url(#productsInfiniteGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="productsInfiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Innovative solutions designed to transform your digital operations
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <Products />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
