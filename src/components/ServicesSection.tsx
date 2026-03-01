import { motion } from "framer-motion";

const services = [
  { cmd: "compete-iq", desc: "Market Intelligence" },
  { cmd: "lead-score", desc: "Qualification Engine" },
  { cmd: "lead-machine", desc: "Outbound Automation" },
  { cmd: "content-calendar", desc: "Asset Production" },
  { cmd: "brain-box", desc: "Content Intelligence" },
  { cmd: "agency-os", desc: "Full Operating System" },
];

const ServicesSection = () => {
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
            <motion.div
              key={svc.cmd}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="service-line font-mono text-xs sm:text-sm md:text-base py-3 px-3 sm:px-4 rounded-md hover:bg-secondary/50 flex items-center gap-2"
            >
              <span className="text-muted-foreground">$</span>
              <span className="text-muted-foreground">./install</span>
              <span className="text-primary font-semibold">{svc.cmd}</span>
              <span className="text-muted-foreground ml-auto hidden sm:inline">[{svc.desc}]</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
