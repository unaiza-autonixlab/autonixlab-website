import { motion } from "framer-motion";
import { Monitor, Users, Clock } from "lucide-react";

const stats = [
  { icon: Monitor, label: "Systems Built", value: "50+" },
  { icon: Users, label: "Agencies Scaled", value: "12+" },
  { icon: Clock, label: "Hours Saved", value: "10,000+" },
];

const FounderBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-secondary py-8 px-6 border-y border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Headshot placeholder */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full border-2 border-primary bg-card flex items-center justify-center text-primary font-mono font-bold text-xl glow-orange">
            UM
          </div>
          <div>
            <p className="font-mono font-semibold text-foreground">Unaiza Masood</p>
            <p className="text-sm text-muted-foreground font-sans">Founder, AutonixLab</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="font-mono font-bold text-foreground text-lg">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-sans">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FounderBar;
