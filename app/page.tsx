import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <Footer />
    </main>
  );
}
