
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
      {/* Pipeline Background Animation */}
      <div className="absolute inset-0">
        {/* Animated Pipeline Lines */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pipeline-flow opacity-60"></div>
        <div className="absolute top-2/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pipeline-flow animation-delay-2000 opacity-60"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pipeline-flow animation-delay-4000 opacity-60"></div>
        
        {/* Pipeline Nodes */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 left-2/6 w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/4 left-3/6 w-4 h-4 bg-yellow-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/4 left-4/6 w-4 h-4 bg-orange-400 rounded-full animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/4 left-5/6 w-4 h-4 bg-red-400 rounded-full animate-pulse animation-delay-4000"></div>
        
        {/* Data Flow Particles */}
        <div className="absolute top-1/4 left-0 w-2 h-2 bg-cyan-300 rounded-full animate-data-flow opacity-80"></div>
        <div className="absolute top-2/4 left-0 w-2 h-2 bg-lime-300 rounded-full animate-data-flow animation-delay-3000 opacity-80"></div>
        <div className="absolute top-3/4 left-0 w-2 h-2 bg-pink-300 rounded-full animate-data-flow animation-delay-6000 opacity-80"></div>
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
