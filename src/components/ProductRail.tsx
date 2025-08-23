import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  memberPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badges: string[];
  quickAdd?: boolean;
}

interface ProductRailProps {
  title: string;
  products: Product[];
}

const ProductRail = ({ title, products }: ProductRailProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant={badge === "Medical-Friendly" ? "medical" : "secondary"}
                      className="text-xs"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "text-secondary fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviewCount})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.memberPrice && (
                      <span className="text-sm text-primary">
                        ${product.memberPrice} member
                      </span>
                    )}
                  </div>
                </div>

                {product.quickAdd && (
                  <Button variant="medical" size="sm" className="w-full">
                    Quick Add
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRail;