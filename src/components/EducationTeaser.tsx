import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: number;
  image: string;
  excerpt: string;
  author: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Understanding CCCA: Central Centrifugal Cicatricial Alopecia",
    category: "Scalp Science",
    readTime: 8,
    image: "/api/placeholder/400/250",
    excerpt: "Clinical insights into diagnosis, treatment protocols, and long-term management strategies.",
    author: "Dr. Sarah Johnson",
  },
  {
    id: "2", 
    title: "Postpartum Hair Loss: What to Expect and How to Cope",
    category: "Hair Health",
    readTime: 6,
    image: "/api/placeholder/400/250",
    excerpt: "Evidence-based approaches to managing telogen effluvium during the postpartum period.",
    author: "Licensed Trichologist Team",
  },
  {
    id: "3",
    title: "Wig Maintenance: Medical-Grade Care Protocols",
    category: "Tutorials",
    readTime: 5,
    image: "/api/placeholder/400/250",
    excerpt: "Professional techniques for maintaining scalp health while wearing wigs and prosthetics.",
    author: "Mane Girl Beauty Academy",
  },
];

const EducationTeaser = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Evidence-Based Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clinical insights, practical tutorials, and science-backed guidance from our medical advisory board.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{article.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime} min
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {article.author}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationTeaser;