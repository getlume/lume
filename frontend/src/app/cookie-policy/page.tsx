export default function CookiePolicy() {
  return (
    <div className="container py-20 max-w-4xl">
      <h1 className="heading-1 text-gray-900 mb-8">Cookie Policy</h1>
      
      <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            understanding how you use our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve our website performance</li>
            <li>Provide relevant content and marketing</li>
            <li>Ensure website security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable basic 
            functions like page navigation and access to secure areas of the website.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
          <p className="mb-4">
            These cookies help us understand how visitors interact with our website by collecting 
            and reporting information anonymously. We use this information to improve our website.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
          <p className="mb-4">
            These cookies enable the website to provide enhanced functionality and personalisation. 
            They may be set by us or by third party providers whose services we use.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
          <p className="mb-4">
            These cookies may be set through our site by our advertising partners. They may be used 
            to build a profile of your interests and show you relevant adverts on other sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
          <p className="mb-4">
            Some cookies are placed by third party services that appear on our pages. We do not 
            control these cookies and you should refer to the third party privacy policies for 
            more information. Third parties we work with include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics (performance tracking)</li>
            <li>Formspree (form submissions)</li>
            <li>Vercel Analytics (site performance)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Cookie Duration</h2>
          <p className="mb-4">Cookies can be either session or persistent:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Managing Cookies</h2>
          <p className="mb-4">
            You can control and manage cookies in various ways. Please note that removing or 
            blocking cookies may impact your user experience and parts of our website may no 
            longer be fully accessible.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Browser Controls</h3>
          <p className="mb-4">
            Most browsers allow you to view, manage, delete and block cookies for a website. 
            Be aware that if you delete all cookies, any preferences you have set will be lost.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">How to Manage Cookies in Popular Browsers:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-GB/kb/clear-cookies-and-site-data-firefox" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" className="text-primary-600 hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Do Not Track</h2>
          <p className="mb-4">
            Some browsers offer a &ldquo;Do Not Track&rdquo; setting, but there is no industry standard for 
            how websites should respond to these signals. Our website does not currently respond 
            to Do Not Track signals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices 
            or for legal reasons. We will notify you of any material changes by updating the 
            &ldquo;Last updated&rdquo; date at the top of this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have questions about our use of cookies, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: hello@getlume.co.uk</p>
            <p>Website: www.getlume.co.uk</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. More Information</h2>
          <p className="mb-4">
            For more information about cookies and how to manage them, visit:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><a href="https://www.allaboutcookies.org" className="text-primary-600 hover:underline">www.allaboutcookies.org</a></li>
            <li><a href="https://ico.org.uk/for-the-public/online/cookies/" className="text-primary-600 hover:underline">Information Commissioner&rsquo;s Office (ICO)</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}