
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

          {/* Right Content - Three Professional DevOps Illustrations */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Main Container */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Illustration 1: AI-Powered DevOps */}
              <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-white/10 p-6 hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 400 200" className="w-full h-32">
                  <defs>
                    <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  
                  {/* AI Robots */}
                  <g transform="translate(50, 50)">
                    <rect x="0" y="20" width="40" height="60" rx="10" fill="url(#aiGradient)" className="animate-pulse" />
                    <circle cx="20" cy="40" r="15" fill="#1F2937" />
                    <circle cx="15" cy="37" r="3" fill="#06B6D4" className="animate-pulse" />
                    <circle cx="25" cy="37" r="3" fill="#06B6D4" className="animate-pulse animation-delay-300" />
                    <rect x="10" y="50" width="20" height="4" rx="2" fill="#374151" />
                  </g>
                  
                  <g transform="translate(250, 50)">
                    <rect x="0" y="20" width="40" height="60" rx="10" fill="url(#aiGradient)" className="animate-pulse animation-delay-1000" />
                    <circle cx="20" cy="40" r="15" fill="#1F2937" />
                    <circle cx="15" cy="37" r="3" fill="#8B5CF6" className="animate-pulse animation-delay-500" />
                    <circle cx="25" cy="37" r="3" fill="#8B5CF6" className="animate-pulse animation-delay-800" />
                    <rect x="10" y="50" width="20" height="4" rx="2" fill="#374151" />
                  </g>
                  
                  {/* Data Exchange */}
                  <path d="M90 70 Q200 50 250 70" fill="none" stroke="#06B6D4" strokeWidth="3" strokeDasharray="5,5" className="animate-pulse">
                    <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Infinity Symbol */}
                  <g transform="translate(150, 120)">
                    <path d="M0 0 Q20 -20 40 0 Q60 20 80 0 Q60 -20 40 0 Q20 20 0 0" fill="none" stroke="#F59E0B" strokeWidth="4" className="animate-pulse" />
                    <text x="40" y="30" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold">AI-Powered</text>
                  </g>
                </svg>
              </div>

              {/* Illustration 2: Professional Developer Workspace */}
              <div className="relative bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl backdrop-blur-sm border border-white/10 p-6 hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 400 200" className="w-full h-32">
                  <defs>
                    <linearGradient id="workspaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Developer Figure */}
                  <g transform="translate(280, 60)">
                    <circle cx="20" cy="20" r="15" fill="#F59E0B" />
                    <rect x="10" y="35" width="20" height="30" rx="5" fill="#EF4444" />
                    <rect x="5" y="45" width="10" height="20" rx="3" fill="#F59E0B" />
                    <rect x="25" y="45" width="10" height="20" rx="3" fill="#F59E0B" />
                    <rect x="12" y="65" width="6" height="15" rx="3" fill="#374151" />
                    <rect x="22" y="65" width="6" height="15" rx="3" fill="#374151" />
                  </g>
                  
                  {/* DevOps Monitor */}
                  <g transform="translate(50, 40)">
                    <rect x="0" y="0" width="80" height="60" rx="8" fill="#1F2937" stroke="url(#workspaceGradient)" strokeWidth="3" />
                    <text x="40" y="20" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">DevOps</text>
                    <rect x="10" y="25" width="60" height="3" rx="1" fill="#3B82F6" className="animate-pulse" />
                    <rect x="10" y="32" width="45" height="3" rx="1" fill="#10B981" className="animate-pulse animation-delay-500" />
                    <rect x="10" y="39" width="55" height="3" rx="1" fill="#F59E0B" className="animate-pulse animation-delay-1000" />
                  </g>
                  
                  {/* Code Window */}
                  <g transform="translate(150, 40)">
                    <rect x="0" y="0" width="80" height="60" rx="8" fill="#0F172A" stroke="#EF4444" strokeWidth="2" />
                    <circle cx="10" cy="10" r="3" fill="#EF4444" />
                    <circle cx="20" cy="10" r="3" fill="#F59E0B" />
                    <circle cx="30" cy="10" r="3" fill="#10B981" />
                    <text x="5" y="28" fill="#06B6D4" fontSize="8">&lt;/&gt;</text>
                    <text x="25" y="28" fill="#8B5CF6" fontSize="8">code</text>
                    <text x="5" y="38" fill="#10B981" fontSize="8">build</text>
                    <text x="5" y="48" fill="#F59E0B" fontSize="8">deploy</text>
                  </g>
                  
                  {/* Connecting Lines */}
                  <path d="M130 70 L150 70" stroke="#06B6D4" strokeWidth="2" markerEnd="url(#arrow)" className="animate-pulse" />
                  <path d="M230 70 L280 70" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" className="animate-pulse animation-delay-1000" />
                  
                  <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#06B6D4" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Illustration 3: 3D Pipeline Network */}
              <div className="relative bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl backdrop-blur-sm border border-white/10 p-6 hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 400 200" className="w-full h-32">
                  <defs>
                    <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  
                  {/* 3D Grid Effect */}
                  <g opacity="0.6">
                    <path d="M50 150 L350 150 M100 120 L300 120 M150 90 L250 90" stroke="#06B6D4" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M50 50 L50 150 M100 40 L100 140 M150 30 L150 130 M200 30 L200 130 M250 40 L250 140 M300 50 L300 150 M350 60 L350 160" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2,2" />
                  </g>
                  
                  {/* Central Code Symbol */}
                  <g transform="translate(175, 75)">
                    <circle cx="25" cy="25" r="30" fill="none" stroke="url(#networkGradient)" strokeWidth="4" className="animate-pulse" />
                    <circle cx="25" cy="25" r="20" fill="rgba(6, 182, 212, 0.2)" className="animate-pulse animation-delay-500" />
                    <text x="25" y="30" textAnchor="middle" fill="#06B6D4" fontSize="16" fontWeight="bold">&lt;/&gt;</text>
                  </g>
                  
                  {/* Hexagonal Nodes */}
                  <g transform="translate(80, 50)">
                    <polygon points="20,5 35,15 35,35 20,45 5,35 5,15" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" strokeWidth="2" className="animate-pulse" />
                    <circle cx="20" cy="25" r="3" fill="#10B981" />
                  </g>
                  
                  <g transform="translate(280, 80)">
                    <polygon points="20,5 35,15 35,35 20,45 5,35 5,15" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" strokeWidth="2" className="animate-pulse animation-delay-1000" />
                    <rect x="15" y="20" width="10" height="10" rx="2" fill="#8B5CF6" />
                  </g>
                  
                  <g transform="translate(120, 120)">
                    <polygon points="20,5 35,15 35,35 20,45 5,35 5,15" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" strokeWidth="2" className="animate-pulse animation-delay-2000" />
                    <circle cx="20" cy="25" r="5" fill="none" stroke="#F59E0B" strokeWidth="2" />
                    <circle cx="20" cy="25" r="2" fill="#F59E0B" />
                  </g>
                  
                  {/* Connection Lines */}
                  <path d="M115 75 L175 90" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse">
                    <animate attributeName="stroke-dashoffset" values="0;-6;0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M225 100 L280 105" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse animation-delay-500">
                    <animate attributeName="stroke-dashoffset" values="0;-6;0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M190 110 L155 135" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3,3" className="animate-pulse animation-delay-1000">
                    <animate attributeName="stroke-dashoffset" values="0;-6;0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
