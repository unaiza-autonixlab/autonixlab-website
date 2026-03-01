import { motion } from "framer-motion";
import { Monitor, Users, Clock } from "lucide-react";

const stats = [
{ icon: Monitor, label: "Systems Built", value: "50+" },
{ icon: Users, label: "Agencies Scaled", value: "12+" },
{ icon: Clock, label: "Hours Saved", value: "10,000+" }];


const FounderBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-secondary py-10 sm:py-12 px-4 sm:px-6 border-y border-border">

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Headshot + intro */}
        <div className="flex flex-col items-center text-center gap-4">
          {/* Headshot placeholder */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary bg-card flex items-center justify-center glow-orange overflow-hidden">
            {/* Replace this div with an <img> when you upload your headshot */}
            <span className="text-primary font-mono font-bold text-2xl sm:text-3xl">
            </span>
          </div>
          <div>
            <p className="font-mono font-semibold text-foreground text-lg">Unaiza Masood</p>
            <p className="text-sm text-primary font-mono mb-3">Founder, AutonixLab</p>
            <p className="text-sm text-muted-foreground font-sans max-w-md leading-relaxed">
              I architect zero-touch automation systems that free agency founders from
              operational chaos — turning manual workflows into machines that run 24/7.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {stats.map((stat) => <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="w-5 h-5 text-primary shrink-0" />
              <div className="text-center">
                <p className="font-mono font-bold text-foreground text-lg">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-sans">{stat.label}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>);

};

export default FounderBar;