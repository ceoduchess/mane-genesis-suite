import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import ProductRail from "@/components/ProductRail";
import QuizCallToAction from "@/components/QuizCallToAction";
import EducationTeaser from "@/components/EducationTeaser";
import ResultsCarousel from "@/components/ResultsCarousel";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

// Product images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Luxury Lace Front Wig",
    price: 899,
    memberPrice: 719,
    image: product1,
    rating: 4.9,
    reviewCount: 124,
    badges: ["Medical-Friendly", "Custom Fit"],
    quickAdd: true,
  },
  {
    id: "2",
    name: "Scalp Revival Serum",
    price: 89,
    memberPrice: 71,
    image: product2,
    rating: 4.8,
    reviewCount: 89,
    badges: ["FSA/HSA Eligible"],
    quickAdd: true,
  },
  {
    id: "3",
    name: "Premium Hair Extensions",
    price: 299,
    memberPrice: 239,
    image: product3,
    rating: 4.7,
    reviewCount: 156,
    badges: ["Ready-to-Ship"],
    quickAdd: true,
  },
  {
    id: "4",
    name: "Cranial Prosthetic Wig",
    price: 1299,
    memberPrice: 1039,
    image: product4,
    rating: 5.0,
    reviewCount: 43,
    badges: ["Medical-Friendly", "Insurance Eligible"],
    quickAdd: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <ProductRail title="Best Sellers" products={mockProducts} />
        <QuizCallToAction />
        <EducationTeaser />
        <ResultsCarousel />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
