
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animation - FIXED ANIMATION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1800 900" 
            className="animate-infinite-flow w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M450,450 C225,225 225,675 450,450 C675,225 675,675 450,450 C675,675 1125,675 1350,450 C1575,225 1575,675 1350,450 C1125,675 675,675 450,450"
              fill="none"
              stroke="url(#aboutInfiniteGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="100 50"
            />
            <defs>
              <linearGradient id="aboutInfiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              About eCloudBridge
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Leading the cloud and DevOps revolution with innovative solutions and expert guidance
            </p>
          </div>
        </div>
      </section>

      <About />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
