
import { ArrowRight, Cloud, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Bridge Your Business to the
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Cloud Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your digital infrastructure with our cutting-edge cloud and DevOps solutions. 
            Secure, scalable, and seamless services for your business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg hover:scale-105 transition-all duration-200"
            >
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center space-x-3 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Cloud className="h-8 w-8 text-orange-500" />
              <span className="text-gray-700 font-medium">Cloud Migration</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Shield className="h-8 w-8 text-orange-600" />
              <span className="text-gray-700 font-medium">Security First</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Zap className="h-8 w-8 text-orange-500" />
              <span className="text-gray-700 font-medium">DevOps Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
