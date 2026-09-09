import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import WhatsAppFloat from "../layout/WhatsAppFloat";
import Hero from "./Hero";
import Services from "./Services";
import Catalog from "./Catalog";
import QuoteForm from "./QuoteForm";
import Trust from "./Trust";

export default function PCSite() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-bg text-ink overflow-x-hidden"
    >
      <Navbar brand="pc" />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <QuoteForm />
        <Trust />
      </main>
      <Footer brand="pc" />
      <WhatsAppFloat brand="pc" />
    </motion.div>
  );
}
