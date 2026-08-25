
import { Award, Globe, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Users, value: "500+", label: "Clients Served", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Globe, value: "50+", label: "Countries", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Award, value: "99.9%", label: "Uptime SLA", color: "text-emerald-500", bg: "bg-emerald-50" },
  { icon: TrendingUp, value: "300%", label: "Average ROI", color: "text-purple-500", bg: "bg-purple-50" }
];

const highlights = [
  "10+ years of cloud infrastructure expertise",
  "Multi-cloud certified engineers (AWS, GCP, Azure)",
  "Dedicated SRE and DevSecOps practices",
  "24/7 monitoring and incident response",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Copy */}
          <div>
            <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4 px-4 py-1.5 bg-orange-50 rounded-full border border-orange-100">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Leading the Cloud &amp; DevOps Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-5 leading-relaxed">
              At eCloudBridge, we're passionate about helping businesses harness the full power of cloud technology 
              and DevOps practices. With over a decade of experience, we've helped hundreds of companies transform 
              their digital infrastructure from a bottleneck into a competitive advantage.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              By integrating development and operations processes, eCloudBridge enables organizations to achieve 
              faster, more reliable software delivery—accelerating speed-to-market without sacrificing quality or security.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:scale-105"
            >
              Our Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right – Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${stat.bg} rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <div className="text-4xl font-extrabold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
