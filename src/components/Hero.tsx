
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import RotatingImages from '@/components/RotatingImages';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100vh] lg:min-h-[85vh] 2xl:min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Infinite Symbol Background Animation - Made Bigger */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg 
          viewBox="0 0 1800 900" 
          className="animate-infinite-flow w-full h-full"
        >
          <path
            d="M450,450 C225,225 225,675 450,450 C675,225 675,675 450,450 C675,675 1125,675 1350,450 C1575,225 1575,675 1350,450 C1125,675 675,675 450,450"
            fill="none"
            stroke="url(#infiniteGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="infiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="25%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-orbit opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float-orbit-reverse opacity-60"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-2000 opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Enterprise
              <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                DevOps &amp; Cloud Solutions
              </span>
              for Seamless Integration
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              eCloudBridge delivers enterprise-grade <strong className="text-white">cloud migration</strong>, <strong className="text-white">Kubernetes</strong>, <strong className="text-white">SRE</strong>, and <strong className="text-white">DevSecOps</strong> services.
              Transform your infrastructure with our expert team in Bangalore, India.
            </p>
            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Trusted by 500+ clients across <strong className="text-gray-300">AWS</strong>, <strong className="text-gray-300">Azure</strong>, and <strong className="text-gray-300">GCP</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-200 shadow-xl w-full sm:w-auto"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 px-8 py-3 text-lg hover:scale-105 transition-all duration-200 group bg-transparent w-full sm:w-auto"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <Link to="/case-studies" className="p-4 hover:opacity-80 transition-opacity">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </Link>
              <Link to="/case-studies" className="p-4 hover:opacity-80 transition-opacity">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </Link>
              <Link to="/contact" className="p-4 hover:opacity-80 transition-opacity">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </Link>
            </div>

            {/* Quick nav links for SEO internal linking */}
            <nav aria-label="Quick links" className="flex flex-wrap gap-x-4 gap-y-2 mt-6 text-sm text-gray-400 justify-center lg:justify-start">
              <Link to="/services" className="hover:text-orange-400 transition-colors underline-offset-2 hover:underline">Cloud Migration</Link>
              <span className="text-gray-600">·</span>
              <Link to="/services" className="hover:text-orange-400 transition-colors underline-offset-2 hover:underline">Kubernetes</Link>
              <span className="text-gray-600">·</span>
              <Link to="/services" className="hover:text-orange-400 transition-colors underline-offset-2 hover:underline">DevSecOps</Link>
              <span className="text-gray-600">·</span>
              <Link to="/services" className="hover:text-orange-400 transition-colors underline-offset-2 hover:underline">SRE</Link>
              <span className="text-gray-600">·</span>
              <Link to="/process" className="hover:text-orange-400 transition-colors underline-offset-2 hover:underline">Our Process</Link>
              <span className="text-gray-600">·</span>
              <Link to="/blog" className="hover:text-orange-400 transition-colors underline-offset-2 hover:underline">Blog</Link>
            </nav>
          </div>

          {/* Right Content - Rotating Images */}
          <div className="relative animate-fade-in animation-delay-300">
            <RotatingImages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
