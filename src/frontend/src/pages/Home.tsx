import Button from '@/components/Button';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Creator Brand Launch Studio
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Launch Your Creator Brand.
              <span className="block text-primary mt-2">Monetise Your Influence.</span>
            </h1>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
              We help influencers, content creators, and coaches build premium brands, launch digital products, and create sustainable revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Book Free Consultation
              </Button>
              <Button to="/packages" variant="outline" size="lg">
                View Launch Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Launch</h3>
              <p className="text-muted-foreground">Get your brand and store live in under a week with our streamlined process.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Design</h3>
              <p className="text-muted-foreground">Stand out with professional branding that reflects your unique creator identity.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue Growth</h3>
              <p className="text-muted-foreground">Proven strategies to monetise your audience and scale your creator business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Your Partner in Creator Success
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Launchpad Studio is a full-service creator brand launch and digital marketing studio. We provide end-to-end solutions for influencers, content creators, coaches, and personal brands looking to launch and monetise their online presence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From brand identity and visual design to website development, ecommerce setup, and digital product launches, we handle everything so you can focus on creating content and growing your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Creators Say</h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of successful creators who've launched with us
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/testimonials" variant="outline" size="lg">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 border border-primary/20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Launch Your Creator Brand?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Book a free consultation and let's discuss how we can help you build, launch, and monetise your creator business.
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
