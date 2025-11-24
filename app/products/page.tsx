import { Header } from "@/components/header"
import { TopLabelMakers } from "@/components/top-label-makers"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          
          <TopLabelMakers />
        </div>
      </main>
      <Footer />
    </div>
  )
}
