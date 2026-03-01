import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const CTAFooter = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwzgkqo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/90 to-accent/90 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Ready to Exit Manual Mode?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-primary-foreground/80 font-sans mb-8 sm:mb-10"
        >
          Book a 20-minute diagnostic. We'll map your biggest bottleneck.
        </motion.p>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-lg sm:text-xl py-8"
          >
            <span style={{ color: "#00FF41", textShadow: "0 0 10px #00FF41" }}>
              &gt; Transmission Sent ✓
            </span>
            <p className="text-primary-foreground/70 text-sm mt-3 font-sans">
              We'll be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3 max-w-lg mx-auto text-left"
          >
            <div>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name"
                className="w-full bg-background text-foreground border border-border rounded-md px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.name && <p className="text-xs mt-1 text-background font-mono">[ERROR] {errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-background text-foreground border border-border rounded-md px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.email && <p className="text-xs mt-1 text-background font-mono">[ERROR] {errors.email}</p>}
            </div>
            <div>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your bottleneck..."
                rows={3}
                className="w-full bg-background text-foreground border border-border rounded-md px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              {errors.message && <p className="text-xs mt-1 text-background font-mono">[ERROR] {errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-background text-foreground font-mono font-semibold px-6 py-3 rounded-md hover:bg-secondary transition-colors text-sm whitespace-nowrap disabled:opacity-50"
            >
              {status === "sending" ? "[ Transmitting... ]" : "[ Initialize System ]"}
            </button>
            {status === "error" && (
              <p className="text-xs text-background font-mono text-center">[ERROR] Transmission failed. Try again.</p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default CTAFooter;
