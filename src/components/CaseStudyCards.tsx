import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import pipelineStackImg from "@/assets/brand_brain_ss.png";
import cookieMonsterImg from "@/assets/blog_post_ss.png";
import coldEmailImg from "@/assets/lead_machine_ss.png";

interface CaseStudy {
  slug: string;
  name: string;
  oneLiner: string;
  image: string;
  problem: string;
  solution: string;
  results?: { metric: string; before: string; after: string }[];
  quote?: string;
  quoteAuthor?: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "five-pipeline-reporting-stack",
    name: "FIVE PIPELINE STACK",
    oneLiner:
      "A $1.5M/yr US DTC supplement brand ran its marketing reporting out of a hand updated Excel file fed by five platforms. Now five live API pipelines feed one dashboard.",
    image: pipelineStackImg,
    problem:
      "Every number the brand made decisions on was re-keyed by hand into a spreadsheet from five separate platforms: Shopify, Meta Ads, Google Ads, Klaviyo and Impact. Nothing reconciled itself, and nothing was checked against the platforms it came from.",
    solution:
      "Five live API pipelines, built with Claude Code, unified in Supabase and surfaced through a custom React frontend on Vercel, login protected for their team. Every pipeline was validated to within 1% of that platform's own native reporting before handover.",
    results: [
      { metric: "Data Source", before: "Manual Excel file", after: "5 live API pipelines" },
      { metric: "Places To Look", before: "5 platforms", after: "1 login" },
      { metric: "Number Accuracy", before: "Hand keyed", after: "Within 1% of native" },
    ],
  },
  {
    slug: "cookie-monster",
    name: "COOKIE MONSTER",
    oneLiner:
      "Instagram competitor intelligence, compiled and pushed to Telegram. The first system I productized.",
    image: cookieMonsterImg,
    problem:
      "Competitor tracking on Instagram is done by hand, on no schedule, and the findings land in a document nobody reopens. Agencies do not need another dashboard to log into for it.",
    solution:
      "An automated Instagram competitor intelligence report delivered straight into Telegram, where the team already is. It runs for agency clients today and became the template for the reports that followed: Prime Suspect for Amazon ASIN and competitor analysis, and Post Malone for content automation.",
  },
  {
    slug: "cold-email-engine",
    name: "COLD EMAIL ENGINE",
    oneLiner:
      "The AI driven outbound system I built for my own pipeline. 3.68% reply rate, and it closed high ticket work.",
    image: coldEmailImg,
    problem:
      "Solo consultants selling technical builds have no sales team and no referral volume to fall back on. Generic outbound gets ignored, and the alternative is waiting for inbound that may not arrive.",
    solution:
      "An AI driven cold email system built and run in house. It produced a 3.68% reply rate and closed high ticket engagements. It is the same machinery behind the outbound work I build for clients, tested on my own pipeline first.",
  },
];

const FlipCard = ({ study }: { study: CaseStudy }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full cursor-pointer"
      style={{ height: 420 }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner w-full h-full relative ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front absolute inset-0 bg-card border border-border rounded-lg overflow-hidden hover:shadow-[0_8px_30px_hsl(20_100%_60%/0.2)] transition-all duration-300 hover:-translate-y-2 flex flex-col">
          <div className="h-[55%] bg-secondary border-b border-border overflow-hidden">
            <img src={study.image} alt={`${study.name} screenshot`} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-mono font-bold text-base sm:text-lg text-foreground mb-2">{study.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">{study.oneLiner}</p>
            </div>
            <div className="flex justify-end">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute inset-0 bg-card border border-primary rounded-lg overflow-hidden p-4 sm:p-5 flex flex-col">
          <h3 className="font-mono font-bold text-primary mb-3">{study.name}</h3>

          <p className="text-[10px] uppercase tracking-widest text-foreground font-mono mb-1">The Problem</p>
          <p className="text-xs text-muted-foreground font-sans mb-3 leading-relaxed line-clamp-2">{study.problem}</p>

          <p className="text-[10px] uppercase tracking-widest text-primary font-mono mb-1">The Solution</p>
          <p className="text-xs text-muted-foreground font-sans mb-3 leading-relaxed line-clamp-2">{study.solution}</p>

          {study.results && study.results.length > 0 && (
            <div className="border border-border rounded overflow-hidden mb-3 text-xs">
              <div className="grid grid-cols-3 bg-primary/20 font-mono text-primary">
                <div className="p-1.5 border-r border-border">Metric</div>
                <div className="p-1.5 border-r border-border">Before</div>
                <div className="p-1.5">After</div>
              </div>
              {study.results.map((r, i) => (
                <div key={i} className="grid grid-cols-3 border-t border-border text-muted-foreground font-sans">
                  <div className="p-1.5 border-r border-border">{r.metric}</div>
                  <div className="p-1.5 border-r border-border">{r.before}</div>
                  <div className="p-1.5 text-success font-semibold">{r.after}</div>
                </div>
              ))}
            </div>
          )}

          {study.quote && (
            <div className="border-l-2 border-primary pl-3 mb-3">
              <p className="text-xs italic text-muted-foreground font-sans">"{study.quote}"</p>
              {study.quoteAuthor && (
                <p className="text-[10px] text-muted-foreground mt-1">— {study.quoteAuthor}</p>
              )}
            </div>
          )}

          <Link
            to={`/case-study/${study.slug}`}
            className="mt-auto text-xs font-mono text-primary flex items-center justify-center gap-1 hover:gap-2 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            View Full Study <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CaseStudyCards = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Deployed Systems</h2>
          <p className="text-muted-foreground font-sans">
            Custom marketing data infrastructure for DTC brands and the agencies running their spend
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <FlipCard study={study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCards;
export { caseStudies };
