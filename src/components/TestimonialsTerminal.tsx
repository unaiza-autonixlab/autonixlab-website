import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ValidationCheck {
  id: string;
  label: string;
  command: string;
  source: string;
  scope: string;
  result: string;
  note: string;
}

const validationChecks: ValidationCheck[] = [
  {
    id: "chk_001",
    label: "shopify",
    command: "./validate --source=shopify --against=native",
    source: "Shopify",
    scope: "Store revenue and order data",
    result: "within 1% of native reporting",
    note: "Credentials pulled through Shopify's 2026 developer dashboard changes, then reconciled line by line against the store's own reporting before the pipeline was accepted.",
  },
  {
    id: "chk_002",
    label: "meta-ads",
    command: "./validate --source=meta_ads --against=native",
    source: "Meta Ads",
    scope: "Ad spend and campaign performance",
    result: "within 1% of native reporting",
    note: "Meta's token architecture is the part most builds get wrong. Access was set up to survive expiry, and the numbers were matched back to Ads Manager.",
  },
  {
    id: "chk_003",
    label: "google-ads",
    command: "./validate --source=google_ads --against=native",
    source: "Google Ads",
    scope: "Ad spend and campaign performance",
    result: "within 1% of native reporting",
    note: "Pulled through the API rather than a scheduled export, so the dashboard is not waiting on a CSV that somebody has to remember to send.",
  },
  {
    id: "chk_004",
    label: "klaviyo",
    command: "./validate --source=klaviyo --against=native",
    source: "Klaviyo",
    scope: "Email and SMS revenue",
    result: "within 1% of native reporting",
    note: "Owned-channel revenue sits in the same database as paid, which is the only way the two stop disagreeing with each other.",
  },
  {
    id: "chk_005",
    label: "impact",
    command: "./validate --source=impact --against=native",
    source: "Impact",
    scope: "Affiliate and partner revenue",
    result: "within 1% of native reporting",
    note: "Fifth pipeline of five. A Loop Subscription integration was built on top of this, outside the original scope of the engagement.",
  },
];

const TypingText = ({ text, speed = 20, onComplete }: { text: string; speed?: number; onComplete?: () => void }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <>{displayed}</>;
};

const TestimonialsTerminal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [commandTyped, setCommandTyped] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = validationChecks[activeIndex];

  // Auto-cycle
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTyping(true);
      setCommandTyped(false);
      setActiveIndex((prev) => (prev + 1) % validationChecks.length);
    }, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleSelect = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTyping(true);
    setCommandTyped(false);
    setActiveIndex(index);
    intervalRef.current = setInterval(() => {
      setTyping(true);
      setCommandTyped(false);
      setActiveIndex((prev) => (prev + 1) % validationChecks.length);
    }, 7000);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3"
        >
          Validation Log
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground font-sans mb-10 sm:mb-12 text-sm sm:text-base"
        >
          Five pipelines built for a $1.5M/yr US DTC supplement brand. Each one checked against the platform's own
          reporting before it was handed over.
        </motion.p>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg overflow-hidden text-left"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <div className="w-3 h-3 rounded-full bg-success/60" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">pipeline-validation — bash</span>
          </div>

          {/* Terminal content */}
          <div className="p-4 sm:p-6 min-h-[260px] sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Command line */}
                <div className="font-mono text-xs sm:text-sm mb-4">
                  <span className="text-primary">autonixlab</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-success">~</span>
                  <span className="text-muted-foreground">$ </span>
                  <span className="terminal-text">
                    <TypingText
                      text={current.command}
                      speed={15}
                      onComplete={() => {
                        setCommandTyped(true);
                        setTyping(false);
                      }}
                    />
                    {typing && <span className="cursor-blink text-primary">█</span>}
                  </span>
                </div>

                {/* Output */}
                {commandTyped && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="font-mono text-xs text-muted-foreground">
                      <span className="text-muted-foreground/60">------- RECONCILIATION -------</span>
                    </div>

                    {/* Check metadata */}
                    <div className="font-mono text-xs space-y-1">
                      <div>
                        <span className="text-muted-foreground">CHECK_ID: </span>
                        <span className="text-foreground">{current.id}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">SOURCE: </span>
                        <span className="text-foreground">{current.source}</span>
                        <span className="text-muted-foreground"> // {current.scope}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">VARIANCE: </span>
                        <span className="text-primary font-bold">vs. platform native </span>
                        <span className="text-success font-bold">{current.result}</span>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="border-l-2 border-primary pl-4 py-2 mt-2">
                      <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed">{current.note}</p>
                    </div>

                    <div className="font-mono text-xs text-muted-foreground/60">
                      <span>------- PIPELINE ACCEPTED -------</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Source selector */}
          <div className="border-t border-border px-4 py-3 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs text-muted-foreground font-mono shrink-0">SOURCES:</span>
            {validationChecks.map((check, i) => (
              <button
                key={check.id}
                onClick={() => handleSelect(i)}
                className={`text-xs font-mono px-2 sm:px-3 py-1 rounded transition-all shrink-0 ${
                  i === activeIndex
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {check.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground font-mono mt-6 text-left sm:text-center"
        >
          Unified in Supabase. Custom React frontend on Vercel, login-protected. Phase 1 complete and billed. Phase 2,
          product-level attribution, is scoped.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsTerminal;
