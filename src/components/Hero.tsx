
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black pt-16 overflow-hidden">
      {/* Moving Particle Universe Background */}
      <div className="absolute inset-0">
        {/* Moving particles */}
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-slow opacity-60" style={{top: '10%', left: '10%'}}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float-medium opacity-80" style={{top: '15%', left: '80%'}}></div>
        <div className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float-fast opacity-70" style={{top: '20%', left: '30%'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-float-slow opacity-60" style={{top: '30%', left: '70%'}}></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float-medium opacity-50" style={{top: '40%', left: '20%'}}></div>
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float-fast opacity-70" style={{top: '50%', left: '90%'}}></div>
        <div className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float-slow opacity-60" style={{top: '60%', left: '15%'}}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float-medium opacity-80" style={{top: '70%', left: '60%'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-fast opacity-70" style={{top: '80%', left: '40%'}}></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full animate-float-slow opacity-60" style={{top: '85%', left: '85%'}}></div>
        
        {/* Floating constellation lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="constellation" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 0.5}} />
                <stop offset="100%" style={{stopColor: '#F59E0B', stopOpacity: 0.5}} />
              </linearGradient>
            </defs>
            <line x1="10%" y1="10%" x2="30%" y2="20%" stroke="url(#constellation)" strokeWidth="1" className="animate-pulse" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#constellation)" strokeWidth="1" className="animate-pulse animation-delay-2000" />
            <line x1="20%" y1="60%" x2="60%" y2="80%" stroke="url(#constellation)" strokeWidth="1" className="animate-pulse animation-delay-4000" />
          </svg>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-float-orbit"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-xl animate-float-orbit-reverse"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-xl animate-float-slow"></div>
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
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 px-8 py-3 text-lg hover:scale-105 transition-all duration-200 group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Watch Demo
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

          {/* Right Content - DevOps Vector Illustration */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Vector DevOps Illustration */}
              <div className="w-full h-[600px] bg-gradient-to-br from-blue-900/20 to-orange-900/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 400" className="w-full h-full p-8">
                  {/* DevOps Infinity Loop */}
                  <defs>
                    <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Infinity Symbol for DevOps */}
                  <path d="M100 200 Q150 100 200 200 T300 200 Q250 300 200 200 T100 200" 
                        fill="none" 
                        stroke="url(#devopsGradient)" 
                        strokeWidth="4" 
                        className="animate-pulse"
                        filter="url(#glow)" />
                  
                  {/* Dev Side */}
                  <circle cx="150" cy="200" r="60" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" strokeWidth="2" className="animate-pulse">
                    <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="150" y="185" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="bold">DEV</text>
                  <text x="150" y="205" textAnchor="middle" fill="#93C5FD" fontSize="10">Code</text>
                  <text x="150" y="220" textAnchor="middle" fill="#93C5FD" fontSize="10">Build</text>
                  
                  {/* Ops Side */}
                  <circle cx="250" cy="200" r="60" fill="rgba(245, 158, 11, 0.1)" stroke="#F59E0B" strokeWidth="2" className="animate-pulse animation-delay-2000">
                    <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <text x="250" y="185" textAnchor="middle" fill="#FBBF24" fontSize="14" fontWeight="bold">OPS</text>
                  <text x="250" y="205" textAnchor="middle" fill="#FCD34D" fontSize="10">Deploy</text>
                  <text x="250" y="220" textAnchor="middle" fill="#FCD34D" fontSize="10">Monitor</text>
                  
                  {/* Cloud Infrastructure */}
                  <g transform="translate(160, 80)">
                    <ellipse cx="40" cy="20" rx="30" ry="15" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" className="animate-float" />
                    <ellipse cx="25" cy="30" rx="20" ry="10" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" className="animate-float animation-delay-300" />
                    <ellipse cx="55" cy="30" rx="20" ry="10" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" className="animate-float animation-delay-600" />
                    <text x="40" y="25" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="bold">CLOUD</text>
                  </g>
                  
                  {/* Data Flow Arrows */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="url(#devopsGradient)" />
                    </marker>
                  </defs>
                  
                  <path d="M210 160 Q230 140 250 160" fill="none" stroke="url(#devopsGradient)" strokeWidth="2" markerEnd="url(#arrowhead)" className="animate-pulse animation-delay-1000" />
                  <path d="M190 240 Q170 260 150 240" fill="none" stroke="url(#devopsGradient)" strokeWidth="2" markerEnd="url(#arrowhead)" className="animate-pulse animation-delay-3000" />
                  
                  {/* Floating Data Points */}
                  <circle cx="120" cy="150" r="3" fill="#60A5FA" className="animate-bounce">
                    <animate attributeName="cy" values="150;130;150" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="280" cy="250" r="3" fill="#FBBF24" className="animate-bounce animation-delay-1000">
                    <animate attributeName="cy" values="250;230;250" dur="2s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="200" cy="100" r="3" fill="#A78BFA" className="animate-bounce animation-delay-2000">
                    <animate attributeName="cy" values="100;80;100" dur="2s" repeatCount="indefinite" begin="2s" />
                  </circle>
                </svg>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg animate-float text-sm font-medium">
                Kubernetes
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-2000 text-sm font-medium">
                Docker
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-4000 text-sm font-medium">
                AWS/Azure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
