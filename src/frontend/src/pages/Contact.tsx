import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';

export default function Contact() {
  return (
    <>
      <Toaster />
      <div className="flex flex-col">
        {/* Header */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Book a Free Consultation
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
                Let's discuss your creator brand vision and how we can help you launch and monetise your online presence.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Have questions about our services or want to discuss your project? We're here to help. Reach out and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@launchpadstudio.in</p>
                      <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 10 AM - 7 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Mumbai, India</p>
                      <p className="text-sm text-muted-foreground">Serving creators worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 10 AM - 7 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 10 AM - 2 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl bg-card p-6 border border-border/50">
                  <h3 className="font-semibold text-lg mb-2">How long does a typical project take?</h3>
                  <p className="text-muted-foreground">
                    Most projects are completed within 2-6 weeks depending on the package and complexity. We'll provide a detailed timeline during your consultation.
                  </p>
                </div>
                <div className="rounded-xl bg-card p-6 border border-border/50">
                  <h3 className="font-semibold text-lg mb-2">Do you offer payment plans?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer flexible payment plans with 50% upfront and 50% upon completion. Custom payment schedules are available for larger projects.
                  </p>
                </div>
                <div className="rounded-xl bg-card p-6 border border-border/50">
                  <h3 className="font-semibold text-lg mb-2">What if I need changes after launch?</h3>
                  <p className="text-muted-foreground">
                    All packages include post-launch support. We also offer monthly maintenance plans for ongoing updates and support.
                  </p>
                </div>
                <div className="rounded-xl bg-card p-6 border border-border/50">
                  <h3 className="font-semibold text-lg mb-2">Can you help with marketing after launch?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We offer growth strategy sessions and ongoing marketing support to help you scale your creator business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
