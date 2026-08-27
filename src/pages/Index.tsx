
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Clients from '@/components/Clients';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';  
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Enterprise DevOps & Cloud Solutions for Seamless Integration"
        description="eCloudBridge delivers enterprise-grade cloud migration, Kubernetes management, SRE, and DevSecOps services. Trusted by 500+ clients across AWS, Azure & GCP. Based in Bengaluru, India. Get a free consultation today."
        keywords="DevOps company India, cloud migration services, Kubernetes managed services, AWS consulting Bangalore, Azure DevOps, GCP migration, SRE services, CI/CD automation, Infrastructure as Code, DevSecOps, cloud solutions India, eCloudBridge"
        canonical="https://ecloudbridge.com/"
        url="https://ecloudbridge.com/"
      />
      <Navigation />
      <Hero />
      <Services />
      <Products />
      <Clients />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
