import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { products } from '@/data/products';

export default function Store() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Demo Store
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Explore our sample products showcasing what we can create for your creator brand. From premium merch to digital products, we handle it all.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Launch Your Own Store
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              These are just examples of what we can create for you. Whether you want to sell physical merchandise, digital products, or both, we'll design and set up a complete ecommerce solution tailored to your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Start Your Store
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
