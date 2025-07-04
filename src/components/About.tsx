
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Award, value: "99.9%", label: "Uptime SLA" },
  { icon: TrendingUp, value: "300%", label: "Average ROI" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading the Cloud & DevOps Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At eCloudBridge, we're passionate about helping businesses harness the power of cloud technology 
              and DevOps practices. With over a decade of experience in cloud solutions and seamless DevOps integration, 
              we've helped hundreds of companies transform their digital infrastructure.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              By integrating development and operations processes, eCloudBridge enables organizations to achieve 
              faster and more efficient software delivery. We accelerate software development cycles, increase 
              agility, and deliver high-quality products to market more rapidly.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
