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
        
        {/* Clear Nebula Effects - Multiple layers for realistic appearance */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-pink-500/30 via-purple-600/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-nebula-pulse opacity-90"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-radial from-purple-400/35 via-pink-500/25 via-cyan-400/10 to-transparent rounded-full blur-2xl animate-nebula-pulse animation-delay-2000 opacity-85"></div>
        <div className="absolute bottom-1/3 right-1/5 w-[500px] h-[500px] bg-gradient-radial from-purple-600/25 via-pink-400/20 via-blue-400/15 to-transparent rounded-full blur-3xl animate-nebula-pulse animation-delay-4000 opacity-80"></div>
        <div className="absolute top-1/2 right-1/8 w-72 h-72 bg-gradient-radial from-cyan-400/40 via-purple-500/30 via-pink-300/15 to-transparent rounded-full blur-xl animate-nebula-pulse animation-delay-6000 opacity-95"></div>
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-purple-500/30 via-pink-600/25 via-orange-400/10 to-transparent rounded-full blur-2xl animate-nebula-pulse animation-delay-8000 opacity-90"></div>
        
        {/* Additional nebula layers for more depth and clarity */}
        <div className="absolute top-1/6 right-1/3 w-64 h-64 bg-gradient-radial from-white/20 via-pink-300/25 via-purple-400/15 to-transparent rounded-full blur-xl animate-nebula-pulse animation-delay-3000 opacity-88"></div>
        <div className="absolute bottom-1/2 left-1/8 w-80 h-80 bg-gradient-radial from-purple-300/35 via-cyan-400/20 via-pink-400/15 to-transparent rounded-full blur-2xl animate-nebula-pulse animation-delay-5000 opacity-85"></div>
        <div className="absolute top-3/4 right-1/2 w-56 h-56 bg-gradient-radial from-orange-400/30 via-pink-500/25 via-purple-300/10 to-transparent rounded-full blur-xl animate-nebula-pulse animation-delay-7000 opacity-80"></div>
        
        {/* Proper Shooting Stars - Diagonal streaks */}
        <div className="absolute top-1/4 -left-20 w-2 h-2 bg-white rounded-full animate-shooting-star opacity-90">
          <div className="absolute w-40 h-0.5 bg-gradient-to-r from-white via-blue-200 to-transparent -rotate-45 -translate-x-2 -translate-y-1"></div>
        </div>
        <div className="absolute top-3/5 -left-20 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-shooting-star animation-delay-8000 opacity-80">
          <div className="absolute w-32 h-0.5 bg-gradient-to-r from-cyan-300 via-blue-300 to-transparent -rotate-45 -translate-x-2 -translate-y-1"></div>
        </div>
        <div className="absolute top-4/5 -left-20 w-1 h-1 bg-orange-300 rounded-full animate-shooting-star animation-delay-12000 opacity-70">
          <div className="absolute w-24 h-0.5 bg-gradient-to-r from-orange-300 via-yellow-300 to-transparent -rotate-45 -translate-x-2 -translate-y-1"></div>
        </div>
        
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

          {/* Right Content - Enhanced DevOps Vector Illustration */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Vector DevOps Illustration - Proper aspect ratio */}
              <div className="w-full max-w-[600px] h-[600px] bg-gradient-to-br from-blue-900/20 to-orange-900/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden mx-auto">
                <svg viewBox="0 0 600 600" className="w-full h-full p-8">
                  {/* DevOps Infinity Loop */}
                  <defs>
                    <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Infinity Symbol for DevOps - Better proportioned */}
                  <path d="M150 300 Q210 180 270 300 T390 300 Q330 420 270 300 T150 300" 
                        fill="none" 
                        stroke="url(#devopsGradient)" 
                        strokeWidth="10" 
                        className="animate-pulse"
                        filter="url(#glow)" />
                  
                  {/* Dev Side - Larger content */}
                  <circle cx="210" cy="300" r="100" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" strokeWidth="5" className="animate-pulse">
                    <animate attributeName="r" values="100;110;100" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="210" y="280" textAnchor="middle" fill="#60A5FA" fontSize="28" fontWeight="bold">DEV</text>
                  <text x="210" y="310" textAnchor="middle" fill="#93C5FD" fontSize="20">Code</text>
                  <text x="210" y="335" textAnchor="middle" fill="#93C5FD" fontSize="20">Build</text>
                  
                  {/* Ops Side - Larger content */}
                  <circle cx="330" cy="300" r="100" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="5" className="animate-pulse animation-delay-2000">
                    <animate attributeName="r" values="100;110;100" dur="3s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <text x="330" y="280" textAnchor="middle" fill="#FBBF24" fontSize="28" fontWeight="bold">OPS</text>
                  <text x="330" y="310" textAnchor="middle" fill="#FCD34D" fontSize="20">Deploy</text>
                  <text x="330" y="335" textAnchor="middle" fill="#FCD34D" fontSize="20">Monitor</text>
                  
                  {/* Enhanced Cloud Infrastructure - Realistic Cloud Shapes */}
                  <g transform="translate(180, 100)">
                    {/* Main Cloud - Proper cloud shape */}
                    <ellipse cx="90" cy="40" rx="70" ry="30" fill="rgba(139, 92, 246, 0.25)" stroke="#8B5CF6" strokeWidth="4" className="animate-float" />
                    {/* Cloud bumps for realistic shape */}
                    <circle cx="40" cy="30" r="28" fill="rgba(139, 92, 246, 0.25)" stroke="#8B5CF6" strokeWidth="4" className="animate-float animation-delay-300" />
                    <circle cx="90" cy="20" r="35" fill="rgba(139, 92, 246, 0.25)" stroke="#8B5CF6" strokeWidth="4" className="animate-float animation-delay-600" />
                    <circle cx="140" cy="30" r="25" fill="rgba(139, 92, 246, 0.25)" stroke="#8B5CF6" strokeWidth="4" className="animate-float animation-delay-900" />
                    <circle cx="65" cy="35" r="20" fill="rgba(139, 92, 246, 0.25)" stroke="#8B5CF6" strokeWidth="4" className="animate-float animation-delay-1200" />
                    <circle cx="115" cy="35" r="18" fill="rgba(139, 92, 246, 0.25)" stroke="#8B5CF6" strokeWidth="4" className="animate-float animation-delay-1500" />
                    <text x="90" y="50" textAnchor="middle" fill="#A78BFA" fontSize="22" fontWeight="bold">CLOUD</text>
                  </g>
                  
                  {/* Secondary Cloud - Realistic shape */}
                  <g transform="translate(350, 450)">
                    <ellipse cx="60" cy="30" rx="55" ry="25" fill="rgba(59, 130, 246, 0.2)" stroke="#60A5FA" strokeWidth="4" className="animate-float animation-delay-1500" />
                    <circle cx="25" cy="22" r="22" fill="rgba(59, 130, 246, 0.2)" stroke="#60A5FA" strokeWidth="4" className="animate-float animation-delay-1800" />
                    <circle cx="60" cy="15" r="28" fill="rgba(59, 130, 246, 0.2)" stroke="#60A5FA" strokeWidth="4" className="animate-float animation-delay-2100" />
                    <circle cx="95" cy="25" r="20" fill="rgba(59, 130, 246, 0.2)" stroke="#60A5FA" strokeWidth="4" className="animate-float animation-delay-2400" />
                    <circle cx="45" cy="28" r="16" fill="rgba(59, 130, 246, 0.2)" stroke="#60A5FA" strokeWidth="4" className="animate-float animation-delay-2700" />
                  </g>
                  
                  {/* Third Cloud - Realistic shape */}
                  <g transform="translate(80, 470)">
                    <ellipse cx="45" cy="25" rx="45" ry="20" fill="rgba(245, 158, 11, 0.2)" stroke="#FBBF24" strokeWidth="4" className="animate-float animation-delay-2700" />
                    <circle cx="18" cy="18" r="18" fill="rgba(245, 158, 11, 0.2)" stroke="#FBBF24" strokeWidth="4" className="animate-float animation-delay-3000" />
                    <circle cx="45" cy="12" r="22" fill="rgba(245, 158, 11, 0.2)" stroke="#FBBF24" strokeWidth="4" className="animate-float animation-delay-3300" />
                    <circle cx="72" cy="20" r="16" fill="rgba(245, 158, 11, 0.2)" stroke="#FBBF24" strokeWidth="4" className="animate-float animation-delay-3600" />
                    <circle cx="35" cy="22" r="14" fill="rgba(245, 158, 11, 0.2)" stroke="#FBBF24" strokeWidth="4" className="animate-float animation-delay-3900" />
                  </g>
                  
                  {/* Data Flow Arrows */}
                  <defs>
                    <marker id="arrowhead" markerWidth="18" markerHeight="15" refX="15" refY="7.5" orient="auto">
                      <polygon points="0 0, 18 7.5, 0 15" fill="url(#devopsGradient)" />
                    </marker>
                  </defs>
                  
                  <path d="M290 240 Q320 210 350 240" fill="none" stroke="url(#devopsGradient)" strokeWidth="5" markerEnd="url(#arrowhead)" className="animate-pulse animation-delay-1000" />
                  <path d="M250 360 Q220 390 190 360" fill="none" stroke="url(#devopsGradient)" strokeWidth="5" markerEnd="url(#arrowhead)" className="animate-pulse animation-delay-3000" />
                  
                  {/* Floating Data Points */}
                  <circle cx="140" cy="220" r="8" fill="#60A5FA" className="animate-bounce">
                    <animate attributeName="cy" values="220;190;220" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="400" cy="380" r="8" fill="#FBBF24" className="animate-bounce animation-delay-1000">
                    <animate attributeName="cy" values="380;350;380" dur="2s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="270" cy="120" r="8" fill="#A78BFA" className="animate-bounce animation-delay-2000">
                    <animate attributeName="cy" values="120;90;120" dur="2s" repeatCount="indefinite" begin="2s" />
                  </circle>
                  
                  {/* Additional DevOps Elements */}
                  <g transform="translate(430, 230)">
                    <rect x="0" y="0" width="60" height="42" rx="10" fill="rgba(34, 197, 94, 0.25)" stroke="#22C55E" strokeWidth="4" className="animate-pulse" />
                    <text x="30" y="28" textAnchor="middle" fill="#4ADE80" fontSize="18" fontWeight="bold">CI/CD</text>
                  </g>
                  
                  <g transform="translate(50, 130)">
                    <rect x="0" y="0" width="55" height="35" rx="8" fill="rgba(239, 68, 68, 0.25)" stroke="#EF4444" strokeWidth="4" className="animate-pulse animation-delay-1500" />
                    <text x="27.5" y="23" textAnchor="middle" fill="#F87171" fontSize="16" fontWeight="bold">API</text>
                  </g>
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
