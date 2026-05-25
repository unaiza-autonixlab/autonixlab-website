const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="text-white/70">
          Last updated: May 2026
        </p>

        <div className="space-y-6 text-white/80 leading-7">
          <p>
            Autonix Lab provides analytics and reporting tools for businesses
            using the Google Ads API and other marketing platforms.
          </p>

          <p>
            We only access data that users explicitly authorize through secure
            authentication methods. Our platform uses read-only access wherever
            possible and does not make changes to advertising campaigns.
          </p>

          <p>
            We do not sell, rent, or share client data with third parties.
            Client data is used solely for analytics, reporting, and dashboard
            functionality requested by the client.
          </p>

          <p>
            Users may revoke access to their connected accounts at any time.
            Upon request or account termination, associated data may be deleted
            from our systems.
          </p>

          <p>
            We implement reasonable technical and organizational safeguards to
            protect user data and maintain secure infrastructure.
          </p>

          <p>
            If you have questions regarding this Privacy Policy, contact:
            hello@autonixlab.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
