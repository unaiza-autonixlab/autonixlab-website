import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, DollarSign, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import pipelineStackImg from "@/assets/brand_brain_ss.png";
import cookieMonsterImg from "@/assets/blog_post_ss.png";
import coldEmailImg from "@/assets/lead_machine_ss.png";

const caseStudyImages: Record<string, string> = {
  "five-pipeline-reporting-stack": pipelineStackImg,
  "cookie-monster": cookieMonsterImg,
  "cold-email-engine": coldEmailImg,
};

const allCaseStudies: Record<string, {
  name: string;
  problem: string;
  solution: string;
  scope?: string;
  results?: { metric: string; before: string; after: string }[];
  quote?: string;
  quoteAuthor?: string;
  stats: { label: string; value: string }[];
}> = {
  "five-pipeline-reporting-stack": {
    name: "FIVE PIPELINE STACK",
    problem:
      "A $1.5M/yr US DTC supplement brand ran its entire marketing reporting out of a manually updated Excel file. The numbers in it came from five separate platforms: Shopify, Meta Ads, Google Ads, Klaviyo and Impact. Someone had to open each platform, pull the figures and key them in before anyone could look at performance. Nothing in that file reconciled itself, and nothing in it had been checked against the platforms the numbers came from.",
    solution:
      "Five live API pipelines, one per platform, built with Claude Code. The data lands unified in Supabase and is surfaced through a custom React frontend deployed on Vercel, login protected so their team can use it directly. Before handover, every pipeline was validated to within 1% of that platform's own native reporting, so the dashboard can be checked against Shopify, Meta, Google, Klaviyo and Impact directly and hold up. A Loop Subscription integration was delivered on top of the agreed scope.",
    scope:
      "Delivered solo, start to finish: discovery, API credential retrieval across all five platforms, build, validation and delivery. The credential work was the slowest part of the engagement, not the code. Shopify's 2026 developer dashboard changes and Meta's token architecture each had to be navigated before a single row of data could move. Phase 1 is complete and billed. Phase 2, product level attribution, is scoped.",
    results: [
      { metric: "Data Source", before: "Manual Excel file", after: "5 live API pipelines" },
      { metric: "Places To Look", before: "5 platforms", after: "1 login protected dashboard" },
      { metric: "Number Accuracy", before: "Hand keyed", after: "Within 1% of native reporting" },
      { metric: "Data Store", before: "Spreadsheet", after: "Supabase" },
    ],
    stats: [
      { label: "Delivery", value: "Solo, end to end" },
      { label: "Status", value: "Phase 1 complete, billed" },
      { label: "Validation", value: "Within 1% of native" },
    ],
  },
  "cookie-monster": {
    name: "COOKIE MONSTER",
    problem:
      "Instagram competitor tracking is manual work. Someone opens the accounts, scrolls, screenshots what looks relevant and drops it into a document that nobody reopens. It happens when there is time for it, which is not on a schedule, and the output is not in a format anyone acts on.",
    solution:
      "An automated Instagram competitor intelligence report, compiled and delivered into Telegram rather than another dashboard to log into. It is in use by agency clients and was the first system I productized. The same pattern produced Prime Suspect, which runs Amazon ASIN and competitor analysis reports, and Post Malone, which handles content automation.",
    stats: [
      { label: "Delivery", value: "Telegram, automated" },
      { label: "Status", value: "Running for agency clients" },
      { label: "Origin", value: "First productized system" },
    ],
  },
  "cold-email-engine": {
    name: "COLD EMAIL ENGINE",
    problem:
      "A solo operator selling technical builds has no sales team and no referral volume to coast on. Generic outbound gets deleted, and the alternative is waiting on inbound that may not arrive.",
    solution:
      "An AI driven cold email system, built and run in house on my own pipeline. It reached a 3.68% reply rate and closed high ticket work. Running it on my own book first is why I will talk about what the numbers actually did rather than what the tooling promises.",
    stats: [
      { label: "Reply Rate", value: "3.68%" },
      { label: "Outcome", value: "Closed high ticket work" },
      { label: "Built By", value: "Solo, in house" },
    ],
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
                  <p className="text-xs text-muted-foreground font-sans">{study.stats[0].label}</p>
                  <p className="font-mono font-bold text-foreground">{study.stats[0].value}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-sans">{study.stats[1].label}</p>
                  <p className="font-mono font-bold text-foreground">{study.stats[1].value}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-sans">{study.stats[2].label}</p>
                  <p className="font-mono font-bold text-foreground">{study.stats[2].value}</p>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/unaiza-autonixlab/discovery-call"
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
              className="w-full h-64 md:h-80 bg-secondary border border-border rounded-lg overflow-hidden mb-12"
            >
              {slug && caseStudyImages[slug] ? (
                <img src={caseStudyImages[slug]} alt={`${study.name} screenshot`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-sm text-muted-foreground font-mono">System Screenshot</p>
                </div>
              )}
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

            {/* Scope */}
            {study.scope && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">[ SCOPE ]</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-12 max-w-[600px]">{study.scope}</p>
              </motion.div>
            )}

            {/* Results */}
            {study.results && study.results.length > 0 && (
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
            )}

            {/* Testimonial */}
            {study.quote && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h2 className="font-mono text-sm uppercase tracking-widest text-primary mb-4">[ TESTIMONIAL ]</h2>
                <blockquote className="border-l-2 border-primary pl-6 py-4 bg-secondary/30 rounded-r-lg mb-12">
                  <p className="italic text-muted-foreground font-sans leading-relaxed">"{study.quote}"</p>
                  {study.quoteAuthor && (
                    <p className="text-sm text-muted-foreground mt-3 font-sans">— {study.quoteAuthor}</p>
                  )}
                </blockquote>
              </motion.div>
            )}

            {/* Final CTA */}
            <a
              href="https://calendly.com/unaiza-autonixlab/discovery-call"
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
