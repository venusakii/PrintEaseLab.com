import { Header } from "@/components/header"
import { HowItWorks } from "@/components/how-it-works"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">How It Works</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple 3-step process
            </p>
          </div>
          <HowItWorks />
          <div className="mt-16">
            <VideoSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
