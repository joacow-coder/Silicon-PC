# Silicon PC — Lobos

Landing page corporativa para **Silicon PC**, comercio de electrónica y servicio técnico
especializado en Lobos, Buenos Aires. Más de 15 años en el rubro, con dos sucursales
(Salgado Oeste 123 y 25 de Mayo 253) dedicadas a la venta de componentes/electrónica
y reparación de celulares, notebooks y equipos Apple.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (plugin de Vite)
- [Lucide React](https://lucide.dev/) para iconografía
- [Framer Motion](https://motion.dev/) para animaciones

## Estructura

```
src/
  components/
    layout/     Navbar, Footer, botón flotante de WhatsApp
    sections/   Hero, Servicios, Catálogo, Presupuesto, Confianza/Nosotros
    ui/         Primitivos reutilizables (Logo, Badge, Container, SectionHeading...)
  data/         Contenido del sitio (servicios, catálogo, datos de contacto)
  index.css     Tokens de diseño (tema Tailwind), utilidades globales
  App.jsx       Composición de secciones
```

## Desarrollo

```bash
npm install
npm run dev      # entorno local (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # sirve el build de producción localmente
```

## Contenido editable

Toda la información de contacto, horarios, sucursales y medios de pago vive en
`src/data/siteConfig.js`. Los servicios técnicos están en `src/data/services.js`
y las categorías del catálogo en `src/data/products.js` — actualizar estos archivos
no requiere tocar los componentes visuales.

## Despliegue

El proyecto es estático tras el build (`npm run build` → carpeta `dist/`), compatible
con Cloudflare Pages o Vercel:

- **Build command:** `npm run build`
- **Output directory:** `dist`
