
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TrustSection } from '@/components/TrustSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { StickyBanner } from '@/components/StickyBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <TrustSection />
      <ContactSection />
      <Footer />
      <StickyBanner />
    </div>
  );
};

export default Index;
