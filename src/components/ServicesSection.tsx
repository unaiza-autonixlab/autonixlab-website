import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    cmd: "unified-reporting",
    desc: "Marketing Data Infrastructure",
    outcome:
      "Five live API pipelines (Shopify, Meta Ads, Google Ads, Klaviyo, Impact) unified in Supabase, with a custom React frontend on Vercel behind a login. Every figure validated to within 1% of each platform's native reporting. Currently running for a $1.5M/yr US DTC supplement brand. Built with Claude Code and delivered solo.",
  },
  {
    cmd: "cookie-monster",
    desc: "Instagram Competitor Intel",
    outcome:
      "Tracks the competitor Instagram accounts you name and returns structured intelligence reports on what they are posting and how they are positioning it. Reports are delivered to Telegram, so nobody has to log into a dashboard to read them. In use with agency clients.",
  },
  {
    cmd: "prime-suspect",
    desc: "Amazon Listing Analysis",
    outcome:
      "Amazon ASIN and competitor analysis. Give it the ASINs you care about and it returns a written breakdown of how the competing listings are built and positioned. For brands selling on Amazon alongside their own Shopify store.",
  },
  {
    cmd: "cold-outbound",
    desc: "Outbound Email System",
    outcome:
      "AI-driven cold email covering prospect research, per-prospect message writing, and sequencing. The version running on Autonix Lab's own pipeline holds a 3.68% reply rate and has closed high-ticket work. Deployed against your list and your offer, not a template.",
  },
  {
    cmd: "post-malone",
    desc: "Content Automation",
    outcome:
      "Content automation. Turns source material into platform-specific posts on a schedule, so publishing stops depending on someone remembering to do it. Built to match the voice already in your existing posts.",
  },
  {
    cmd: "custom-build",
    desc: "Internal Tooling",
    outcome:
      "For the agency work that has no off-the-shelf software yet. Lead routing, client reporting, internal dashboards, and the manual steps sitting between the tools you already pay for. Built on Node.js, Supabase, React, and Vercel with Claude Code. Scoped per agency.",
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
