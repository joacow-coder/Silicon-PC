import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import WhatsAppFloat from "../layout/WhatsAppFloat";
import Hero from "./Hero";
import Services from "./Services";
import Catalog from "./Catalog";
import QuoteForm from "./QuoteForm";
import Trust from "./Trust";
import { useVoice } from "../../context/VoiceContext";

export default function PCSite() {
  const { speak } = useVoice();

  useEffect(() => {
    speak("Bienvenido a Silicon PC.");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
