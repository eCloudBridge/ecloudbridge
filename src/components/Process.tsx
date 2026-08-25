import {
  Search,
  PenTool,
  Settings,
  Database,
  LineChart,
  ShieldCheck,
  Headphones,
  RefreshCw,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery and Requirements Gathering",
    description: "We engage in detailed discussions with clients to understand their business goals, infrastructure needs, and requirements, ensuring a clear understanding of their pain points and desired outcomes.",
    icon: Search,
  },
  {
    id: 2,
    title: "Solution Design and Planning",
    description: "Our team creates tailored cloud infrastructure solutions that prioritize scalability, security, performance, and cost-efficiency. Collaborating closely with you, we develop a comprehensive plan encompassing infrastructure components, technology stack, and deployment strategy.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Infrastructure Deployment and Configuration",
    description: "Our skilled engineers deploy and configure the infrastructure using leading cloud technologies, ensuring seamless integration, optimal performance, and adherence to best practices.",
    icon: Settings,
  },
  {
    id: 4,
    title: "Data Migration and Application Deployment",
    description: "Our team ensures seamless data migration and assists with deploying applications, minimizing downtime and data loss. We meticulously plan and execute the migration process, while also configuring and optimizing applications for the new infrastructure environment.",
    icon: Database,
  },
  {
    id: 5,
    title: "Performance Optimization and Monitoring",
    description: "We optimize resource utilization and user experience through thorough testing, identifying bottlenecks, and implementing enhancements like load balancing and caching. Our proactive monitoring and alerting systems ensure continuous performance management.",
    icon: LineChart,
  },
  {
    id: 6,
    title: "Security Implementation",
    description: "We prioritize robust security measures, including firewalls, access controls, encryption protocols, and intrusion detection systems, to safeguard your cloud infrastructure and applications. Thorough security assessments are conducted to proactively identify and address vulnerabilities.",
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: "Ongoing Support and Maintenance",
    description: "Our comprehensive support and maintenance services guarantee the continued success of your cloud infrastructure. Our dedicated team is available 24/7 for technical assistance, regular system health checks, backups, and timely updates to ensure security and optimal performance.",
    icon: Headphones,
  },
  {
    id: 8,
    title: "Continuous Improvement and Optimization",
    description: "We constantly enhance and optimize your cloud infrastructure, aligning with your evolving needs. We leverage new technologies and emerging cloud capabilities to maximize efficiency and growth.",
    icon: RefreshCw,
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-fixed opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-orange-600 uppercase mb-2">Process Overview</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivering Efficient Cloud Infrastructure Services
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our process ensures that we understand your unique requirements, design tailored solutions, implement them effectively, and provide ongoing support to ensure optimal performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {index + 1}
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                {step.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed relative z-10 text-sm">
                {step.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
