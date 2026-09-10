import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import WhatsAppFloat from "../layout/WhatsAppFloat";
import AppleHero from "./AppleHero";
import AppleServices from "./AppleServices";
import AppleShowcase from "./AppleShowcase";
import AppleQuoteForm from "./AppleQuoteForm";
import AppleTrust from "./AppleTrust";
import { useVoice } from "../../context/VoiceContext";

export default function AppleSite() {
  const { speak } = useVoice();

  useEffect(() => {
    speak("Bienvenido a Silicon Apple.");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen bg-bg text-ink overflow-x-hidden"
    >
      <Navbar brand="apple" />
      <main>
        <AppleHero />
        <AppleServices />
        <AppleShowcase />
        <AppleQuoteForm />
        <AppleTrust />
      </main>
      <Footer brand="apple" />
      <WhatsAppFloat brand="apple" />
    </motion.div>
  );
}
