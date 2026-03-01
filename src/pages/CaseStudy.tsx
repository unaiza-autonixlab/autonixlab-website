import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, DollarSign, Zap, Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";

const allCaseStudies: Record<string, {
  name: string;
  problem: string;
  solution: string;
  results: { metric: string; before: string; after: string }[];
  quote: string;
  quoteAuthor: string;
  timeSaved: string;
  revenueImpact: string;
  deployed: string;
}> = {
  "compete-iq": {
    name: "COMPETE IQ",
    problem: "Marketing agencies spend 15+ hours weekly manually tracking competitor content, pricing changes, and campaign strategies. By the time insights reach the strategy team, they're already outdated. Teams rely on gut feeling rather than data, leading to campaigns that miss the mark and budgets that bleed out on underperforming channels.",
    solution: "An automated brand intelligence scraper that monitors competitor websites, social channels, and ad libraries in real-time, delivering structured insights to your dashboard every morning. The system categorizes competitor moves by threat level, identifies content gaps, and suggests counter-strategies based on historical performance data.",
    results: [
      { metric: "Research Time", before: "15 hrs/week", after: "0 hrs/week" },
      { metric: "Insight Freshness", before: "2 weeks old", after: "Real-time" },
      { metric: "Competitive Wins", before: "22%", after: "47%" },
    ],
    quote: "We went from reacting to competitors to predicting their moves. Game changer.",
    quoteAuthor: "Agency Founder, 8-person team",
    timeSaved: "15 hrs/week",
    revenueImpact: "$45,000/yr",
    deployed: "12 days",
  },
  "lead-score": {
    name: "LEAD SCORE",
    problem: "Sales teams waste 60% of their calls on unqualified leads. Without intelligent scoring, every inquiry gets the same treatment regardless of budget, timeline, or fit. The result: burnt-out sales reps, missed high-value prospects, and a conversion rate that embarrasses the marketing team who generated those leads.",
    solution: "An AI-powered lead qualification engine that scores every inbound lead in seconds, auto-routes high-value prospects to sales, and nurtures lower-tier leads via personalized email sequences. The system learns from closed deals to continuously improve scoring accuracy.",
    results: [
      { metric: "Qualification Time", before: "24 hours", after: "3 seconds" },
      { metric: "Sales Call Quality", before: "32% qualified", after: "89% qualified" },
      { metric: "Close Rate", before: "12%", after: "34%" },
    ],
    quote: "Our sales team finally stopped chasing ghosts. Every call is now with someone ready to buy.",
    quoteAuthor: "Sales Director, Digital Agency",
    timeSaved: "20 hrs/week",
    revenueImpact: "$120,000/yr",
    deployed: "10 days",
  },
  "lead-machine": {
    name: "THE LEAD MACHINE",
    problem: "Agencies rely on referrals and pray for inbound leads. Cold outreach feels spammy, generic, and produces <1% response rates. Growth plateaus without predictable pipeline. Founders know they need outbound but don't have the time, team, or tools to do it without sounding like every other agency in the inbox.",
    solution: "A full outbound automation engine that researches prospects, crafts personalized messages using AI, sequences multi-channel touchpoints, and books meetings directly into your calendar. Every message references the prospect's specific pain points, recent content, or company news.",
    results: [
      { metric: "Response Rate", before: "0.8%", after: "12%" },
      { metric: "Meetings Booked", before: "3/month", after: "22/month" },
      { metric: "Pipeline Value", before: "$15K", after: "$180K" },
    ],
    quote: "We went from feast-or-famine to a predictable pipeline within 3 weeks.",
    quoteAuthor: "CEO, Growth Marketing Agency",
    timeSaved: "25 hrs/week",
    revenueImpact: "$180,000/yr",
    deployed: "14 days",
  },
};

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? allCaseStudies[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-muted-foreground mb-4">System not found</p>
          <Link to="/" className="text-primary font-mono hover:underline">← Back to base</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
          {/* Sticky sidebar */}
          <aside className="lg:w-[30%] lg:sticky lg:top-24 lg:self-start">
            <Link to="/" className="text-sm text-muted-foreground font-mono flex items-center gap-2 mb-8 hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>

            <h1 className="font-mono font-bold text-3xl text-primary mb-8">{study.name}</h1>

            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-sans">Time Saved</p>
                  <p className="font-mono font-bold text-foreground">{study.timeSaved}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-sans">Revenue Impact</p>
                  <p className="font-mono font-bold text-foreground">{study.revenueImpact}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-sans">Deployed</p>
                  <p className="font-mono font-bold text-foreground">{study.deployed}</p>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow block text-center text-sm mb-4 w-full"
            >
              Book This System
            </a>
            <p className="text-xs text-muted-foreground font-sans">
              Questions? <a href="mailto:unaiza@autonixlab.com" className="text-primary hover:underline">unaiza@autonixlab.com</a>
            </p>
          </aside>

          {/* Main content */}
          <main className="lg:w-[70%]">
            {/* Hero image placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-64 md:h-80 bg-secondary border border-border rounded-lg flex items-center justify-center mb-12"
            >
              <div className="text-center">
                <Terminal className="w-16 h-16 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground font-mono">System Screenshot</p>
              </div>
            </motion.div>

            {/* Problem */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">[ PROBLEM ]</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-12 max-w-[600px]">{study.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">[ SOLUTION ]</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-12 max-w-[600px]">{study.solution}</p>
            </motion.div>

            {/* Results */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">[ RESULTS ]</h2>
              <div className="border border-border rounded-lg overflow-hidden mb-12">
                <div className="grid grid-cols-3 bg-primary/20 font-mono text-primary text-sm">
                  <div className="p-3 border-r border-border">Metric</div>
                  <div className="p-3 border-r border-border">Before</div>
                  <div className="p-3">After</div>
                </div>
                {study.results.map((r, i) => (
                  <div key={i} className="grid grid-cols-3 border-t border-border text-sm font-sans">
                    <div className="p-3 border-r border-border text-muted-foreground">{r.metric}</div>
                    <div className="p-3 border-r border-border text-muted-foreground">{r.before}</div>
                    <div className="p-3 text-success font-semibold">{r.after}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">[ TESTIMONIAL ]</h2>
              <blockquote className="border-l-2 border-primary pl-6 py-4 bg-secondary/30 rounded-r-lg mb-12">
                <p className="italic text-muted-foreground font-sans leading-relaxed">"{study.quote}"</p>
                <p className="text-sm text-muted-foreground mt-3 font-sans">— {study.quoteAuthor}</p>
              </blockquote>
            </motion.div>

            {/* Final CTA */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow inline-block text-sm"
            >
              [ Deploy This System → ]
            </a>
          </main>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
