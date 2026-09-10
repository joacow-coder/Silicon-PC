import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "../ui/Logo";
import AppleMark from "../ui/AppleMark";
import Container from "../ui/Container";
import { siteConfig } from "../../data/siteConfig";
import { brands } from "../../data/brands";

export default function Navbar({ brand = "pc" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { name, gradientClass, navLinks } = brands[brand];
  const isApple = brand === "apple";
  const ctaClasses = isApple
    ? "bg-apple-500 text-white shadow-[0_0_20px_-4px_var(--color-apple-500)] hover:bg-apple-400"
    : "bg-brand-500 text-[#04170c] shadow-[0_0_20px_-4px_var(--color-brand-500)] hover:bg-brand-400";

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
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a href="#top" className="flex min-w-0 shrink items-center gap-2.5">
          {isApple ? (
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-apple-500/30 bg-surface-2 sm:h-9 sm:w-9">
              <AppleMark className="h-4 w-4 text-apple-200 sm:h-[18px] sm:w-[18px]" />
            </span>
          ) : (
            <Logo className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          )}
          <span className="truncate font-display font-semibold text-base tracking-tight text-ink sm:text-lg">
            Silicon<span className={gradientClass}>{name.replace("Silicon", "")}</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
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
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${ctaClasses}`}
          >
            <MessageCircle className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-ink active:scale-95 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="glass max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 py-3 text-sm font-medium text-ink-muted hover:text-ink hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold ${ctaClasses}`}
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
