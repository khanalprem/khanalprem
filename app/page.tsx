import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Products from '@/components/Products';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Products />
        <WorkSection />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
