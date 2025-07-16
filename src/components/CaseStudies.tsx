
import { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Clock, Star, Award, Target, Zap } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const caseStudies = [
  {
    id: 1,
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    company: "TechCorp Solutions",
    industry: "Technology",
    challenge: "Legacy infrastructure migration",
    solution: "Cloud migration with zero downtime",
    results: ["40% cost reduction", "99.9% uptime achieved", "50% faster deployment"],
    metrics: { icon: TrendingUp, value: "300%", label: "ROI Increase" },
    detailedDescription: "We implemented a comprehensive cloud migration strategy using containerization and microservices architecture. The migration was executed in phases to ensure zero downtime during the transition.",
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Prometheus"],
    timeline: "6 months",
    teamSize: "8 engineers"
  },
  {
    id: 2,
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    company: "DataFlow Systems",
    industry: "Finance",
    challenge: "Scalability and security concerns",
    solution: "DevOps implementation with automated security",
    results: ["60% faster releases", "Zero security incidents", "Automated compliance"],
    metrics: { icon: Users, value: "500+", label: "Users Onboarded" },
    detailedDescription: "Built a secure CI/CD pipeline with automated security scanning, compliance checks, and infrastructure as code. Implemented zero-trust security model with continuous monitoring.",
    technologies: ["GitLab CI/CD", "Vault", "Ansible", "Sonar", "OWASP ZAP", "Grafana"],
    timeline: "4 months",
    teamSize: "6 engineers"
  },
  {
    id: 3,
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    company: "InnovateLab",
    industry: "Healthcare",
    challenge: "Data management and analytics",
    solution: "MLOps platform with real-time analytics",
    results: ["Real-time insights", "95% data accuracy", "Improved patient care"],
    metrics: { icon: Clock, value: "24/7", label: "Monitoring" },
    detailedDescription: "Developed a comprehensive MLOps platform for real-time patient data analysis. Implemented automated model training, validation, and deployment with continuous monitoring for data drift.",
    technologies: ["Python", "MLflow", "Apache Kafka", "Elasticsearch", "Kibana", "TensorFlow"],
    timeline: "8 months",
    teamSize: "10 engineers"
  },
  {
    id: 4,
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    company: "CloudScale Inc",
    industry: "E-commerce",
    challenge: "Peak traffic handling",
    solution: "Auto-scaling cloud infrastructure",
    results: ["Zero downtime", "200% traffic handled", "Cost optimized"],
    metrics: { icon: Star, value: "99.99%", label: "Uptime" },
    detailedDescription: "Implemented intelligent auto-scaling infrastructure that automatically adjusts resources based on traffic patterns. Used predictive analytics to anticipate traffic spikes and pre-scale resources.",
    technologies: ["AWS EKS", "Istio", "Prometheus", "Grafana", "Fluentd", "Redis"],
    timeline: "5 months",
    teamSize: "7 engineers"
  },
  {
    id: 5,
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop",
    company: "SecureNet Pro",
    industry: "Cybersecurity",
    challenge: "Compliance automation",
    solution: "Automated security compliance pipeline",
    results: ["100% compliance", "80% time saved", "Zero violations"],
    metrics: { icon: Award, value: "100%", label: "Compliance" },
    detailedDescription: "Built an automated compliance framework that continuously monitors infrastructure and applications for security compliance. Implemented policy-as-code with automated remediation.",
    technologies: ["Open Policy Agent", "Falco", "Helm", "ArgoCD", "Velero", "Trivy"],
    timeline: "3 months",
    teamSize: "5 engineers"
  },
  {
    id: 6,
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
    company: "DevOps Masters",
    industry: "Software",
    challenge: "CI/CD optimization",
    solution: "Modern DevOps pipeline implementation",
    results: ["90% faster deployments", "Reduced errors", "Team productivity up"],
    metrics: { icon: Target, value: "90%", label: "Faster Deploy" },
    detailedDescription: "Redesigned the entire CI/CD pipeline with parallel processing, intelligent caching, and automated testing. Implemented feature flags and blue-green deployments for safer releases.",
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "SonarQube", "Datadog"],
    timeline: "4 months",
    teamSize: "6 engineers"
  },
  {
    id: 7,
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    company: "AgileFlow",
    industry: "Fintech",
    challenge: "Microservices architecture",
    solution: "Containerized microservices with Kubernetes",
    results: ["Improved scalability", "Better fault tolerance", "Faster recovery"],
    metrics: { icon: Zap, value: "5x", label: "Performance" },
    detailedDescription: "Migrated monolithic application to microservices architecture using domain-driven design principles. Implemented service mesh for better observability and security.",
    technologies: ["Spring Boot", "Istio", "Kubernetes", "MongoDB", "RabbitMQ", "Jaeger"],
    timeline: "7 months",
    teamSize: "12 engineers"
  },
  {
    id: 8,
    logo: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=300&fit=crop",
    company: "CloudNative Co",
    industry: "Healthcare",
    challenge: "Multi-cloud strategy",
    solution: "Cloud-native architecture implementation",
    results: ["Vendor independence", "Cost optimization", "Better reliability"],
    metrics: { icon: Users, value: "10K+", label: "Daily Users" },
    detailedDescription: "Implemented a multi-cloud strategy using cloud-native technologies. Built portable applications that can run across different cloud providers with consistent performance.",
    technologies: ["Kubernetes", "Helm", "Crossplane", "Flux", "Linkerd", "Prometheus"],
    timeline: "9 months",
    teamSize: "15 engineers"
  }
];

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCaseStudyClick = (caseStudy: typeof caseStudies[0]) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <>
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
                  onClick={() => handleCaseStudyClick(study)}
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

      <CaseStudyModal 
        caseStudy={selectedCaseStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CaseStudies;
