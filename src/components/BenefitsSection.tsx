import { Shield, Users, Award, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Medical-Wellness",
    description: "Clinical-grade treatments backed by licensed trichologists and medical advisory board.",
  },
  {
    icon: Award,
    title: "Custom Fit",
    description: "Precision-crafted wigs and prosthetics with scalp health as the foundation.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Supportive network of stylists, educators, and clients on similar journeys.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "Measurable improvements in scalp health and confidence, documented and tracked.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-medical">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Mane Girl Beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Medical expertise meets luxury craftsmanship for comprehensive scalp and hair wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;