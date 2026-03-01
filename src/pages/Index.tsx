import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderBar from "@/components/FounderBar";
import ProblemSection from "@/components/ProblemSection";
import CaseStudyCards from "@/components/CaseStudyCards";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
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
      <CTAFooter />
      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © 2026 AutonixLab. Built by systems, for systems people.
        </p>
      </footer>
    </div>
  );
};

export default Index;
