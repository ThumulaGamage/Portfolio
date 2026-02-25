import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <AnimatedSection className="text-center mb-14">
      <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
    </AnimatedSection>
  );
}
