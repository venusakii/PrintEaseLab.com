export function VideoSection() {
  return (
    <section id="video-demo" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">See Labela in Action</h2>
          <p className="text-xl text-muted-foreground">Small. Fast. Quiet. Always ready to print.</p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
          {/* Label tape frame decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-secondary to-primary" />

          <div className="w-full h-full bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
            {/* Placeholder for video */}
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80"
              alt="Labela label printer in action"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
