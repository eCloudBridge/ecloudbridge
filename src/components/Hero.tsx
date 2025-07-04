
import { ArrowRight, Cloud, Shield, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600/10 rounded-full blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Bridge Your Business to the
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                Cloud Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
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
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg hover:scale-105 transition-all duration-200 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Watch Demo
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <Cloud className="h-8 w-8 text-orange-500 group-hover:animate-bounce" />
                <span className="text-gray-700 font-medium">Cloud Migration</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <Shield className="h-8 w-8 text-orange-600 group-hover:animate-bounce" />
                <span className="text-gray-700 font-medium">Security First</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <Zap className="h-8 w-8 text-orange-500 group-hover:animate-bounce" />
                <span className="text-gray-700 font-medium">DevOps Integration</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cloud Technology"
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-xl p-4 animate-bounce">
                <Cloud className="w-full h-full text-orange-500" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-xl p-3 animate-pulse">
                <Shield className="w-full h-full text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
