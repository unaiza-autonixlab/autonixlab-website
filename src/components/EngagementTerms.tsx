import { motion } from "framer-motion";
import { Lock, KeyRound, Clock, CheckCircle2 } from "lucide-react";

// Pricing lives here so it changes in one place.
const PRICING = {
  buildFrom: "$3,500",
  retainerFrom: "$750",
};

const guarantees = [
{
  icon: KeyRound,
  title: "Everything is built in your accounts",
  body:
  "Supabase project, hosting, and every platform connection sit under your credentials. I get access, never ownership. You keep admin from day one and after we finish."
},
{
  icon: Lock,
  title: "Least access, for as long as it takes",
  body:
  "Read access first. Write access only where a pipeline needs it. Credentials go in a password manager, never in code, and access is handed back when the build ships."
},
{
  icon: CheckCircle2,
  title: "Numbers are reconciled, not asserted",
  body:
  "Every pipeline is checked against the platform's own reporting before handover. If a figure on your dashboard disagrees with Meta or Shopify, that is a bug and I fix it."
},
{
  icon: Clock,
  title: "You get a reply within one business hour",
  body:
  "I work from Karachi with a fixed daily overlap for US and UK hours. Written updates land whether or not we are both awake."
}];


const faqs = [
{
  q: "What happens if you disappear?",
  a:
  "The stack runs in your accounts on standard tools. Schema, pipelines and repo are yours and documented at handover. Any competent data engineer can pick it up, which is the point."
},
{
  q: "Who owns the code?",
  a:
  "You do. It ships to your repo. I do not hold anything back as leverage and there is nothing proprietary in the middle that stops you leaving."
},
{
  q: "How do I know the numbers are right?",
  a:
  "Each pipeline is validated against the source platform's native reporting before it goes live. The most recent build held variance under 1% across all five platforms."
},
{
  q: "What do you need from me?",
  a:
  "Admin access to grant API credentials, and about an hour for discovery. I handle the credential retrieval itself, including the parts that are genuinely awkward, like Shopify's 2026 developer dashboard and Meta's token setup."
},
{
  q: "What if my stack is not the same five platforms?",
  a:
  "Most of the work is the same shape. If a platform has an API, it can be a pipeline. Connector count is what moves the price."
}];


const EngagementTerms = () => {
  return (
    <section id="engagement" className="py-20 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>

          <p className="font-mono text-xs text-primary tracking-widest mb-3">
            WHAT IT COSTS AND HOW IT WORKS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
            No quote required to find out{" "}
            <span className="text-gradient-orange">if this is affordable</span>
          </h2>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid gap-4 sm:grid-cols-2 mb-12">

          <div className="border border-border bg-card rounded-lg p-6">
            <p className="font-mono text-xs text-muted-foreground mb-2">THE BUILD</p>
            <p className="font-mono text-3xl font-bold text-foreground mb-1">
              from {PRICING.buildFrom}
            </p>
            <p className="text-sm text-muted-foreground font-sans mb-4">
              One-off. Price moves with how many platforms you pull from and how messy the
              data is underneath.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans">
              <li>API pipeline per platform</li>
              <li>Unified schema in your Supabase project</li>
              <li>Custom dashboard, login-protected for your team</li>
              <li>Validation against each platform's own reporting</li>
            </ul>
          </div>

          <div className="border border-border bg-card rounded-lg p-6">
            <p className="font-mono text-xs text-muted-foreground mb-2">ONGOING</p>
            <p className="font-mono text-3xl font-bold text-foreground mb-1">
              from {PRICING.retainerFrom}
              <span className="text-base text-muted-foreground">/mo</span>
            </p>
            <p className="text-sm text-muted-foreground font-sans mb-4">
              Optional. Platforms change their APIs whether or not you are ready.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans">
              <li>Pipeline monitoring and repair</li>
              <li>API and token changes handled</li>
              <li>New platforms added as you adopt them</li>
              <li>Reporting changes on request</li>
            </ul>
          </div>
        </motion.div>

        {/* Guarantees */}
        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {guarantees.map((g, i) =>
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex gap-4 border border-border bg-card rounded-lg p-5">

              <g.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-sm font-semibold text-foreground mb-1.5">
                  {g.title}
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {g.body}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((f, i) =>
          <motion.div
            key={f.q}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="border-b border-border pb-3">

              <p className="font-mono text-sm text-foreground mb-1.5">
                <span className="text-primary mr-2">?</span>
                {f.q}
              </p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed pl-6">
                {f.a}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default EngagementTerms;
