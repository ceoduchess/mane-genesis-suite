import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional hair and scalp wellness specialist examining client's scalp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-medical px-4 py-2 rounded-full text-sm font-medium text-medical-foreground mb-6">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            Licensed & Medical-Grade Certified
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            We're the Mayo Clinic for scalp health—plus{" "}
            <span className="text-primary">custom wigs that fit your life.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Serious about your scalp. Obsessive about your confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Book Scalp Analysis
            </Button>
            <Button variant="medical" size="lg" className="text-lg px-8 py-6">
              Shop Wigs
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get your Match
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-success rounded-full"></div>
              FSA/HSA Eligible
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-success rounded-full"></div>
              Medical Advisory Board
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-success rounded-full"></div>
              HIPAA Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;