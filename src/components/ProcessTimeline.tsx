import { motion } from "framer-motion";

const steps = [
  { num: "01", label: "DIAGNOSTIC", desc: "Map your bottlenecks" },
  { num: "02", label: "BLUEPRINT", desc: "Design the system" },
  { num: "03", label: "BUILD", desc: "Deploy in 14 days" },
  { num: "04", label: "HANDOFF", desc: "You own it forever" },
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Deployment Protocol
        </motion.h2>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <motion.div
            className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-primary/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground text-sm mb-4">
                {step.num}
              </div>
              <p className="font-mono font-bold text-foreground text-sm mb-1">{step.label}</p>
              <p className="text-xs text-muted-foreground font-sans">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground text-xs shrink-0">
                {step.num}
              </div>
              <div>
                <p className="font-mono font-bold text-foreground text-sm">{step.label}</p>
                <p className="text-xs text-muted-foreground font-sans">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
