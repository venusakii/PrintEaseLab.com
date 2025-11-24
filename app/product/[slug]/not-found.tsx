import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { ContactFooter } from "@/components/contact-footer"

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-6xl font-display font-bold text-foreground">404</h1>
          <h2 className="text-3xl font-display font-semibold text-foreground">Product Not Found</h2>
          <p className="text-lg text-muted-foreground">
            Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be
            incorrect.
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Go to Homepage
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <ContactFooter />
    </div>
  )
}
