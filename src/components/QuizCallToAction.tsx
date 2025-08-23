import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Camera } from "lucide-react";

const QuizCallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Match Tool Card */}
          <div className="relative bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-8 text-primary-foreground overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                Personalized Recommendations
              </div>
              
              <h3 className="text-2xl font-bold mb-3">
                Take the Match Tool
              </h3>
              
              <p className="text-primary-foreground/90 mb-6">
                Get your personalized scalp analysis and product recommendations in under 3 minutes. Science-backed matching for your unique needs.
              </p>
              
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Start Your Match
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Virtual Try-On Card */}
          <div className="relative bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 text-secondary-foreground overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Camera className="h-4 w-4" />
                AR Technology
              </div>
              
              <h3 className="text-2xl font-bold mb-3">
                Virtual Try-On
              </h3>
              
              <p className="text-secondary-foreground/80 mb-6">
                See how different wigs and styles look on you with our advanced virtual try-on technology. Upload a photo or use live camera.
              </p>
              
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Try It On
                <Camera className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizCallToAction;