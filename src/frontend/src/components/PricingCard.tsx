import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ name, price, features, popular = false }: PricingCardProps) {
  return (
    <Card className={`h-full border-border/50 bg-card/50 backdrop-blur transition-all hover:shadow-xl ${popular ? 'border-primary shadow-lg shadow-primary/10' : ''}`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">₹{price.toLocaleString('en-IN')}</span>
          <span className="text-muted-foreground ml-2">/ project</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button to="/contact" variant={popular ? 'primary' : 'outline'} className="w-full">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
