export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-4 py-16 font-titillium">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center font-exo2">
          Privacy Policy
        </h1>
        
        <div className="bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8 text-neutral-200 space-y-8">
          <p className="text-sm text-neutral-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <p className="mb-6 leading-relaxed">
              No Name Graphic (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects the privacy of our website visitors and clients (&quot;you&quot; or &quot;your&quot;). This Privacy Policy describes the types of information we collect from and about you when you visit our website (www.nonamegraphic.com) (the &quot;Website&quot;) or social media channels (<a href="https://www.instagram.com/nnmegraphic" className="text-red-400 underline hover:text-red-300" target="_blank" rel="noopener noreferrer">https://www.instagram.com/nnmegraphic</a>), and how we use that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Information We Collect</h2>
            <p className="mb-4">We collect two types of information:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">Personal Information:</h3>
                <p>This is information that can be used to identify you as an individual, such as your name, email address, phone number, and company name. You provide this information to us voluntarily when you contact us through our contact form, subscribe to our newsletter, or request a quote.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">Non-Personal Information:</h3>
                <p>This is information that does not identify you as an individual, such as your IP address, browser type, operating system, referring URL, and the pages you visit on our Website. We collect this information automatically through cookies and other tracking technologies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Use of Information</h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and improve the Website and our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To send you marketing materials, such as newsletters and promotional offers (with your consent)</li>
              <li>To analyze how you use the Website</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Data Sharing and Handling</h2>
            <p className="mb-4">We will not share your personal information with third parties without your consent, except in the following cases:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>To service providers that help us operate the Website and provide our services, such as web hosting providers and email marketing platforms. These service providers are bound by contractual obligations to keep your information confidential.</li>
              <li>To comply with legal and regulatory requirements, such as a court order or subpoena.</li>
              <li>If we are involved in a merger, acquisition, or other business transaction, your information may be transferred to the new business owners.</li>
            </ul>
            <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and other tracking technologies to collect non-personal information about your use of the Website. Cookies are small data files that are stored on your device when you visit a website. They allow us to remember your preferences and track your activity on the Website. You can disable cookies in your browser settings, but this may limit your ability to use certain features of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Your Choices</h2>
            <p className="mb-4">You have the following choices regarding your information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You can opt out of receiving marketing communications from us by clicking on the &quot;unsubscribe&quot; link in any email we send you.</li>
              <li>You can request that we delete your personal information by contacting us at <a href="mailto:info@nonamegraphic.com" className="text-red-400 underline">info@nonamegraphic.com</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Children&apos;s Privacy</h2>
            <p>
              Our Website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us at <a href="mailto:info@nonamegraphic.com" className="text-red-400 underline">info@nonamegraphic.com</a> so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post any changes on this page. We encourage you to review this Privacy Policy periodically to stay informed about updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-neutral-800 rounded-lg p-4">
              <p>Email: <a href="mailto:info@nonamegraphic.com" className="text-red-400 underline">info@nonamegraphic.com</a></p>
              <p>Phone: <a href="tel:+919667224157" className="text-red-400 underline">+91 96672 24157</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-exo2">Compliance with Laws</h2>
            <p>
              This Privacy Policy is intended to comply with applicable laws and regulations, including the General Data Protection Regulation (GDPR) of the European Union.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
