import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

interface Result {
  id: string;
  beforeImage: string;
  afterImage: string;
  condition: string;
  duration: string;
  testimonial: string;
  name: string;
  rating: number;
}

const results: Result[] = [
  {
    id: "1",
    beforeImage: "/api/placeholder/300/300",
    afterImage: "/api/placeholder/300/300",
    condition: "CCCA",
    duration: "6 months",
    testimonial: "My scalp health improved dramatically, and I finally found a wig that feels natural.",
    name: "Maria S.",
    rating: 5,
  },
  {
    id: "2",
    beforeImage: "/api/placeholder/300/300",
    afterImage: "/api/placeholder/300/300",
    condition: "Postpartum Hair Loss",
    duration: "3 months",
    testimonial: "The crown restoration program gave me my confidence back during a difficult time.",
    name: "Jennifer L.",
    rating: 5,
  },
  {
    id: "3",
    beforeImage: "/api/placeholder/300/300",
    afterImage: "/api/placeholder/300/300",
    condition: "Traction Alopecia",
    duration: "8 months",
    testimonial: "Professional care that actually understands my hair type and scalp needs.",
    name: "Keisha D.",
    rating: 5,
  },
];

const ResultsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  const currentResult = results[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-medical">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results, Real Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformative impact of our medical-grade scalp care and custom solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 shadow-lg">
            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full bg-background/80 hover:bg-background shadow-md"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-background/80 hover:bg-background shadow-md"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Before/After Images */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="medical">{currentResult.condition}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {currentResult.duration} treatment
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <img
                      src={currentResult.beforeImage}
                      alt="Before treatment"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <p className="text-sm text-center text-muted-foreground">Before</p>
                  </div>
                  <div className="space-y-2">
                    <img
                      src={currentResult.afterImage}
                      alt="After treatment"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <p className="text-sm text-center text-muted-foreground">After</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-secondary fill-current"
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "{currentResult.testimonial}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <cite className="text-muted-foreground not-italic">
                    — {currentResult.name}
                  </cite>
                  
                  <Button variant="outline" size="sm">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {results.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;