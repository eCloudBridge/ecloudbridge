
import { ArrowLeft, Cloud, Shield, Users, Zap, GitBranch, Brain, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency. Our expert team ensures a smooth transition while maintaining data integrity and security.",
      features: [
        "AWS/Azure/GCP Migration",
        "Zero Downtime Migration",
        "Data Integrity Assurance",
        "Performance Optimization",
        "Cost Analysis & Optimization",
        "Migration Strategy Planning"
      ],
      benefits: [
        "Reduced operational costs",
        "Improved scalability",
        "Enhanced security",
        "Better disaster recovery"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions that keep your data safe and compliant with industry standards. We implement comprehensive security frameworks tailored to your business needs.",
      features: [
        "SOC 2 Compliance",
        "Data Encryption",
        "24/7 Security Monitoring",
        "Vulnerability Assessment",
        "Identity Access Management",
        "Compliance Auditing"
      ],
      benefits: [
        "Regulatory compliance",
        "Data protection",
        "Risk mitigation",
        "Trust building"
      ]
    },
    {
      icon: Brain,
      title: "MLOps & Data Analytics",
      description: "Machine Learning Operations and advanced data analytics for intelligent business insights and automated workflows. Transform your data into actionable intelligence.",
      features: [
        "ML Pipeline Automation",
        "Real-time Analytics",
        "Data Orchestration",
        "Model Deployment",
        "Performance Monitoring",
        "Data Visualization"
      ],
      benefits: [
        "Data-driven decisions",
        "Automated insights",
        "Predictive analytics",
        "Operational efficiency"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps Services",
      description: "Enabling businesses through seamless DevOps integration for faster software delivery and increased agility. Streamline your development lifecycle.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Continuous Monitoring",
        "Automated Testing",
        "Container Orchestration",
        "Release Management"
      ],
      benefits: [
        "Faster deployments",
        "Reduced errors",
        "Better collaboration",
        "Improved quality"
      ]
    },
    {
      icon: Users,
      title: "Consulting & Support",
      description: "Expert guidance and 24/7 support to ensure your cloud journey is successful. Our consultants provide strategic insights and hands-on assistance.",
      features: [
        "Architecture Review",
        "24/7 Technical Support",
        "Training Programs",
        "Best Practices Guidance",
        "Performance Optimization",
        "Strategic Planning"
      ],
      benefits: [
        "Expert guidance",
        "Continuous support",
        "Knowledge transfer",
        "Strategic alignment"
      ]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Maximize your cloud performance and minimize costs with our optimization services. Fine-tune your infrastructure for peak efficiency.",
      features: [
        "Cost Optimization",
        "Performance Tuning",
        "Resource Scaling",
        "Load Balancing",
        "Caching Strategies",
        "Monitoring & Alerting"
      ],
      benefits: [
        "Cost reduction",
        "Better performance",
        "Resource efficiency",
        "Improved user experience"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <svg 
            width="1800" 
            height="900" 
            viewBox="0 0 1800 900" 
            className="animate-infinite-flow"
          >
            <path
              d="M450,450 C225,225 225,675 450,450 C675,225 675,675 450,450 C675,675 1125,675 1350,450 C1575,225 1575,675 1350,450 C1125,675 675,675 450,450"
              fill="none"
              stroke="url(#servicesInfiniteGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="servicesInfiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Cloud Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive cloud and DevOps solutions designed to accelerate your digital transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 ml-6">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`bg-white p-8 rounded-2xl shadow-xl ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help accelerate your digital transformation
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
