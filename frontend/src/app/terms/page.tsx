export default function Terms() {
  return (
    <div className="container py-20 max-w-4xl">
      <h1 className="heading-1 text-gray-900 mb-8">Terms of Service</h1>
      
      <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using Lume&rsquo;s website and services, you agree to be bound by these Terms of Service. 
            If you disagree with any part of these terms, you do not have permission to access our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Pre-Launch Notice</h2>
          <p className="mb-4">
            Lume is currently in development. By joining our waiting list, you understand that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Services are not yet available for purchase</li>
            <li>Features and pricing may change before launch</li>
            <li>Early access and promotional offers are subject to availability</li>
            <li>We will notify you via email when services become available</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Insurance Services</h2>
          <p className="mb-4">
            Once operational, Lume will provide specialist watch insurance services. Our insurance products will be:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Subject to underwriting criteria</li>
            <li>Regulated by the Financial Conduct Authority (FCA)</li>
            <li>Governed by separate insurance policy terms and conditions</li>
            <li>Available to UK residents aged 18 and over</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. User Obligations</h2>
          <p className="mb-4">You agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Comply with all applicable UK laws and regulations</li>
            <li>Not use our services for any unlawful purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including text, graphics, logos, and software, is the property of Lume 
            or its content suppliers and is protected by UK and international copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by UK law, Lume shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Privacy</h2>
          <p className="mb-4">
            Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy, 
            which also governs the site and informs users of our data collection practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any material changes 
            via email or through our website. Your continued use of the service after changes constitutes acceptance 
            of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
            Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts 
            of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
          <p className="mb-4">
            For questions about these Terms of Service, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: hello@getlume.co.uk</p>
            <p>Website: www.getlume.co.uk</p>
          </div>
        </section>
      </div>
    </div>
  );
}