interface ProcessStepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export default function ProcessStep({ number, icon, title, description }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-4 ring-primary/5">
        <img src={icon} alt={title} className="h-12 w-12" />
      </div>
      <div className="absolute -top-2 -left-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-sm">{description}</p>
    </div>
  );
}
