import { MessageCircle, MapPin, Clock3 } from "lucide-react";
import Logo from "../ui/Logo";
import InstagramIcon from "../ui/InstagramIcon";
import Container from "../ui/Container";
import { siteConfig } from "../../data/siteConfig";
import { brands } from "../../data/brands";

const pcLinkGroups = [
  {
    title: "Navegación",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Catálogo", href: "#catalogo" },
      { label: "Presupuesto", href: "#presupuesto" },
      { label: "Nosotros", href: "#nosotros" },
    ],
  },
  {
    title: "Servicio técnico",
    links: [
      { label: "Reparación de celulares", href: "#servicios" },
      { label: "Silicon Apple", href: "#servicios" },
      { label: "Notebooks y PC", href: "#servicios" },
      { label: "Diagnóstico sin cargo", href: "#servicios" },
    ],
  },
];

const appleLinkGroups = [
  {
    title: "Navegación",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Reparaciones", href: "#catalogo" },
      { label: "Presupuesto", href: "#presupuesto" },
      { label: "Nosotros", href: "#nosotros" },
    ],
  },
  {
    title: "Service Apple",
    links: [
      { label: "Módulos y pantallas", href: "#servicios" },
      { label: "Cambio de batería", href: "#servicios" },
      { label: "Liberaciones", href: "#servicios" },
      { label: "Diagnóstico sin cargo", href: "#servicios" },
    ],
  },
];

export default function Footer({ brand = "pc" }) {
  const { name, gradientClass } = brands[brand];
  const isApple = brand === "apple";
  const linkGroups = isApple ? appleLinkGroups : pcLinkGroups;
  const iconHoverClass = isApple
    ? "hover:text-apple-400 hover:border-apple-500/40"
    : "hover:text-brand-400 hover:border-brand-500/40";

  return (
    <footer id="contacto" className="relative border-t border-border bg-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display font-semibold text-lg text-ink">
                Silicon<span className={gradientClass}>{name.replace("Silicon", "")}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {isApple
                ? `Service técnico especializado en iPhone y ecosistema Apple en ${siteConfig.city}, ${siteConfig.province}.`
                : `Service técnico y venta de electrónica en ${siteConfig.city}, ${siteConfig.province}.`}
              {" "}
              {siteConfig.tagline} acompañando a la comunidad local.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors ${iconHoverClass}`}
              >
                <MessageCircle className="h-[18px] w-[18px]" />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted hover:text-cyan-glow hover:border-cyan-glow/40 transition-colors"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-sm font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold text-ink">Visitanos</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {siteConfig.branches.map((branch) => (
                <li key={branch.name} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <MapPin className={`h-4 w-4 mt-0.5 shrink-0 ${isApple ? "text-apple-400" : "text-brand-400"}`} />
                  <span>
                    <span className="block text-ink">{branch.name}</span>
                    {branch.address}, {siteConfig.city}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-sm text-ink-muted">
                <Clock3 className={`h-4 w-4 mt-0.5 shrink-0 ${isApple ? "text-apple-300" : "text-cyan-glow"}`} />
                <span>
                  Lunes a Sábado
                  <br />
                  9:00 a 12:30 hs · 16:00 a 21:00 hs
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {name} — {siteConfig.city}, {siteConfig.province}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-ink-faint">Diseño y desarrollo web propio.</p>
        </div>
      </Container>
    </footer>
  );
}
