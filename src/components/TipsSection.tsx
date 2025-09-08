import { Lightbulb, Droplets, Wind, Sun, Brush, Shield } from "lucide-react";

const TipsSection = () => {
  const tips = [
    {
      icon: Brush,
      title: "Gentle Brushing",
      tip: "Always brush from ends to roots with a wide-tooth comb to prevent tangling and extend wig life."
    },
    {
      icon: Droplets,
      title: "Proper Washing",
      tip: "Wash your wig every 10-15 wears using sulfate-free shampoo in cool water for best results."
    },
    {
      icon: Wind,
      title: "Air Dry Only",
      tip: "Let your wig air dry on a wig stand to maintain shape and prevent heat damage to the fibers."
    },
    {
      icon: Sun,
      title: "UV Protection",
      tip: "Limit direct sunlight exposure and use UV-protective sprays to prevent color fading."
    },
    {
      icon: Shield,
      title: "Storage Care",
      tip: "Store on a wig head or in a silk bag to maintain style and prevent matting between wears."
    },
    {
      icon: Lightbulb,
      title: "Professional Refresh",
      tip: "Schedule professional styling every 3-4 months to keep your wig looking salon-fresh."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expert Care Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional tips to help you maintain your wig's beauty and extend its lifespan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tip.tip}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Need more detailed care instructions? 
            <span className="text-primary font-medium ml-1 cursor-pointer hover:underline">
              View our complete care guide
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;