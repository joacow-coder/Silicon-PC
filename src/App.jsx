import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Catalog from "./components/sections/Catalog";
import QuoteForm from "./components/sections/QuoteForm";
import Trust from "./components/sections/Trust";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-ink overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <QuoteForm />
        <Trust />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
