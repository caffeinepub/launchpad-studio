import { useParams, Link } from '@tanstack/react-router';
import { getProductById } from '@/data/products';
import Button from '@/components/Button';
import { ArrowLeft, Package, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProductDetail() {
  const { productId } = useParams({ from: '/store/$productId' });
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-3xl font-bold">Product Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>
          <Button to="/store" variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b border-border/40 bg-muted/30 py-4">
        <div className="container">
          <Link
            to="/store"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-2xl bg-muted/30 border border-border/50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit" variant="secondary">
                <Package className="mr-1 h-3 w-3" />
                {product.category === 'physical' ? 'Physical Product' : 'Digital Product'}
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                {product.name}
              </h1>
              <p className="mb-6 text-2xl font-bold text-primary">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-8 rounded-xl bg-primary/5 p-6 border border-primary/10">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <Sparkles className="h-5 w-5 text-primary" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.category === 'physical' ? (
                    <>
                      <li>• Premium quality materials</li>
                      <li>• Custom branding options available</li>
                      <li>• Multiple sizes and colors</li>
                      <li>• Fast shipping across India</li>
                    </>
                  ) : (
                    <>
                      <li>• Instant digital delivery</li>
                      <li>• Lifetime access</li>
                      <li>• Regular updates included</li>
                      <li>• Money-back guarantee</li>
                    </>
                  )}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="primary" size="lg" className="flex-1">
                  Enquire Now
                </Button>
                <Button to="/packages" variant="outline" size="lg" className="flex-1">
                  View Packages
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                This is a demo product. Contact us to create custom products for your creator brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 border border-primary/20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Want to Create Your Own Products?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We'll help you design, produce, and launch physical or digital products that your audience will love.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Start Your Product Line
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
