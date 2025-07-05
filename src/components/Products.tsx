
import { Zap, Bot } from 'lucide-react';

const products = [
  {
    icon: Zap,
    title: "SimpleOne",
    description: "Streamlined cloud management platform that simplifies your infrastructure operations with intuitive automation and monitoring capabilities.",
    features: ["One-Click Deployment", "Real-time Monitoring", "Cost Analytics", "Auto-scaling"],
    image: "photo-1551288049-bebda4e38f71"
  },
  {
    icon: Bot,
    title: "Snippy.bot",
    description: "Intelligent automation bot that accelerates your development workflow with smart code snippets and DevOps automation.",
    features: ["Smart Code Generation", "Workflow Automation", "Integration Hub", "AI-Powered Insights"],
    image: "photo-1485827404703-89b55fcc595e"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions designed to transform your digital operations and accelerate business growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105 animate-fade-in h-full flex flex-col ${
                index % 2 === 0 ? 'lg:hover:rotate-1' : 'lg:hover:-rotate-1'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img 
                  src={`https://images.unsplash.com/${product.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <product.icon className="h-8 w-8 text-orange-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-700 bg-orange-50 px-3 py-2 rounded-lg hover:bg-orange-100 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mt-auto">
                  Learn More
                </button>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
