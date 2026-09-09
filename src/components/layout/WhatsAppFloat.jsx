import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function WhatsAppFloat({ brand = "pc" }) {
  const isApple = brand === "apple";
  const colorClasses = isApple
    ? "bg-apple-500 text-white shadow-[0_8px_30px_-6px_rgba(0,0,0,0.6),0_0_24px_-4px_var(--color-apple-500)]"
    : "bg-brand-500 text-[#04170c] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.6),0_0_24px_-4px_var(--color-brand-500)]";
  const pingClass = isApple ? "bg-apple-500/50" : "bg-brand-500/50";

  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full transition-transform hover:scale-105 active:scale-95 ${colorClasses}`}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.25} />
      <span className={`absolute inset-0 rounded-full animate-ping -z-10 ${pingClass}`} />
    </a>
  );
}
