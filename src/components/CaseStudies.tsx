
import { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Clock, Star, Award, Target, Zap, ShieldCheck } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const caseStudies = [
  {
    id: 1,
    logo: "/images/simpleone.jpg",
    company: "SimpleOne",
    industry: "Partnership",
    challenge: "Establishing a strategic technology partnership",
    solution: "Collaboration between eCloudBridge & SimpleOne",
    results: ["Synergized offerings", "Broader reach", "Enhanced capabilities"],
    metrics: { icon: Users, value: "100%", label: "Alignment" },
    detailedDescription: "<p><strong>The Situation:</strong> SimpleOne and eCloudBridge established a partnership to combine forces in the cloud infrastructure domain. Our shared clients needed a unified service catalog where enterprise architecture could be designed and deployed rapidly without navigating multiple vendor contracts.</p><br/><p><strong>Our Approach:</strong> We integrated our service offerings into a seamless portfolio. Joint teams were formed to handle pre-sales, architecture design, and final deployments. We leveraged our mutual expertise in high-availability systems to standardize offerings.</p><br/><p><strong>The Impact:</strong> The partnership yielded a 100% alignment on joint accounts, providing customers with a holistic end-to-end cloud solution, leading to broader market reach and enhanced delivery capabilities for both organizations.</p>",
    technologies: ["Cloud Infrastructure", "DevOps", "Integration"],
    timeline: "Ongoing",
    teamSize: "Cross-functional"
  },
  {
    id: 2,
    logo: "/images/tech-enterprise.jpeg",
    company: "Tech Enterprise",
    industry: "Technology",
    challenge: "Scalability and security bottlenecks",
    solution: "Achieving Scalability and Security with Kubernetes and Datadog",
    results: ["Automated scaling", "Real-time monitoring", "Enhanced security posture"],
    metrics: { icon: ShieldCheck, value: "99.9%", label: "Uptime" },
    detailedDescription: "<p><strong>The Situation:</strong> Tech Enterprise was dealing with severe scalability bottlenecks. Their monolithic application could not handle sudden user spikes, leading to frequent timeouts and a diminished security posture due to outdated infrastructure configurations.</p><br/><p><strong>Our Approach:</strong> We broke down the monolith into a microservices architecture deployed on a highly available Kubernetes cluster. We integrated Datadog for full-stack observability, allowing for real-time monitoring of container health. In parallel, we implemented strict RBAC and network policies to harden the cluster.</p><br/><p><strong>The Impact:</strong> The client achieved 99.9% uptime. Automated Horizontal Pod Autoscaling (HPA) now seamlessly handles traffic spikes, and real-time monitoring alerts the team to anomalies before they affect users.</p>",
    technologies: ["Kubernetes", "Datadog", "Cloud Security"],
    timeline: "4 months",
    teamSize: "6 engineers"
  },
  {
    id: 3,
    logo: "/images/software-innovations.jpg",
    company: "Software Innovations",
    industry: "Software",
    challenge: "Inefficient development lifecycles",
    solution: "Empowering Software Development with a Comprehensive DevOps Toolchain",
    results: ["Faster time-to-market", "Reduced failure rates", "Streamlined CI/CD"],
    metrics: { icon: Zap, value: "5x", label: "Deploy Frequency" },
    detailedDescription: "<p><strong>The Situation:</strong> Software Innovations suffered from an inefficient software development lifecycle. Deployments were manual, error-prone, and required weekend downtime windows. Developers spent more time fighting merge conflicts and deployment scripts than writing code.</p><br/><p><strong>Our Approach:</strong> We architected a complete DevOps toolchain using GitOps principles. We implemented CI/CD pipelines that automatically build, test, and deploy code upon every merge to the main branch. ArgoCD was deployed to maintain state consistency across environments.</p><br/><p><strong>The Impact:</strong> Deploy frequency increased by 5x. Developers now deploy code multiple times a day with zero downtime. Production failure rates plummeted as all changes are rigorously tested and verified in staging environments identical to production.</p>",
    technologies: ["CI/CD", "Automation", "GitOps"],
    timeline: "6 months",
    teamSize: "8 engineers"
  },
  {
    id: 4,
    logo: "/images/global-operations.jpg",
    company: "Global Operations",
    industry: "Enterprise",
    challenge: "Slow incident response and fragmented workflows",
    solution: "Optimizing Workflows and Incident Response",
    results: ["Reduced MTTR", "Automated alerts", "Improved collaboration"],
    metrics: { icon: Clock, value: "60%", label: "Faster MTTR" },
    detailedDescription: "<p><strong>The Situation:</strong> E-commerce Inc. lacked a robust disaster recovery (DR) strategy. In the event of a regional cloud outage, their expected recovery time was over 48 hours, which would result in millions of dollars in lost revenue and severe reputational damage.</p><br/><p><strong>Our Approach:</strong> We designed an Active-Passive multi-region disaster recovery architecture on AWS. Critical databases were configured with cross-region replication. We scripted the entire infrastructure recovery process using Terraform so the passive region could be fully spun up in minutes.</p><br/><p><strong>The Impact:</strong> The RTO (Recovery Time Objective) was reduced to under 15 minutes. Regular, automated DR drills ensure the team is always prepared, providing immense peace of mind to the executive board.</p>",
    technologies: ["Incident Management", "Workflow Automation"],
    timeline: "3 months",
    teamSize: "4 engineers"
  },
  {
    id: 5,
    logo: "/images/retail-giant.png",
    company: "Retail Giant",
    industry: "E-commerce",
    challenge: "Vulnerabilities in customer data protection",
    solution: "Strengthening Security in E-commerce",
    results: ["Zero data breaches", "PCI-DSS Compliance", "Secure transactions"],
    metrics: { icon: Target, value: "100%", label: "Compliant" },
    detailedDescription: "<p><strong>The Situation:</strong> Retail Giant was expanding globally but faced significant vulnerabilities regarding customer data protection. They needed to achieve strict PCI-DSS compliance before launching in the European market.</p><br/><p><strong>Our Approach:</strong> We conducted a comprehensive security audit of their entire cloud footprint. We implemented Web Application Firewalls (WAF) to block malicious traffic, enforced end-to-end encryption for all data in transit and at rest, and integrated automated security scanning into their CI/CD pipelines.</p><br/><p><strong>The Impact:</strong> Zero data breaches have occurred since implementation. The client easily passed their PCI-DSS compliance audit, allowing them to confidently process secure transactions across their new European market footprint.</p>",
    technologies: ["WAF", "Encryption", "Security Auditing"],
    timeline: "5 months",
    teamSize: "5 engineers"
  },
  {
    id: 6,
    logo: "/images/fintech-startup.png",
    company: "Fintech Startup",
    industry: "Fintech",
    challenge: "Rigid infrastructure slowing down financial innovations",
    solution: "Empowering Fintech Innovation through DevOps",
    results: ["Agile infrastructure", "Rapid prototyping", "High availability"],
    metrics: { icon: TrendingUp, value: "200%", label: "Growth" },
    detailedDescription: "<p><strong>The Situation:</strong> Fintech Startup was struggling to innovate. Their rigid, legacy infrastructure required months of planning to launch a single new microservice. This slow time-to-market was severely hampering their competitive advantage.</p><br/><p><strong>Our Approach:</strong> We transformed their infrastructure into an agile, cloud-native ecosystem. We introduced Docker containers and orchestrated them with Kubernetes. We implemented an Internal Developer Platform (IDP) that allows developers to self-provision fully compliant environments with a single click.</p><br/><p><strong>The Impact:</strong> Engineering velocity skyrocketed. The startup can now prototype and launch new financial products in days rather than months, resulting in a 200% acceleration in product growth and significantly higher developer satisfaction.</p>",
    technologies: ["Cloud-Native", "Microservices", "DevOps"],
    timeline: "7 months",
    teamSize: "10 engineers"
  },
  {
    id: 7,
    logo: "/images/global-operations.jpg",
    company: "Global Logistics Network",
    industry: "Logistics",
    challenge: "Manual provisioning causing deployment delays across multi-cloud environments",
    solution: "Infrastructure as Code (IaC) Automation & Multi-Cloud Strategy",
    results: ["95% faster infrastructure provisioning", "Zero manual configuration errors", "Unified multi-cloud management"],
    metrics: { icon: Clock, value: "95%", label: "Faster Delivery" },
    detailedDescription: "<p><strong>The Situation:</strong> Global Logistics Network was struggling to maintain consistent infrastructure across their AWS and Azure environments. Operations teams were manually clicking through cloud consoles to provision servers, which often took weeks and led to configuration drift.</p><br/><p><strong>Our Approach:</strong> We designed a centralized Infrastructure as Code (IaC) framework using Terraform and Ansible. We implemented GitOps workflows where all infrastructure changes are proposed via Pull Requests, automatically tested using terratest, and applied via GitLab CI pipelines.</p><br/><p><strong>The Impact:</strong> The client achieved zero-touch provisioning. A new production-grade environment across both AWS and Azure can now be spun up in 15 minutes, down from 3 weeks. Manual configuration errors were completely eliminated, resulting in a 99.99% infrastructure reliability score.</p>",
    technologies: ["Terraform", "Ansible", "AWS", "Azure", "GitLab CI"],
    timeline: "6 months",
    teamSize: "8 engineers"
  },
  {
    id: 8,
    logo: "/images/tech-enterprise.jpeg",
    company: "CloudData Analytics",
    industry: "Data Services",
    challenge: "High MTTR and lack of system visibility during traffic spikes",
    solution: "Site Reliability Engineering (SRE) & Advanced Observability",
    results: ["60% reduction in MTTR", "Proactive alerting", "99.99% system availability"],
    metrics: { icon: Zap, value: "4x", label: "Faster Resolution" },
    detailedDescription: "<p><strong>The Situation:</strong> During large data processing batches, CloudData Analytics experienced severe latency spikes. The engineering team lacked visibility into microservice interactions and spent days sifting through disparate log files to find root causes.</p><br/><p><strong>Our Approach:</strong> We established a formal SRE culture, working with product owners to define strict Service Level Indicators (SLIs) and Service Level Objectives (SLOs). We deployed the 'LGTM' stack (Loki, Grafana, Tempo, Mimir) for complete, correlated observability. We then created automated PagerDuty runbooks that trigger specific mitigation scripts when error budgets are threatened.</p><br/><p><strong>The Impact:</strong> Mean Time To Resolution (MTTR) dropped by 60%. The team shifted from reactive firefighting to proactive optimization. They achieved their 99.99% availability SLA for the first time in company history during Q4 peak season.</p>",
    technologies: ["Prometheus", "Grafana", "PagerDuty", "Kubernetes", "Elasticsearch"],
    timeline: "4 months",
    teamSize: "5 engineers"
  },
  {
    id: 9,
    logo: "/images/retail-giant.png",
    company: "StreamMedia Inc.",
    industry: "Media & Entertainment",
    challenge: "Runaway cloud costs due to unoptimized resource utilization",
    solution: "FinOps & Cloud Cost Optimization",
    results: ["45% reduction in monthly AWS bill", "Automated instance right-sizing", "Cost visibility per microservice"],
    metrics: { icon: TrendingUp, value: "45%", label: "Cost Savings" },
    detailedDescription: "<p><strong>The Situation:</strong> After a rapid migration to AWS, StreamMedia's cloud bill ballooned to $1.2M per month. Engineering teams were over-provisioning EKS nodes \"just in case\" of traffic spikes, leading to average CPU utilization below 15%.</p><br/><p><strong>Our Approach:</strong> We integrated FinOps deeply into their engineering lifecycle. We deployed Kubecost to gain granular visibility down to the pod level and instituted chargebacks per business unit. We replaced static node groups with Karpenter for JIT (Just-In-Time) provisioning and shifted 60% of stateless workloads to AWS Spot Instances using automated interruption handlers.</p><br/><p><strong>The Impact:</strong> Cloud spend was reduced by a massive 45% ($540,000 monthly savings) without a single degradation in performance. Engineers now receive automated PR comments regarding the cost impact of their infrastructure changes.</p>",
    technologies: ["Kubecost", "AWS Cost Explorer", "Spot Instances", "Kubernetes", "Karpenter"],
    timeline: "3 months",
    teamSize: "4 engineers"
  },
  {
    id: 10,
    logo: "/images/fintech-startup.png",
    company: "SecureFinance Bank",
    industry: "Banking",
    challenge: "Meeting strict regulatory compliance while migrating legacy monolithic applications to the cloud",
    solution: "Zero-Trust Architecture & DevSecOps Implementation",
    results: ["100% compliance with PCI-DSS", "Zero-day vulnerability patching under 4 hours", "Secure microservices"],
    metrics: { icon: ShieldCheck, value: "100%", label: "Compliant" },
    detailedDescription: "<p><strong>The Situation:</strong> A major regional bank needed to migrate their 15-year-old monolithic core banking system to the cloud to support mobile banking. However, stringent regulatory requirements (PCI-DSS, SOC2) were blocking the cloud migration.</p><br/><p><strong>Our Approach:</strong> We architected a Zero-Trust environment in AWS. We utilized Istio Service Mesh to enforce strict mutual TLS (mTLS) between all microservices. We built a DevSecOps pipeline integrating SonarQube for SAST, Snyk for SCA, and Trivy for container scanning. No code could reach production without passing rigorous automated security checks.</p><br/><p><strong>The Impact:</strong> The bank successfully migrated to the cloud, passing all compliance audits on the first attempt. Their security posture was vastly improved, and they can now patch zero-day vulnerabilities in under 4 hours, compared to the previous 3-week lifecycle.</p>",
    technologies: ["Istio", "AWS", "SonarQube", "Snyk", "Trivy", "Kubernetes"],
    timeline: "9 months",
    teamSize: "12 engineers"
  }
];

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCaseStudyClick = (caseStudy: typeof caseStudies[0]) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <>
      <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with our cloud solutions
            </p>
          </div>

          {/* Single Marquee Line */}
          <div className="relative">
            <div className="flex animate-marquee space-x-8">
              {[...caseStudies, ...caseStudies].map((study, index) => (
                <div 
                  key={`${study.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
                  onClick={() => handleCaseStudyClick(study)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.logo} 
                      alt={`${study.company} case study`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                      <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <study.metrics.icon className="h-5 w-5 text-orange-500" />
                        <div>
                          <div className="text-lg font-bold text-gray-900">{study.metrics.value}</div>
                          <div className="text-xs text-gray-600">{study.metrics.label}</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-orange-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudyModal 
        caseStudy={selectedCaseStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CaseStudies;
