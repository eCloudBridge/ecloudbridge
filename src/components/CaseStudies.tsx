
import { ArrowRight, TrendingUp, Users, Clock, Star, Award, Target, Zap } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    company: "TechCorp Solutions",
    industry: "Technology",
    challenge: "Legacy infrastructure migration",
    solution: "Cloud migration with zero downtime",
    results: ["40% cost reduction", "99.9% uptime achieved", "50% faster deployment"],
    metrics: { icon: TrendingUp, value: "300%", label: "ROI Increase" }
  },
  {
    id: 2,
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    company: "DataFlow Systems",
    industry: "Finance",
    challenge: "Scalability and security concerns",
    solution: "DevOps implementation with automated security",
    results: ["60% faster releases", "Zero security incidents", "Automated compliance"],
    metrics: { icon: Users, value: "500+", label: "Users Onboarded" }
  },
  {
    id: 3,
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    company: "InnovateLab",
    industry: "Healthcare",
    challenge: "Data management and analytics",
    solution: "MLOps platform with real-time analytics",
    results: ["Real-time insights", "95% data accuracy", "Improved patient care"],
    metrics: { icon: Clock, value: "24/7", label: "Monitoring" }
  },
  {
    id: 4,
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    company: "CloudScale Inc",
    industry: "E-commerce",
    challenge: "Peak traffic handling",
    solution: "Auto-scaling cloud infrastructure",
    results: ["Zero downtime", "200% traffic handled", "Cost optimized"],
    metrics: { icon: Star, value: "99.99%", label: "Uptime" }
  },
  {
    id: 5,
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop",
    company: "SecureNet Pro",
    industry: "Cybersecurity",
    challenge: "Compliance automation",
    solution: "Automated security compliance pipeline",
    results: ["100% compliance", "80% time saved", "Zero violations"],
    metrics: { icon: Award, value: "100%", label: "Compliance" }
  },
  {
    id: 6,
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
    company: "DevOps Masters",
    industry: "Software",
    challenge: "CI/CD optimization",
    solution: "Modern DevOps pipeline implementation",
    results: ["90% faster deployments", "Reduced errors", "Team productivity up"],
    metrics: { icon: Target, value: "90%", label: "Faster Deploy" }
  },
  {
    id: 7,
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    company: "AgileFlow",
    industry: "Fintech",
    challenge: "Microservices architecture",
    solution: "Containerized microservices with Kubernetes",
    results: ["Improved scalability", "Better fault tolerance", "Faster recovery"],
    metrics: { icon: Zap, value: "5x", label: "Performance" }
  },
  {
    id: 8,
    logo: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=300&fit=crop",
    company: "CloudNative Co",
    industry: "Healthcare",
    challenge: "Multi-cloud strategy",
    solution: "Cloud-native architecture implementation",
    results: ["Vendor independence", "Cost optimization", "Better reliability"],
    metrics: { icon: Users, value: "10K+", label: "Daily Users" }
  }
];

const CaseStudies = () => {
  const handleCaseStudyClick = (caseStudyId: number) => {
    console.log(`Navigating to case study ${caseStudyId}`);
  };

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with our cloud solutions
          </p>
        </div>

        {/* Single Marquee Line */}
        <div className="relative">
          <div className="flex animate-marquee space-x-8">
            {[...caseStudies, ...caseStudies].map((study, index) => (
              <div 
                key={`${study.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
                onClick={() => handleCaseStudyClick(study.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.logo} 
                    alt={`${study.company} case study`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                      {study.industry}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <study.metrics.icon className="h-5 w-5 text-orange-500" />
                      <div>
                        <div className="text-lg font-bold text-gray-900">{study.metrics.value}</div>
                        <div className="text-xs text-gray-600">{study.metrics.label}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
