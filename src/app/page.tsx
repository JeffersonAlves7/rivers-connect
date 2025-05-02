import { HeroSection } from '@/components/landing/hero-section';
import { ServicesSection } from '@/components/landing/services-section';
import { PortfolioSection } from '@/components/landing/portfolio-section';
import { ContactSection } from '@/components/landing/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
