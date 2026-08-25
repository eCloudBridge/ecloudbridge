import { getImageUrl } from '@/utils/assets.ts';
import { Cloud, Shield, Users, Zap, GitBranch, Brain, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
    features: ["AWS / Azure / GCP", "Zero Downtime", "Data Integrity"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100 text-blue-600"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions that keep your data safe and compliant with industry standards.",
    features: ["SOC 2 / PCI-DSS", "Data Encryption", "24/7 Monitoring"],
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: Brain,
    title: "MLOps & Data Analytics",
    description: "Machine Learning Operations and advanced data analytics for intelligent business insights.",
    features: ["ML Pipeline Automation", "Real-time Analytics", "Data Orchestration"],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100 text-purple-600"
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description: "Enabling businesses through seamless DevOps integration for faster software delivery and increased agility.",
    features: ["CI/CD Automation", "Infrastructure as Code", "Continuous Monitoring"],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100 text-orange-600"
  },
  {
    icon: Users,
    title: "Consulting & Support",
    description: "Expert guidance and 24/7 support to ensure your cloud journey is successful every step of the way.",
    features: ["Architecture Review", "24/7 Support", "Team Training"],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100 text-pink-600"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximize your cloud performance and minimize costs with our advanced optimization services.",
    features: ["Cost Optimization", "Performance Tuning", "Resource Scaling"],
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100 text-yellow-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-fixed opacity-5" 
        style={{ backgroundImage: `url(${getImageUrl('/lovable-uploads/team-bg.jpg')})` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4 px-4 py-1.5 bg-orange-50 rounded-full border border-orange-100">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Our Cloud Services
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Comprehensive cloud and DevOps solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-orange-100 cursor-pointer overflow-hidden"
            >
              {/* Hover background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`}></div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 ${service.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-orange-500 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
