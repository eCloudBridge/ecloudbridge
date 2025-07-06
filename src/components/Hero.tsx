
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
      {/* Professional Space Background */}
      <div className="absolute inset-0">
        {/* Animated particles */}
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
        
        {/* Clear Nebula Effects */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-pink-500/30 via-purple-600/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-nebula-pulse opacity-90"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-radial from-purple-400/35 via-pink-500/25 via-cyan-400/10 to-transparent rounded-full blur-2xl animate-nebula-pulse animation-delay-2000 opacity-85"></div>
        <div className="absolute bottom-1/3 right-1/5 w-[500px] h-[500px] bg-gradient-radial from-purple-600/25 via-pink-400/20 via-blue-400/15 to-transparent rounded-full blur-3xl animate-nebula-pulse animation-delay-4000 opacity-80"></div>
        <div className="absolute top-1/2 right-1/8 w-72 h-72 bg-gradient-radial from-cyan-400/40 via-purple-500/30 via-pink-300/15 to-transparent rounded-full blur-xl animate-nebula-pulse animation-delay-6000 opacity-95"></div>
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-purple-500/30 via-pink-600/25 via-orange-400/10 to-transparent rounded-full blur-2xl animate-nebula-pulse animation-delay-8000 opacity-90"></div>
        
        {/* Diagonal Shooting Stars */}
        <div className="absolute top-1/4 -left-20 w-2 h-2 bg-white rounded-full animate-shooting-star opacity-90">
          <div className="absolute w-40 h-0.5 bg-gradient-to-r from-white via-blue-200 to-transparent -rotate-45 -translate-x-2 -translate-y-1"></div>
        </div>
        <div className="absolute top-3/5 -left-20 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-shooting-star animation-delay-8000 opacity-80">
          <div className="absolute w-32 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-transparent -rotate-45 -translate-x-2 -translate-y-1"></div>
        </div>
        <div className="absolute top-4/5 -left-20 w-1 h-1 bg-orange-300 rounded-full animate-shooting-star animation-delay-12000 opacity-70">
          <div className="absolute w-24 h-0.5 bg-gradient-to-r from-orange-300 via-yellow-300 to-transparent -rotate-45 -translate-x-2 -translate-y-1"></div>
        </div>
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

          {/* Right Content - Professional DevOps Vector */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Professional DevOps Vector Illustration */}
              <div className="w-full max-w-[500px] h-[500px] bg-gradient-to-br from-blue-900/20 to-orange-900/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden mx-auto">
                <svg viewBox="0 0 500 500" className="w-full h-full p-6">
                  <defs>
                    <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="opsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <filter id="professionalGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Central DevOps Pipeline - Professional Design */}
                  <rect x="150" y="220" width="200" height="60" rx="30" 
                        fill="url(#primaryGradient)" 
                        opacity="0.9" 
                        filter="url(#professionalGlow)"
                        className="animate-pulse">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <text x="250" y="255" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">DevOps Pipeline</text>
                  
                  {/* Development Phase */}
                  <g transform="translate(50, 120)">
                    <circle cx="50" cy="50" r="45" fill="url(#devGradient)" opacity="0.8" className="animate-pulse">
                      <animate attributeName="r" values="45;50;45" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <text x="50" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">DEV</text>
                    <text x="50" y="55" textAnchor="middle" fill="#E5E7EB" fontSize="12">Code</text>
                    <text x="50" y="70" textAnchor="middle" fill="#E5E7EB" fontSize="12">Build</text>
                  </g>
                  
                  {/* Operations Phase */}
                  <g transform="translate(350, 120)">
                    <circle cx="50" cy="50" r="45" fill="url(#opsGradient)" opacity="0.8" className="animate-pulse animation-delay-2000">
                      <animate attributeName="r" values="45;50;45" dur="4s" repeatCount="indefinite" begin="2s" />
                    </circle>
                    <text x="50" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">OPS</text>
                    <text x="50" y="55" textAnchor="middle" fill="#E5E7EB" fontSize="12">Deploy</text>
                    <text x="50" y="70" textAnchor="middle" fill="#E5E7EB" fontSize="12">Monitor</text>
                  </g>
                  
                  {/* Cloud Infrastructure - Professional Clouds */}
                  <g transform="translate(180, 50)">
                    <ellipse cx="70" cy="30" rx="60" ry="25" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" strokeWidth="3" className="animate-float" />
                    <circle cx="30" cy="20" r="22" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" strokeWidth="3" className="animate-float animation-delay-300" />
                    <circle cx="70" cy="15" r="28" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" strokeWidth="3" className="animate-float animation-delay-600" />
                    <circle cx="110" cy="25" r="20" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" strokeWidth="3" className="animate-float animation-delay-900" />
                    <text x="70" y="40" textAnchor="middle" fill="#A78BFA" fontSize="18" fontWeight="bold">CLOUD</text>
                  </g>
                  
                  {/* CI/CD Pipeline Arrows */}
                  <defs>
                    <marker id="professionalArrow" markerWidth="12" markerHeight="10" refX="10" refY="5" orient="auto">
                      <polygon points="0 0, 12 5, 0 10" fill="url(#primaryGradient)" />
                    </marker>
                  </defs>
                  
                  <path d="M140 170 Q175 190 210 220" fill="none" stroke="url(#primaryGradient)" strokeWidth="4" markerEnd="url(#professionalArrow)" className="animate-pulse animation-delay-1000" />
                  <path d="M290 220 Q325 190 360 170" fill="none" stroke="url(#primaryGradient)" strokeWidth="4" markerEnd="url(#professionalArrow)" className="animate-pulse animation-delay-3000" />
                  
                  {/* Technology Stack Icons */}
                  <g transform="translate(100, 350)">
                    <rect x="0" y="0" width="80" height="40" rx="8" fill="rgba(34, 197, 94, 0.3)" stroke="#22C55E" strokeWidth="3" className="animate-pulse" />
                    <text x="40" y="26" textAnchor="middle" fill="#4ADE80" fontSize="14" fontWeight="bold">Docker</text>
                  </g>
                  
                  <g transform="translate(210, 350)">
                    <rect x="0" y="0" width="80" height="40" rx="8" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" strokeWidth="3" className="animate-pulse animation-delay-1500" />
                    <text x="40" y="26" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="bold">K8s</text>
                  </g>
                  
                  <g transform="translate(320, 350)">
                    <rect x="0" y="0" width="80" height="40" rx="8" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" strokeWidth="3" className="animate-pulse animation-delay-3000" />
                    <text x="40" y="26" textAnchor="middle" fill="#FBBF24" fontSize="14" fontWeight="bold">AWS</text>
                  </g>
                  
                  {/* Data Flow Indicators */}
                  <circle cx="120" cy="300" r="6" fill="#60A5FA" className="animate-bounce">
                    <animate attributeName="cy" values="300;280;300" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="380" cy="300" r="6" fill="#FBBF24" className="animate-bounce animation-delay-1000">
                    <animate attributeName="cy" values="300;280;300" dur="2s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  
                  {/* Performance Metrics */}
                  <g transform="translate(50, 300)">
                    <rect x="0" y="0" width="60" height="30" rx="15" fill="rgba(239, 68, 68, 0.3)" stroke="#EF4444" strokeWidth="2" className="animate-pulse animation-delay-2000" />
                    <text x="30" y="20" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">Metrics</text>
                  </g>
                </svg>
              </div>
              
              {/* Professional Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-lg shadow-lg animate-float text-xs font-medium">
                Kubernetes
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-lg shadow-lg animate-float animation-delay-2000 text-xs font-medium">
                Docker
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-lg shadow-lg animate-float animation-delay-4000 text-xs font-medium">
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
