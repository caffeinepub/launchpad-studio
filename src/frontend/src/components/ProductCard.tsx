import { Link } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  shortDescription: string;
}

export default function ProductCard({ id, name, price, image, shortDescription }: ProductCardProps) {
  return (
    <Link to="/store/$productId" params={{ productId: id }}>
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur transition-all hover:shadow-xl hover:border-primary/30 cursor-pointer group">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{shortDescription}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">₹{price.toLocaleString('en-IN')}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              View Details <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
