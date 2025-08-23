import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Shield } from "lucide-react";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            Expert Insights & Updates
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Informed on Scalp Science
          </h2>
          
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get evidence-based hair health tips, new treatment updates, and exclusive member pricing delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-primary border-0 flex-1"
              required
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              HIPAA Compliant
            </div>
            <div>No spam, unsubscribe anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;