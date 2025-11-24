import { Header } from "@/components/header"
import { SmartFeatures } from "@/components/smart-features"
import { CompactCreativeConnected } from "@/components/compact-creative-connected"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Smart Features
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Powerful technology meets simple design</p>
          </div>
          <CompactCreativeConnected />
          <div className="mt-16">
            <SmartFeatures />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
