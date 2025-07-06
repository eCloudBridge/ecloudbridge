
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 overflow-hidden">
      {/* Infinite Symbol Background Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg 
          width="800" 
          height="400" 
          viewBox="0 0 800 400" 
          className="animate-infinite-flow"
        >
          <path
            d="M200,200 C100,100 100,300 200,200 C300,100 300,300 200,200 C300,300 500,300 600,200 C700,100 700,300 600,200 C500,300 300,300 200,200"
            fill="none"
            stroke="url(#infiniteGradient)"
            strokeWidth="3"
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
              Bridge Your Business to the
              <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Cloud Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Transform your digital infrastructure with our cutting-edge cloud and DevOps solutions. 
              Secure, scalable, and seamless services for your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToServices}
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 px-8 py-3 text-lg hover:scale-105 transition-all duration-200 group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
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
