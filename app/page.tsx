import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CompactCreativeConnected } from "@/components/compact-creative-connected"
import { HowItWorks } from "@/components/how-it-works"
import { VideoSection } from "@/components/video-section"
import { PerfectForEveryone } from "@/components/perfect-for-everyone"
import { SmartFeatures } from "@/components/smart-features"
import { TopLabelMakers } from "@/components/top-label-makers"
import { Testimonials } from "@/components/testimonials"
import { AboutSection } from "@/components/about-section"
import { ContactFooter } from "@/components/contact-footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <CompactCreativeConnected />
        <HowItWorks />
        <VideoSection />
        <PerfectForEveryone />
        <SmartFeatures />
        <TopLabelMakers />
        <Testimonials />
        <AboutSection />
        <ContactFooter />
        <CookieBanner />
      </main>
    </>
  )
}
