export default function PrivacyPolicy() {
  return (
    <div className="container py-20 max-w-4xl">
      <h1 className="heading-1 text-gray-900 mb-8">Privacy Policy</h1>
      
      <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Lume (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="mb-4">
            We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
          <p className="mb-4">We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email address, phone number)</li>
            <li>Identification information (for insurance purposes)</li>
            <li>Watch collection details and valuations</li>
            <li>Payment and billing information</li>
            <li>Communications with us</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">Automatically Collected Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Legal Basis for Processing</h2>
          <p className="mb-4">We process your personal data based on:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Contract:</strong> To provide insurance services you&rsquo;ve requested</li>
            <li><strong>Legal obligations:</strong> To comply with insurance regulations and anti-money laundering requirements</li>
            <li><strong>Legitimate interests:</strong> To improve our services and prevent fraud</li>
            <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process insurance applications and claims</li>
            <li>Verify your identity and prevent fraud</li>
            <li>Communicate with you about your insurance</li>
            <li>Send service updates and marketing communications (with consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Information Sharing</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Insurance underwriters and reinsurers</li>
            <li>Regulatory bodies (FCA, ICO)</li>
            <li>Professional advisers and service providers</li>
            <li>Credit reference agencies (where applicable)</li>
            <li>Law enforcement agencies (when required by law)</li>
          </ul>
          <p className="mb-4">
            We will never sell your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organisational measures to protect your personal data against 
            unauthorised access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Staff training on data protection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
          <p className="mb-4">
            We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, 
            including satisfying legal, accounting, or reporting requirements. Insurance records are typically retained 
            for a minimum of 7 years after the policy ends.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
          <p className="mb-4">Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
            <li>Withdraw consent (where processing is based on consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. 
            For more information, please see our Cookie Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. International Transfers</h2>
          <p className="mb-4">
            Your data may be transferred to and processed in countries outside the UK. We ensure appropriate 
            safeguards are in place for such transfers in compliance with UK data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any material changes 
            by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: hello@getlume.co.uk</p>
            <p>Website: www.getlume.co.uk</p>
          </div>
          <p className="mt-4">
            You also have the right to lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at 
            <a href="https://ico.org.uk" className="text-primary-600 hover:underline"> ico.org.uk</a>
          </p>
        </section>
      </div>
    </div>
  );
}