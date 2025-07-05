
import { Cloud, Shield, Users, Zap, GitBranch, Brain } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
    features: ["AWS/Azure/GCP", "Zero Downtime", "Data Integrity"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions that keep your data safe and compliant with industry standards.",
    features: ["SOC 2 Compliance", "Data Encryption", "24/7 Monitoring"]
  },
  {
    icon: Brain,
    title: "MLOps & Data Analytics",
    description: "Machine Learning Operations and advanced data analytics for intelligent business insights and automated workflows.",
    features: ["ML Pipeline Automation", "Real-time Analytics", "Data Orchestration"]
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description: "Enabling businesses through seamless DevOps integration for faster software delivery and increased agility.",
    features: ["CI/CD Automation", "Infrastructure as Code", "Continuous Monitoring"]
  },
  {
    icon: Users,
    title: "Consulting & Support",
    description: "Expert guidance and 24/7 support to ensure your cloud journey is successful.",
    features: ["Architecture Review", "24/7 Support", "Training Programs"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximize your cloud performance and minimize costs with our optimization services.",
    features: ["Cost Optimization", "Performance Tuning", "Resource Scaling"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cloud Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud and DevOps solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
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

export default Services;
