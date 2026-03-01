import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  slug: string;
  name: string;
  oneLiner: string;
  image?: string;
  problem: string;
  solution: string;
  results: { metric: string; before: string; after: string }[];
  quote: string;
  quoteAuthor: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "compete-iq",
    name: "COMPETE IQ",
    oneLiner: "Your competitors publish content that works. You're guessing. This steals their playbook automatically.",
    problem: "Marketing agencies spend 15+ hours weekly manually tracking competitor content, pricing changes, and campaign strategies. By the time insights reach the strategy team, they're already outdated.",
    solution: "An automated brand intelligence scraper that monitors competitor websites, social channels, and ad libraries in real-time, delivering structured insights to your dashboard every morning.",
    results: [
      { metric: "Research Time", before: "15 hrs/week", after: "0 hrs/week" },
      { metric: "Insight Freshness", before: "2 weeks old", after: "Real-time" },
      { metric: "Competitive Wins", before: "22%", after: "47%" },
    ],
    quote: "We went from reacting to competitors to predicting their moves. Game changer.",
    quoteAuthor: "Agency Founder, 8-person team",
  },
  {
    slug: "lead-score",
    name: "LEAD SCORE",
    oneLiner: "Stop wasting sales calls on $500-budget prospects. AI qualifies every lead in 3 seconds.",
    problem: "Sales teams waste 60% of their calls on unqualified leads. Without intelligent scoring, every inquiry gets the same treatment regardless of budget, timeline, or fit.",
    solution: "An AI-powered lead qualification engine that scores every inbound lead in seconds, auto-routes high-value prospects to sales, and nurtures lower-tier leads via personalized email sequences.",
    results: [
      { metric: "Qualification Time", before: "24 hours", after: "3 seconds" },
      { metric: "Sales Call Quality", before: "32% qualified", after: "89% qualified" },
      { metric: "Close Rate", before: "12%", after: "34%" },
    ],
    quote: "Our sales team finally stopped chasing ghosts. Every call is now with someone ready to buy.",
    quoteAuthor: "Sales Director, Digital Agency",
  },
  {
    slug: "lead-machine",
    name: "THE LEAD MACHINE",
    oneLiner: "Outbound that doesn't feel like spam. AI-personalized outreach at scale.",
    problem: "Agencies rely on referrals and pray for inbound leads. Cold outreach feels spammy, generic, and produces <1% response rates. Growth plateaus without predictable pipeline.",
    solution: "A full outbound automation engine that researches prospects, crafts personalized messages using AI, sequences multi-channel touchpoints, and books meetings directly into your calendar.",
    results: [
      { metric: "Response Rate", before: "0.8%", after: "12%" },
      { metric: "Meetings Booked", before: "3/month", after: "22/month" },
      { metric: "Pipeline Value", before: "$15K", after: "$180K" },
    ],
    quote: "We went from feast-or-famine to a predictable pipeline within 3 weeks.",
    quoteAuthor: "CEO, Growth Marketing Agency",
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
          <div className="h-[55%] bg-secondary flex items-center justify-center border-b border-border relative overflow-hidden">
            {study.image ? (
              <img src={study.image} alt={`${study.name} screenshot`} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center">
                <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-xs text-muted-foreground font-mono">System Screenshot</p>
              </div>
            )}
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

          <div className="border-l-2 border-primary pl-3 mb-3">
            <p className="text-xs italic text-muted-foreground font-sans">"{study.quote}"</p>
            <p className="text-[10px] text-muted-foreground mt-1">— {study.quoteAuthor}</p>
          </div>

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
            Each system is live, operational, and generating ROI within 14 days
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
