import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection as SkillsSection } from "@/components/landing/features-section";
import { HowItWorksSection as ProcessSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection as AboutSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection as ProjectsSection } from "@/components/landing/integrations-section";
import { SecuritySection as ToolkitSection } from "@/components/landing/security-section";
import { DevelopersSection as ContactSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ToolkitSection />
      <ProcessSection />
      <MetricsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
