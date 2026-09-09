export const siteConfig = {
  name: "Silicon PC",
  shortName: "Silicon PC",
  city: "Lobos",
  province: "Buenos Aires",
  tagline: "Más de 15 años en el rubro",
  whatsappLink: "https://wa.link/t73vkb",
  instagram: "https://instagram.com/silicon_pc",
  instagramHandle: "@silicon_pc",
  branches: [
    {
      name: "Sucursal Salgado",
      address: "Salgado Oeste 123",
    },
    {
      name: "Sucursal 25 de Mayo",
      address: "25 de Mayo 253",
    },
  ],
  hours: [
    { days: "Lunes a Sábado", time: "9:00 a 12:30 hs" },
    { days: "Lunes a Sábado", time: "16:00 a 21:00 hs" },
  ],
  paymentMethods: [
    "Efectivo",
    "Transferencia bancaria",
    "Tarjeta de débito",
    "Tarjeta de crédito",
    "Mercado Pago",
  ],
};

export function buildWhatsAppMessage({ name, phone, category, message }) {
  const lines = [
    `Hola Silicon PC, mi nombre es ${name || "-"}.`,
    category ? `Consulta sobre: ${category}` : null,
    phone ? `Mi teléfono de contacto: ${phone}` : null,
    message ? `Detalle: ${message}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export function whatsappHrefWithMessage(text) {
  const base = siteConfig.whatsappLink;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
