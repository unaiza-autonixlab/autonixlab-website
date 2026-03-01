import { motion } from "framer-motion";
import { useState } from "react";

const CTAFooter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/90 to-accent/90 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Ready to Exit Manual Mode?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-primary-foreground/80 font-sans mb-10"
        >
          Book a 20-minute diagnostic. We'll map your biggest bottleneck.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-background text-foreground border border-border rounded-md px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="bg-background text-foreground font-mono font-semibold px-6 py-3 rounded-md hover:bg-secondary transition-colors text-sm whitespace-nowrap">
            [ Initialize System ]
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFooter;
