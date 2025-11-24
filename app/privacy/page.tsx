import { Header } from "@/components/header"
import { ContactFooter } from "@/components/contact-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p>At PrintEaseLab.com, we collect information that you provide directly to us, including when you:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Click on affiliate links to Amazon</li>
              <li>Browse our website (through cookies and similar technologies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you newsletters and promotional materials (with your consent)</li>
              <li>Improve our website and user experience</li>
              <li>Analyze site usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier.
            </p>
            <p className="mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Third-Party Services</h2>
            <p>
              As an Amazon Associate, we may earn from qualifying purchases when you click on affiliate links. Amazon
              may collect information about your visits to our site and your interaction with our content.
            </p>
            <p className="mt-4">
              We may also use third-party service providers to monitor and analyze the use of our website, such as
              Google Analytics. These third parties have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to erase your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our contact form.</p>
          </section>

          <p className="text-sm mt-12 pt-8 border-t border-border">Last Updated: January 2025</p>
        </div>
      </main>
      <ContactFooter />
    </div>
  )
}
