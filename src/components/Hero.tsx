import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bootLines = [
  { text: "> AutonixLab Systems Initializing...", delay: 0 },
  { text: "> Loading modules: AI_Engine, Workflow_Orchestrator, Lead_Processor", delay: 800 },
  { text: "> Founder: Unaiza Masood", delay: 1600 },
  { text: "> Status: Operational ✓", delay: 2400 },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timers = bootLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    const completeTimer = setTimeout(() => setBootComplete(true), 3200);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Boot sequence */}
        <div className={`font-mono text-sm md:text-base mb-12 space-y-2 transition-opacity duration-500 ${bootComplete ? "opacity-30" : "opacity-100"}`}>
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={i === bootLines.length - 1 ? "text-success" : "terminal-text"}
            >
              {line.text}
              {i === visibleLines - 1 && !bootComplete && (
                <span className="cursor-blink ml-1 text-primary">█</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={bootComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            I Build Zero-Touch Systems That Replace Your{" "}
            <span className="text-gradient-orange">Operational Chaos</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-sans">
            AI automation for marketing agencies stuck at 1-10 employees
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow inline-block text-sm md:text-base"
          >
            [ Book a Diagnostic Call ]
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-primary text-2xl">▼</span>
      </motion.div>
    </section>
  );
};

export default Hero;
