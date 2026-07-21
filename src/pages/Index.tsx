import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderBar from "@/components/FounderBar";
import ProblemSection from "@/components/ProblemSection";
import CaseStudyCards from "@/components/CaseStudyCards";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsTerminal from "@/components/TestimonialsTerminal";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FounderBar />
      <ProblemSection />
      <CaseStudyCards />
      <ServicesSection />
      <ProcessTimeline />
      <TestimonialsTerminal />
      <CTAFooter />
      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Autonix Lab. Marketing data infrastructure for DTC
          brands and the agencies running them.{" "}
          <a
            href="/privacy-policy"
            className="text-white/60 hover:text-white underline underline-offset-2 transition-colors"
          >
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
