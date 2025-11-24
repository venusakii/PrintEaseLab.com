import { Header } from "@/components/header"
import { ContactFooter } from "@/components/contact-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">Terms of Service</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using PrintEaseLab.com, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on PrintEaseLab.com for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="mt-4">Under this license you may not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to reverse engineer any software contained on PrintEaseLab.com</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
              descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              4. Amazon Associates Disclosure
            </h2>
            <p>
              PrintEaseLab.com is a participant in the Amazon Associates Program, an affiliate advertising program
              designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall PrintEaseLab.com or its suppliers be liable for any damages arising out of the use or
              inability to use the materials on our website, even if we have been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Revisions</h2>
            <p>
              We may revise these terms of service at any time without notice. By using this website, you are agreeing
              to be bound by the current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">7. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us through our contact form.</p>
          </section>

          <p className="text-sm mt-12 pt-8 border-t border-border">Last Updated: January 2025</p>
        </div>
      </main>
      <ContactFooter />
    </div>
  )
}
