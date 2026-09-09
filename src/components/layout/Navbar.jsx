import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import { siteConfig } from "../../data/siteConfig";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Presupuesto", href: "#presupuesto" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_4px_30px_-10px_rgba(0,0,0,0.6)]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 sm:h-[4.5rem] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <Logo className="h-8 w-8 sm:h-9 sm:w-9" />
          <span className="font-display font-semibold text-lg tracking-tight text-ink">
            Silicon<span className="text-gradient">PC</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-[#04170c] shadow-[0_0_20px_-4px_var(--color-brand-500)] hover:bg-brand-400 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-[#04170c]"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
