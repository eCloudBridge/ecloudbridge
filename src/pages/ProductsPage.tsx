
import { ArrowLeft, Cpu, Database, Shield, Zap, Globe, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    {
      icon: Cpu,
      name: "CloudBridge Platform",
      category: "Infrastructure Management",
      description: "A comprehensive cloud infrastructure management platform that provides unified control over multi-cloud environments.",
      features: [
        "Multi-cloud resource management",
        "Automated provisioning",
        "Cost optimization tools",
        "Real-time monitoring",
        "Infrastructure as Code",
        "Compliance dashboards"
      ],
      pricing: "Starting at $299/month",
      popular: true
    },
    {
      icon: Database,
      name: "DataSync Pro",
      category: "Data Management",
      description: "Advanced data synchronization and backup solution for enterprise applications with real-time replication capabilities.",
      features: [
        "Real-time data replication",
        "Automated backup scheduling",
        "Cross-platform compatibility",
        "Data encryption at rest",
        "Disaster recovery tools",
        "Performance analytics"
      ],
      pricing: "Starting at $199/month",
      popular: false
    },
    {
      icon: Shield,
      name: "SecureGuard Suite",
      category: "Security & Compliance",
      description: "Enterprise-grade security suite with advanced threat detection, compliance monitoring, and automated response capabilities.",
      features: [
        "Advanced threat detection",
        "Compliance automation",
        "Identity management",
        "Security analytics",
        "Incident response",
        "Vulnerability scanning"
      ],
      pricing: "Starting at $399/month",
      popular: false
    },
    {
      icon: Zap,
      name: "DevOps Accelerator",
      category: "Development Tools",
      description: "Complete DevOps toolkit that streamlines CI/CD pipelines, automates deployments, and enhances development workflows.",
      features: [
        "CI/CD pipeline automation",
        "Container orchestration",
        "Automated testing",
        "Release management",
        "Performance monitoring",
        "Collaboration tools"
      ],
      pricing: "Starting at $149/month",
      popular: true
    },
    {
      icon: Globe,
      name: "Global CDN Network",
      category: "Content Delivery",
      description: "High-performance content delivery network with global edge locations for optimal content distribution and user experience.",
      features: [
        "Global edge locations",
        "Dynamic content caching",
        "SSL/TLS termination",
        "Load balancing",
        "Real-time analytics",
        "DDoS protection"
      ],
      pricing: "Pay-as-you-go",
      popular: false
    },
    {
      icon: Brain,
      name: "AI Analytics Engine",
      category: "Machine Learning",
      description: "Powerful AI-driven analytics platform that provides intelligent insights and predictive analytics for business optimization.",
      features: [
        "Machine learning models",
        "Predictive analytics",
        "Real-time insights",
        "Custom dashboards",
        "API integration",
        "Automated reporting"
      ],
      pricing: "Starting at $499/month",
      popular: true
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
              stroke="url(#productsInfiniteGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="productsInfiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Powerful cloud-native products designed to accelerate your digital transformation and streamline operations
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-orange-600 font-medium">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-sm text-gray-500 italic">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{product.pricing}</span>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with enterprise-grade security, scalability, and performance in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and reliability with 99.9% uptime SLA and global infrastructure.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Scale</h3>
              <p className="text-gray-600">
                Designed to scale from startup to enterprise with global presence and 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to learn more about our products and find the perfect solution for your business
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
