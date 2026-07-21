import { motion } from "framer-motion";
import { Database, Target, TrendingUp } from "lucide-react";

const stats = [
{ icon: Database, label: "Platform APIs unified", value: "5" },
{ icon: Target, label: "Variance vs native reporting", value: "<1%" },
{ icon: TrendingUp, label: "Client revenue instrumented", value: "$1.5M" }];


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
            <img

              alt="Unaiza Masood"
              className="w-full h-full object-cover" src="/lovable-uploads/b8af770b-9503-4384-998a-1211b612d8f8.png" />

          </div>
          <div>
            <p className="font-mono font-semibold text-foreground text-lg">Unaiza Masood</p>
            <p className="text-sm text-primary font-mono mb-3">Founder, AutonixLab</p>
            <div className="text-sm text-muted-foreground font-sans max-w-md leading-relaxed space-y-3">
              <p>
                I came into tech from physiotherapy. No CS degree, no bootcamp. I learned
                by shipping: Make.com, then n8n, then Claude Code, which is what I build
                with now alongside Node, Supabase and React.
              </p>
              <p>
                I build the data layer agencies and DTC brands actually run on. Most
                recently: five API pipelines feeding a live dashboard for a $1.5M US
                supplement brand whose marketing reporting had been a spreadsheet someone
                updated by hand every week.
              </p>
              <p>
                I work solo, from Karachi, with US clients. Discovery, credentials, build,
                validation and delivery are all me.
              </p>
            </div>
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
            </div>)}
        </div>
      </div>
    </motion.section>);};export default FounderBar;
