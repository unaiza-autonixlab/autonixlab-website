import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    cmd: "compete-content-iq",
    desc: "Market Intelligence",
    outcome:
      "Automatically monitors competitor websites, ads, and content daily. Delivers structured insights to your dashboard every morning — zero manual research required. Expect 15+ hours saved per week.",
  },
  {
    cmd: "speed-to-lead-os",
    desc: "Qualification Engine",
    outcome:
      "AI scores every inbound lead in under 3 seconds based on budget, timeline, and fit. High-value prospects get routed to sales instantly. Low-tier leads enter automated nurture sequences.",
  },
  {
    cmd: "lead-machine",
    desc: "Outbound Automation",
    outcome:
      "Researches prospects, crafts AI-personalized messages, and sequences multi-channel outreach automatically. Books qualified meetings directly into your calendar. 12%+ response rates typical.",
  },
  {
    cmd: "content-calendar",
    desc: "Asset Production",
    outcome:
      "Generates a full month of platform-specific content in minutes. Auto-schedules posts, repurposes long-form into short-form, and maintains brand voice across every channel.",
  },
  {
    cmd: "brain-box",
    desc: "Content Intelligence",
    outcome:
      "Analyzes your top-performing content and competitors' wins to predict what topics, formats, and hooks will drive engagement. Data-driven content strategy on autopilot.",
  },
  {
    cmd: "agency-os",
    desc: "Full Operating System",
    outcome:
      "The complete stack: CRM, project management, client reporting, invoicing, and team coordination — all automated and interconnected. One system replaces 8+ tools.",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 border-y border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-12"
        >
          Available Deployments
        </motion.h2>

        <div className="space-y-1 max-w-xl mx-auto">
          {services.map((svc, i) => (
            <div key={svc.cmd} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`service-line font-mono text-xs sm:text-sm md:text-base py-3 px-3 sm:px-4 rounded-md flex items-center gap-2 transition-colors duration-300 ${
                  hoveredIndex === i
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-secondary/50"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={`transition-colors duration-300 ${
                    hoveredIndex === i ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  $
                </span>
                <span
                  className={`transition-colors duration-300 ${
                    hoveredIndex === i ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  ./install
                </span>
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    hoveredIndex === i ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  {svc.cmd}
                </span>
                <span
                  className={`ml-auto hidden sm:inline transition-colors duration-300 ${
                    hoveredIndex === i ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  [{svc.desc}]
                </span>
              </motion.div>

              {/* Mini terminal popup */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 z-20 mt-1"
                  >
                    <div className="bg-card border border-primary/50 rounded-lg overflow-hidden shadow-[0_0_20px_hsl(20_100%_60%/0.15)]">
                      {/* Terminal title bar */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary border-b border-border">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--success))]" />
                        <span className="text-[10px] text-muted-foreground font-mono ml-2">
                          {svc.cmd}.outcome
                        </span>
                      </div>
                      {/* Terminal body */}
                      <div className="p-3 sm:p-4">
                        <p className="text-[11px] sm:text-xs text-muted-foreground font-mono leading-relaxed text-left">
                          <span className="text-primary">{'>'}</span>{" "}
                          {svc.outcome}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
