import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Custom Wigs", href: "#" },
      { name: "Ready-to-Ship", href: "#" },
      { name: "Refurbished", href: "#" },
      { name: "Haircare & Treatments", href: "#" },
      { name: "Accessories", href: "#" },
    ],
    services: [
      { name: "Scalp Analysis", href: "#" },
      { name: "Crown Restoration", href: "#" },
      { name: "Cranial Prosthesis", href: "#" },
      { name: "Memberships", href: "#" },
    ],
    support: [
      { name: "Shipping & Returns", href: "#" },
      { name: "Store Policies", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Size Guide", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Medical Advisory", href: "#" },
      { name: "Professionals", href: "#" },
      { name: "The Mane Academy", href: "#" },
      { name: "Careers", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Mane Girl Beauty
            </h3>
            <p className="text-background/80 mb-6">
              Medical-grade scalp care meets luxury wigs. Licensed, certified, and HIPAA compliant.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-background mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2024 Mane Girl Beauty. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Medical Disclaimer
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;