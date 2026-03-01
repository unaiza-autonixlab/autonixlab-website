import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  command: string;
  author: string;
  role: string;
  message: string;
  metric: string;
  metricValue: string;
}

const testimonials: Testimonial[] = [
  {
    id: "sig_001",
    command: "cat /var/log/client-signals/agency-founder.log",
    author: "Sarah K.",
    role: "Agency Founder, 8-person team",
    message: "We went from reacting to competitors to predicting their moves. Game changer.",
    metric: "COMPETITIVE_WINS",
    metricValue: "+113%",
  },
  {
    id: "sig_002",
    command: "cat /var/log/client-signals/sales-director.log",
    author: "Marcus T.",
    role: "Sales Director, Digital Agency",
    message: "Our sales team finally stopped chasing ghosts. Every call is now with someone ready to buy.",
    metric: "CLOSE_RATE",
    metricValue: "+183%",
  },
  {
    id: "sig_003",
    command: "cat /var/log/client-signals/ceo-growth.log",
    author: "Elena R.",
    role: "CEO, Growth Marketing Agency",
    message: "We went from feast-or-famine to a predictable pipeline within 3 weeks.",
    metric: "PIPELINE_VALUE",
    metricValue: "+1100%",
  },
  {
    id: "sig_004",
    command: "cat /var/log/client-signals/ops-lead.log",
    author: "James W.",
    role: "Ops Lead, Creative Studio",
    message: "Monday reporting used to kill half my day. Now it's fully automated — I just review the dashboard.",
    metric: "TIME_SAVED",
    metricValue: "12 hrs/week",
  },
  {
    id: "sig_005",
    command: "cat /var/log/client-signals/marketing-vp.log",
    author: "Priya N.",
    role: "VP Marketing, SaaS Startup",
    message: "The outbound engine booked 22 meetings in the first month. We couldn't do that with 3 SDRs.",
    metric: "MEETINGS_BOOKED",
    metricValue: "22/month",
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

  const current = testimonials[activeIndex];

  // Auto-cycle
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTyping(true);
      setCommandTyped(false);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
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
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
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
          Client Signals
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground font-sans mb-10 sm:mb-12 text-sm sm:text-base"
        >
          Intercepted transmissions from deployed systems
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
            <span className="ml-3 text-xs text-muted-foreground font-mono">client-signals — bash</span>
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
                      <span className="text-muted-foreground/60">------- SIGNAL DECODED -------</span>
                    </div>

                    {/* Signal metadata */}
                    <div className="font-mono text-xs space-y-1">
                      <div>
                        <span className="text-muted-foreground">SIGNAL_ID: </span>
                        <span className="text-foreground">{current.id}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">SOURCE: </span>
                        <span className="text-foreground">{current.author}</span>
                        <span className="text-muted-foreground"> // {current.role}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">IMPACT: </span>
                        <span className="text-primary font-bold">{current.metric} </span>
                        <span className="text-success font-bold">{current.metricValue}</span>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="border-l-2 border-primary pl-4 py-2 mt-2">
                      <p className="font-sans text-sm sm:text-base text-foreground italic leading-relaxed">
                        "{current.message}"
                      </p>
                    </div>

                    <div className="font-mono text-xs text-muted-foreground/60">
                      <span>------- END SIGNAL -------</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Signal selector */}
          <div className="border-t border-border px-4 py-3 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs text-muted-foreground font-mono shrink-0">SIGNALS:</span>
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => handleSelect(i)}
                className={`text-xs font-mono px-2 sm:px-3 py-1 rounded transition-all shrink-0 ${
                  i === activeIndex
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {t.id}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsTerminal;
