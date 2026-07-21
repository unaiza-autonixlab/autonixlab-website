import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-10">

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/50 text-sm font-mono">Last updated: June 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">1. Who We Are</h2>
          <p className="text-white/70 leading-7">
            Autonix Lab is a marketing automation and analytics agency that builds
            custom performance dashboards for businesses. We connect to advertising
            platforms including Google Ads, Meta Ads, Shopify, Klaviyo, and affiliate
            networks via their official APIs to provide clients with consolidated,
            real-time reporting.
          </p>
          <p className="text-white/70 leading-7">
            Contact: <a href="mailto:hello@autonixlab.com" className="text-orange-400 hover:text-orange-300 underline">hello@autonixlab.com</a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">2. Data We Access</h2>
          <p className="text-white/70 leading-7">
            We access advertising and business data solely on behalf of our clients,
            and only after explicit authorization through each platform's official
            OAuth 2.0 or API authentication flow. The data we access includes:
          </p>
          <ul className="list-disc list-inside text-white/70 space-y-1 leading-7 pl-2">
            <li>Ad campaign performance metrics (spend, impressions, clicks, conversions)</li>
            <li>Aggregated revenue and order data from e-commerce platforms</li>
            <li>Email campaign performance data (open rates, click rates, attributed revenue)</li>
            <li>Affiliate program performance data (clicks, conversions, commissions)</li>
          </ul>
          <p className="text-white/70 leading-7">
            We use read-only API access wherever available. We do not modify, delete,
            or create campaigns, orders, or customer records on behalf of clients unless
            explicitly scoped and agreed upon in writing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">3. How We Use Data</h2>
          <p className="text-white/70 leading-7">
            All data accessed through third-party APIs is used exclusively to provide
            the dashboard and reporting services requested by the client. Specifically:
          </p>
          <ul className="list-disc list-inside text-white/70 space-y-1 leading-7 pl-2">
            <li>Data is displayed in client-facing dashboards hosted on secure infrastructure</li>
            <li>Data is stored in private, client-isolated databases and never shared across clients</li>
            <li>Data is never sold, rented, or shared with third parties</li>
            <li>Data is never used for advertising, profiling, or any purpose outside of client reporting</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">4. Google Ads API Disclosure</h2>
          <p className="text-white/70 leading-7">
            Autonix Lab uses the Google Ads API to retrieve campaign performance data
            on behalf of clients who have explicitly granted access. Our use of Google
            Ads API data complies with the{" "}
              <a
                href="https://developers.google.com/google-ads/api/docs/api-policy/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Google Ads API Terms and Conditions
            </a>{" "}
            and the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. We do not use Google Ads data
            to serve advertisements or for any purpose beyond providing the reporting
            service to the authorized client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">5. Meta Ads API Disclosure</h2>
          <p className="text-white/70 leading-7">
            Autonix Lab uses the Meta Marketing API to retrieve ad performance data
            on behalf of clients who have explicitly granted access via a System User
            token or partner access. Our use of Meta data complies with Meta's{" "}
              <a
                href="https://developers.facebook.com/terms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Platform Terms
            </a>{" "}
            and{" "}
              <a
                href="https://developers.facebook.com/devpolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Developer Policies
            </a>
            . We access only the minimum required permissions (ads_read, read_insights)
            and do not use Meta data for any purpose beyond client reporting.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">6. Data Retention and Deletion</h2>
          <p className="text-white/70 leading-7">
            Client data is retained for the duration of the active service engagement.
            Upon contract termination or written request, all client data is deleted
            from our systems within 30 days. Clients may request deletion at any time
            by contacting hello@autonixlab.com.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">7. Security</h2>
          <p className="text-white/70 leading-7">
            All API credentials provided by clients are stored securely using
            environment variables and secret management tools. Credentials are never
            hardcoded, logged, or shared outside the authorized service infrastructure.
            Dashboards are protected by authenticated login and row-level security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">8. Revoking Access</h2>
          <p className="text-white/70 leading-7">
            Clients may revoke API access at any time by removing Autonix Lab's
            credentials from the respective platform (e.g., deleting the System User
            token in Meta Business Manager, removing the user from Google Ads).
            Revoking access will stop all data collection immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-orange-400 font-mono">9. Changes to This Policy</h2>
          <p className="text-white/70 leading-7">
            We may update this policy as our services evolve. The date at the top of
            this page reflects the most recent revision. Continued use of our services
            after any changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <div className="pt-6 border-t border-white/10">
          <Link to="/" className="text-orange-400 hover:text-orange-300 text-sm font-mono underline">
            ← Back to Autonix Lab
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
