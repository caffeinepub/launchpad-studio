import TestimonialCard from '@/components/TestimonialCard';
import Button from '@/components/Button';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Creator Success Stories
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Hear from creators who've successfully launched and scaled their brands with Launchpad Studio. Your success story could be next.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">200+</div>
              <p className="text-lg text-muted-foreground">Creators Launched</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">₹50Cr+</div>
              <p className="text-lg text-muted-foreground">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">98%</div>
              <p className="text-lg text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 border border-primary/20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Join Our Success Stories
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ready to launch your creator brand and start building your success story? Let's make it happen together.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
