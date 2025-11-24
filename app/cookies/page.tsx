import { Header } from "@/components/header"
import { ContactFooter } from "@/components/contact-footer"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use our
              site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">How We Use Cookies</h2>
            <p>PrintEaseLab.com uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used to track Amazon affiliate links and measure campaign
                effectiveness
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Types of Cookies We Use</h2>

            <div className="space-y-6 mt-4">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Session Cookies</h3>
                <p>
                  These are temporary cookies that expire when you close your browser. They help us maintain your
                  session as you navigate through our website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until you delete them. They help us remember
                  your preferences for future visits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                <p>Some cookies are placed by third-party services, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Amazon Associates (for affiliate tracking)</li>
                  <li>Google Analytics (for website analytics)</li>
                  <li>Social media platforms (for sharing functionality)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Managing Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by
              setting your preferences in our cookie consent banner or through your browser settings.
            </p>
            <p className="mt-4">
              Most web browsers automatically accept cookies, but you can modify your browser settings to decline
              cookies if you prefer. Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
              </li>
            </ul>
            <p className="mt-4">
              Please note that blocking cookies may affect your ability to use certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Amazon Associates Cookies</h2>
            <p>
              As a participant in the Amazon Associates Program, we use cookies to track referrals and earn commissions
              from qualifying purchases. These cookies help Amazon identify that you came from our website when making a
              purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal
              reasons. We encourage you to review this page periodically for the latest information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us through our
              contact form.
            </p>
          </section>

          <p className="text-sm mt-12 pt-8 border-t border-border">Last Updated: January 2025</p>
        </div>
      </main>
      <ContactFooter />
    </div>
  )
}
