
import { Cloud, Database, Shield, Server, Network, Code } from 'lucide-react';

const products = [
  {
    icon: Cloud,
    title: "CloudBridge Platform",
    description: "Comprehensive cloud management platform for seamless infrastructure orchestration.",
    features: ["Multi-cloud Support", "Auto-scaling", "Cost Optimization"]
  },
  {
    icon: Shield,
    title: "SecureCloud Suite",
    description: "Advanced security tools and compliance management for cloud environments.",
    features: ["Threat Detection", "Compliance Monitoring", "Identity Management"]
  },
  {
    icon: Database,
    title: "DataBridge Analytics",
    description: "Powerful data analytics and business intelligence platform for modern enterprises.",
    features: ["Real-time Analytics", "Custom Dashboards", "ML Integration"]
  },
  {
    icon: Server,
    title: "Infrastructure Automation",
    description: "Automated infrastructure provisioning and configuration management tools.",
    features: ["IaC Templates", "Automated Deployment", "Configuration Management"]
  },
  {
    icon: Network,
    title: "Network Optimization",
    description: "Advanced network monitoring and optimization solutions for peak performance.",
    features: ["Performance Monitoring", "Traffic Analysis", "Load Balancing"]
  },
  {
    icon: Code,
    title: "DevOps Toolkit",
    description: "Complete DevOps automation suite for continuous integration and deployment.",
    features: ["CI/CD Pipelines", "Code Quality", "Release Management"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative cloud solutions and tools designed to streamline your digital operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {product.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
