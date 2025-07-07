
import { ArrowLeft, ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Global E-commerce Platform Migration",
      client: "TechMart Solutions",
      industry: "E-commerce",
      challenge: "Legacy infrastructure couldn't handle peak traffic during sales events, causing frequent downtime and lost revenue.",
      solution: "Migrated to AWS with auto-scaling architecture, implemented CDN, and optimized database performance.",
      results: [
        { metric: "99.9%", description: "Uptime achieved" },
        { metric: "300%", description: "Traffic handling capacity" },
        { metric: "45%", description: "Cost reduction" },
        { metric: "2 weeks", description: "Migration timeline" }
      ],
      technologies: ["AWS", "Kubernetes", "CloudFront", "RDS"],
      testimonial: "eCloudBridge transformed our infrastructure seamlessly. We now handle Black Friday traffic without breaking a sweat.",
      clientRole: "CTO, TechMart Solutions"
    },
    {
      title: "Financial Services DevOps Transformation",
      client: "SecureBank Corp",
      industry: "Financial Services",
      challenge: "Manual deployment processes were slow and error-prone, with compliance requirements making changes difficult.",
      solution: "Implemented comprehensive CI/CD pipelines with automated testing, security scanning, and compliance checks.",
      results: [
        { metric: "90%", description: "Faster deployments" },
        { metric: "Zero", description: "Security incidents" },
        { metric: "SOC 2", description: "Compliance achieved" },
        { metric: "24/7", description: "Monitoring coverage" }
      ],
      technologies: ["Jenkins", "Docker", "Terraform", "Vault"],
      testimonial: "The DevOps transformation exceeded our expectations. We're now deploying multiple times per day with complete confidence.",
      clientRole: "Head of Technology, SecureBank Corp"
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Needed to process and analyze massive healthcare datasets while maintaining HIPAA compliance and data security.",
      solution: "Built a secure, scalable data analytics platform using cloud-native technologies with ML/AI capabilities.",
      results: [
        { metric: "1000x", description: "Data processing speed" },
        { metric: "HIPAA", description: "Compliance certified" },
        { metric: "Real-time", description: "Analytics capability" },
        { metric: "50%", description: "Operational efficiency gain" }
      ],
      technologies: ["Apache Spark", "Kafka", "TensorFlow", "Azure"],
      testimonial: "Our research capabilities have been revolutionized. We can now analyze patient data in real-time while maintaining the highest security standards.",
      clientRole: "Chief Data Officer, MedTech Innovations"
    },
    {
      title: "Manufacturing IoT Integration",
      client: "Industrial Dynamics",
      industry: "Manufacturing",
      challenge: "Disconnected manufacturing systems with no real-time visibility into production metrics and equipment performance.",
      solution: "Implemented IoT sensors and edge computing with centralized data collection and real-time analytics dashboard.",
      results: [
        { metric: "40%", description: "Downtime reduction" },
        { metric: "Real-time", description: "Production monitoring" },
        { metric: "25%", description: "Efficiency improvement" },
        { metric: "Predictive", description: "Maintenance enabled" }
      ],
      technologies: ["IoT Hub", "Edge Computing", "Time Series DB", "Power BI"],
      testimonial: "The IoT integration has given us unprecedented visibility into our operations. We can now predict and prevent issues before they occur.",
      clientRole: "Operations Director, Industrial Dynamics"
    },
    {
      title: "Startup Scaling Infrastructure",
      client: "GrowthTech Startup",
      industry: "Technology",
      challenge: "Rapid user growth was straining infrastructure, and the team needed to focus on product development rather than operations.",
      solution: "Designed and implemented scalable, cost-effective infrastructure with automated scaling and monitoring.",
      results: [
        { metric: "10x", description: "User capacity scaling" },
        { metric: "60%", description: "Infrastructure cost savings" },
        { metric: "Zero", description: "Downtime incidents" },
        { metric: "Auto", description: "Scaling implemented" }
      ],
      technologies: ["Google Cloud", "Kubernetes", "Prometheus", "Grafana"],
      testimonial: "eCloudBridge allowed us to scale from 10k to 100k users without any infrastructure headaches. We could focus purely on our product.",
      clientRole: "Founder & CEO, GrowthTech Startup"
    },
    {
      title: "Enterprise Security Overhaul",
      client: "GlobalCorp Industries",
      industry: "Enterprise",
      challenge: "Legacy security systems were insufficient for modern threats, with multiple security incidents and compliance issues.",
      solution: "Comprehensive security transformation with zero-trust architecture, advanced threat detection, and compliance automation.",
      results: [
        { metric: "Zero", description: "Security breaches" },
        { metric: "100%", description: "Compliance score" },
        { metric: "24/7", description: "Threat monitoring" },
        { metric: "90%", description: "Incident response improvement" }
      ],
      technologies: ["Zero Trust", "SIEM", "IAM", "Security Automation"],
      testimonial: "Our security posture has never been stronger. We now have complete visibility and control over our security landscape.",
      clientRole: "CISO, GlobalCorp Industries"
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
              stroke="url(#caseStudiesInfiniteGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="caseStudiesInfiniteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Real stories of transformation, innovation, and success from our clients across industries
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {study.industry}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h2>
                      <p className="text-lg text-gray-600">{study.client}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results & Testimonial */}
                  <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 lg:p-12">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                        Results
                      </h3>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-600">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-orange-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <blockquote className="text-gray-700 italic mb-2">
                            "{study.testimonial}"
                          </blockquote>
                          <cite className="text-sm text-gray-600 font-medium">
                            {study.clientRole}
                          </cite>
                        </div>
                      </div>
                    </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
