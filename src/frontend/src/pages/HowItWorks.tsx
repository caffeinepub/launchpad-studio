import ProcessStep from '@/components/ProcessStep';
import Button from '@/components/Button';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: '/assets/generated/icon-strategy.dim_128x128.png',
      title: 'Brand Strategy & Planning',
      description:
        'We start with a deep dive into your creator vision, target audience, and business goals. Together, we develop a comprehensive brand strategy and project roadmap.',
    },
    {
      number: 2,
      icon: '/assets/generated/icon-website.dim_128x128.png',
      title: 'Website & Store Setup',
      description:
        'Our team designs and develops your custom website and ecommerce store with premium aesthetics, seamless user experience, and conversion-optimized layouts.',
    },
    {
      number: 3,
      icon: '/assets/generated/icon-launch.dim_128x128.png',
      title: 'Product & Merch Launch',
      description:
        'We create and launch your digital products or merchandise line, handling everything from design to production, payment setup, and delivery systems.',
    },
    {
      number: 4,
      icon: '/assets/generated/icon-growth.dim_128x128.png',
      title: 'Monetisation & Growth',
      description:
        'Post-launch, we provide ongoing support with marketing strategies, audience growth tactics, and monetisation optimization to scale your creator business.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              How It Works
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Our proven 4-step process takes you from concept to launch, ensuring a smooth journey and exceptional results at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
              Typical Project Timeline
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Week 1: Discovery & Strategy</h3>
                  <p className="text-muted-foreground">
                    Initial consultation, brand strategy session, and project planning. We gather all requirements and create a detailed roadmap.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Week 2-3: Design & Development</h3>
                  <p className="text-muted-foreground">
                    Brand identity creation, website design, and development. You'll receive regular updates and provide feedback throughout.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Week 4: Product Setup & Testing</h3>
                  <p className="text-muted-foreground">
                    Ecommerce integration, product uploads, payment setup, and thorough testing to ensure everything works perfectly.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Week 5: Launch & Support</h3>
                  <p className="text-muted-foreground">
                    Final revisions, launch preparation, and go-live! We provide post-launch support and training to ensure your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 border border-primary/20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Book a free consultation to discuss your project timeline and get a custom quote for your creator brand launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Book Free Consultation
              </Button>
              <Button to="/packages" variant="outline" size="lg">
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
