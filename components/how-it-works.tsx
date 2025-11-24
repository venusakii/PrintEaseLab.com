export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Connect via Bluetooth",
      description: "Pair your printer with any device in seconds",
      icon: "📱",
    },
    {
      number: "2",
      title: "Design your label",
      description: "Use our intuitive app to create beautiful labels",
      icon: "✏️",
    },
    {
      number: "3",
      title: "Print instantly",
      description: "Watch your label print in crisp, clear quality",
      icon: "🖨️",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-16 text-foreground">
          How It Works
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div
            className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
            style={{
              clipPath:
                "polygon(0 0, 33% 0, 33% 100%, 0 100%, 0 0, 66% 0, 66% 100%, 33% 100%, 33% 0, 100% 0, 100% 100%, 66% 100%)",
            }}
          />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-foreground font-display font-semibold shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
