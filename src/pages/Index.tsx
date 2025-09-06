import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import ProductRail from "@/components/ProductRail";
import EducationTeaser from "@/components/EducationTeaser";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

// Product images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

// Sample product data
const bestSellerProducts = [
  {
    id: '1',
    name: 'Signature HD Lace Front - Natural Black',
    price: 899,
    memberPrice: 719,
    image: product1,
    rating: 4.9,
    reviewCount: 124,
    badges: ['Best Seller'],
    isMedicalFriendly: true
  },
  {
    id: '2',
    name: 'Crown Restoration Curly Bob - Honey Blonde',
    price: 1299,
    memberPrice: 1039,
    image: product2,
    rating: 5.0,
    reviewCount: 89,
    badges: ['Premium'],
    isMedicalFriendly: true
  },
  {
    id: '3',
    name: 'Ready-to-Ship Pixie Cut - Salt & Pepper',
    price: 399,
    memberPrice: 319,
    image: product3,
    rating: 4.8,
    reviewCount: 67,
    badges: ['Ready Today'],
    isMedicalFriendly: false
  },
  {
    id: '4',
    name: 'Cranial Prosthesis - Medical Grade Comfort',
    price: 1899,
    memberPrice: 1519,
    image: product4,
    rating: 4.9,
    reviewCount: 45,
    badges: ['FSA Eligible'],
    isMedicalFriendly: true
  }
];

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <ProductRail 
          title="Best Sellers" 
          subtitle="Our most loved pieces, trusted by thousands of clients worldwide"
          products={bestSellerProducts} 
        />
        <EducationTeaser />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
