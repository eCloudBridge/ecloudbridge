
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
