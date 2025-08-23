import { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Shop",
      href: "#",
      items: [
        { name: "Custom Wigs", href: "#" },
        { name: "Ready-to-Ship", href: "#" },
        { name: "Refurbished", href: "#" },
        { name: "Haircare & Treatments", href: "#" },
        { name: "Accessories", href: "#" },
      ],
    },
    {
      name: "Services",
      href: "#",
      items: [
        { name: "Scalp Analysis", href: "#" },
        { name: "Crown Restoration", href: "#" },
        { name: "Cranial Prosthesis", href: "#" },
        { name: "Memberships", href: "#" },
      ],
    },
    { name: "Education", href: "#" },
    { name: "Professionals", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Mane Girl Beauty
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </a>
                {item.items && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-lg font-medium text-foreground hover:text-primary"
                  >
                    {item.name}
                  </a>
                  {item.items && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-muted-foreground hover:text-primary"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;