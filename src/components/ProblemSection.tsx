import { motion } from "framer-motion";

const errors = [
  { code: "ERROR", msg: "Reporting takes 12 hours every Monday" },
  { code: "ERROR", msg: "Lead response time: 6 hours (competitor: 6 minutes)" },
  { code: "ERROR", msg: "Founder is the bottleneck in 8 critical processes" },
];

const ProblemSection = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-12"
        >
          Your Agency Is Stuck In{" "}
          <span className="text-gradient-orange">Manual Mode</span>
        </motion.h2>

        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12 text-center sm:text-left">
          {errors.map((err, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="font-mono text-xs sm:text-sm md:text-base bg-secondary/50 border border-border rounded-md p-3 sm:p-4"
            >
              <span className="text-destructive font-bold">[{err.code}]</span>{" "}
              <span className="text-muted-foreground">{err.msg}</span>
            </motion.div>
          ))}
        </div>

        <a href="#case-studies" className="btn-outline-glow inline-block text-sm px-6 sm:px-8 py-3 sm:py-4">
          [ Run Diagnostics ]
        </a>
      </div>
    </section>
  );
};

export default ProblemSection;
