import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { AboutSection } from "../components/about-section"
import { PortfolioSection } from "../components/portfolio-section"
import { StatsSection } from "../components/stats-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { CTASection } from "../components/cta-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}
