import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { Palette, Globe, ShoppingBag, BookOpen, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Palette className="h-7 w-7" />,
      title: 'Brand Identity & Visual Design',
      description:
        'Create a memorable brand identity with custom logos, color palettes, typography, and visual guidelines that reflect your unique creator personality and resonate with your audience.',
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: 'Website & Portfolio Development',
      description:
        'Build a stunning, conversion-optimized website that showcases your work, captures leads, and serves as the central hub for your creator business. Fully responsive and SEO-friendly.',
    },
    {
      icon: <ShoppingBag className="h-7 w-7" />,
      title: 'Ecommerce & Merch Store Setup',
      description:
        'Launch your own merch store or digital product shop with seamless payment integration, inventory management, and a premium shopping experience for your fans.',
    },
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: 'Digital Product Launches',
      description:
        'Create and launch ebooks, online courses, templates, and other digital products. We handle everything from product design to sales page creation and launch strategy.',
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: 'Creator Monetisation & Growth Strategy',
      description:
        'Develop a comprehensive monetisation strategy with multiple revenue streams. Get expert guidance on pricing, marketing funnels, audience growth, and scaling your creator business.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              End-to-end solutions for launching and scaling your creator brand. We handle the technical and creative work so you can focus on what you do best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our proven process ensures a smooth, efficient launch from strategy to execution. We work closely with you at every step to bring your creator vision to life.
            </p>
            <Button to="/how-it-works" variant="primary" size="lg">
              See Our Process
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 border border-primary/20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Let's Build Your Creator Brand
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ready to take your creator business to the next level? Book a free consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Book Free Consultation
              </Button>
              <Button to="/packages" variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
