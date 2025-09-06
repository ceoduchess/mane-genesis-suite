import { Shield, Heart, Users, TrendingUp } from "lucide-react";

const BenefitsRow = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Medical-Wellness",
      description: "Licensed trichologist care with clinical-grade treatments"
    },
    {
      icon: Heart,
      title: "Custom Fit",
      description: "Precision-crafted wigs designed for your unique scalp and lifestyle"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join thousands in our supportive hair wellness journey"
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Proven outcomes with before/after documentation"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsRow;