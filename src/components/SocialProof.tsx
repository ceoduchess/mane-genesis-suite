import { Star, Users, Award, Heart } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Happy Clients"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: Heart,
      value: "5,000+",
      label: "Lives Transformed"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;