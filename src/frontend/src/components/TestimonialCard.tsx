import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  feedback: string;
}

export default function TestimonialCard({ name, role, feedback }: TestimonialCardProps) {
  return (
    <Card className="h-full border-border/50 bg-card/50 backdrop-blur transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <Quote className="mb-4 h-8 w-8 text-primary/40" />
        <p className="mb-6 text-base leading-relaxed text-foreground">{feedback}</p>
        <div className="border-t border-border/50 pt-4">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
