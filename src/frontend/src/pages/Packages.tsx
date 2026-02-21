import PricingCard from '@/components/PricingCard';
import Button from '@/components/Button';

export default function Packages() {
  const packages = [
    {
      name: 'Starter Launch',
      price: 14999,
      features: [
        'Brand identity design (logo, colors, fonts)',
        'Single-page landing website',
        'Basic SEO optimization',
        'Mobile responsive design',
        'Contact form integration',
        '2 rounds of revisions',
        '1 week delivery',
      ],
      popular: false,
    },
    {
      name: 'Creator Pro',
      price: 49999,
      features: [
        'Complete brand identity package',
        'Multi-page website (up to 5 pages)',
        'Ecommerce store setup (up to 10 products)',
        'Payment gateway integration',
        'Advanced SEO & analytics',
        'Social media integration',
        'Email marketing setup',
        '3 rounds of revisions',
        '2-3 weeks delivery',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Launch',
      price: 99999,
      features: [
        'Premium brand identity & guidelines',
        'Custom website (unlimited pages)',
        'Full ecommerce platform',
        'Digital product delivery system',
        'Membership/subscription setup',
        'Marketing automation',
        'Custom integrations & features',
        'Priority support',
        'Unlimited revisions',
        '4-6 weeks delivery',
      ],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Launch Packages
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Choose the perfect package to launch your creator brand. All packages include premium design, dedicated support, and our proven launch process.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
              Additional Services
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 rounded-lg bg-card border border-border/50">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Digital Product Creation</h3>
                  <p className="text-sm text-muted-foreground">Ebook, course, or template design and setup</p>
                </div>
                <span className="text-xl font-bold text-primary">₹9,999+</span>
              </div>
              <div className="flex items-center justify-between p-6 rounded-lg bg-card border border-border/50">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Merch Design Package</h3>
                  <p className="text-sm text-muted-foreground">Custom merchandise designs (5 products)</p>
                </div>
                <span className="text-xl font-bold text-primary">₹7,999</span>
              </div>
              <div className="flex items-center justify-between p-6 rounded-lg bg-card border border-border/50">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Monthly Maintenance</h3>
                  <p className="text-sm text-muted-foreground">Updates, support, and content management</p>
                </div>
                <span className="text-xl font-bold text-primary">₹4,999/mo</span>
              </div>
              <div className="flex items-center justify-between p-6 rounded-lg bg-card border border-border/50">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Growth Strategy Session</h3>
                  <p className="text-sm text-muted-foreground">1-on-1 monetisation and marketing consultation</p>
                </div>
                <span className="text-xl font-bold text-primary">₹2,999</span>
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
              Not Sure Which Package is Right?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Book a free consultation and we'll help you choose the perfect package for your goals and budget.
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
