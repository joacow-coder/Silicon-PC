import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import GlowOrb from "../ui/GlowOrb";
import {
  buildWhatsAppMessage,
  whatsappHrefWithMessage,
} from "../../data/siteConfig";

const categories = [
  "Cambio de módulo / pantalla",
  "Cambio de batería",
  "Liberación de equipo",
  "Reparación a nivel placa",
  "Compra de iPhone o repuesto",
  "Otra consulta",
];

const inputClasses =
  "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-apple-500/60 focus:ring-2 focus:ring-apple-500/20";

export default function AppleQuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: categories[0],
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const text = buildWhatsAppMessage(form);
  const href = whatsappHrefWithMessage(text);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the WhatsApp button still works
    }
  };

  return (
    <section id="presupuesto" className="relative py-20 sm:py-28">
      <GlowOrb color="blue" className="h-[24rem] w-[24rem] top-1/3 -right-32" />
      <Container className="relative grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <SectionHeading
          eyebrow="Presupuesto rápido"
          title="Contanos qué le pasa a tu iPhone"
          description="Completá el formulario y lo enviamos armado directo a nuestro WhatsApp. Sin registros, sin esperas: te contestamos en horario de atención."
        />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              Nombre
              <input
                className={inputClasses}
                placeholder="Tu nombre"
                value={form.name}
                onChange={update("name")}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              Teléfono (opcional)
              <input
                className={inputClasses}
                placeholder="11 1234 5678"
                value={form.phone}
                onChange={update("phone")}
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-ink">
            Tipo de consulta
            <select
              className={inputClasses}
              value={form.category}
              onChange={update("category")}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-ink">
            Contanos el detalle
            <textarea
              className={`${inputClasses} min-h-[110px] resize-none`}
              placeholder="Ej: se me rompió la pantalla de un iPhone 12, o quiero cotizar un cambio de batería."
              value={form.message}
              onChange={update("message")}
            />
          </label>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-apple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-6px_var(--color-apple-500)] hover:bg-apple-400 transition-colors"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Enviar por WhatsApp
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3.5 text-sm font-semibold text-ink-muted hover:text-ink hover:border-apple-500/40 transition-colors"
            >
              {copied ? <Check className="h-4 w-4 text-apple-400" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copiado" : "Copiar mensaje"}
            </button>
          </div>
          <p className="text-xs text-ink-faint inline-flex items-center gap-1.5">
            <Send className="h-3.5 w-3.5" />
            Se abre WhatsApp con tu mensaje ya redactado — solo tenés que confirmar el envío.
          </p>
        </motion.form>
      </Container>
    </section>
  );
}
