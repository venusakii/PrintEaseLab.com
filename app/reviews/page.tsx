import { Header } from "@/components/header"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our customers are saying about PrintEaseLab
            </p>
          </div>
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  )
}
