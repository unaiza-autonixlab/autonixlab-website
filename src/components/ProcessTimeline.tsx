import { motion } from "framer-motion";

const steps = [
  { num: "01", label: "AUDIT", desc: "Find every platform the numbers live in" },
  { num: "02", label: "ACCESS", desc: "Retrieve and secure the API credentials" },
  { num: "03", label: "BUILD", desc: "Pipelines into one database" },
  { num: "04", label: "VALIDATE", desc: "Reconcile each source against its native reporting" },
  { num: "05", label: "HANDOFF", desc: "Login-protected dashboard, credentials and schema included" },
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 sm:mb-16"
        >
          How The Build Runs
        </motion.h2>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start justify-between relative gap-4">
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
              className="flex flex-col items-center text-center relative z-10 flex-1"
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
        <div className="md:hidden space-y-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-4"
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground font-sans mt-10 sm:mt-12 max-w-2xl mx-auto"
        >
          Step 04 is the one nobody else shows you. A pipeline that pulls data is easy. A pipeline whose totals agree
          with the platform it came from is the job.
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessTimeline;
