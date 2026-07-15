import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ScienceSection from './components/ScienceSection';
import ReviewsSection from './components/ReviewsSection';
import QASection from './components/QASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <HeroSection />
      <ProductsSection />
      <ScienceSection />
      <ReviewsSection />
      <QASection />
      <Footer />
    </>
  );
}
