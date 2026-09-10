# Silicon PC — Guion de Video Promocional
### "De la mordida de Instagram a tu propia plataforma"

**Duración:** 52 segundos
**Formato:** 9:16 vertical (Reels/Stories) con corte 16:9 para presentación a cliente
**Tono:** corporativo, persuasivo, cinematográfico — sin exagerar, con autoridad
**Música sugerida:** synth oscuro y minimal, build-up progresivo, drop en el segundo 0:20 al mostrar la web
**Paleta on-screen:** fondo casi negro `#05070a`, acentos cian eléctrico `#22d3ee` y verde señal `#2fd977`, tipografía Space Grotesk (títulos) + Inter (cuerpo)
**Fuente de contenido:** copy y datos extraídos directamente del sitio en producción de Silicon PC (Lobos, Buenos Aires) — hero, servicios, catálogo, sección de confianza y footer.

## Demo interactivo (HyperFrames)

Este guion tiene una versión navegable armada con HyperFrames en `public/promo-deck/` — las mismas 6 escenas de este documento, con las capturas reales del sitio en producción y controles de presentador (flechas ← → o el botón "Present").

**Para verla:**
1. `npm run dev`
2. Abrir `http://localhost:<puerto>/promo-deck/index.html` en el navegador (nota el `index.html` explícito — Vite no resuelve `/promo-deck/` como directorio).
3. Una vez desplegado el sitio, queda disponible en producción en `<dominio>/promo-deck/index.html`, sin ningún enlace desde la landing principal.

Es 100% autocontenida (los bundles de HyperFrames están copiados en `vendor/`, no depende de conexión a internet salvo por las fuentes de Google Fonts).

---

## Estructura cinematográfica

### ESCENA 1 — El problema (0:00 – 0:12)
**VISUAL:** Pantalla de celular en mano, feed de Instagram scrolleando rápido y nervioso — historias de otras marcas tapando el perfil, notificaciones de WhatsApp acumulándose sin responder, un cliente escribiendo "¿siguen abiertos?" que se pierde entre otros chats. Grano sutil, cámara ligeramente handheld.

**LOCUCIÓN (VO):**
> "Tu feed no es tu vidriera. Y tu WhatsApp no es tu sistema de ventas."

**TEXTO EN PANTALLA:** `47 mensajes sin leer`

**SFX:** notificaciones superpuestas, tono ansioso, sin música todavía.

---

### ESCENA 2 — El quiebre (0:12 – 0:18)
**VISUAL:** Corte seco a negro. Silencio de un fotograma. El logo de Silicon PC aparece con un glow cian que se expande desde el centro.

**LOCUCIÓN (VO):**
> "Silicon PC ya no depende de un algoritmo para que lo encuentren."

**TEXTO EN PANTALLA:** `SILICON PC` (con el gradiente verde de marca)

**SFX:** impacto grave + inicio del synth de fondo.

---

### ESCENA 3 — La solución (0:18 – 0:26)
**VISUAL:** Reveal de la landing real (hero) en un mockup de notebook/celular flotando con leve parallax. Se ve el titular "Tecnología que funciona, service que responde" y el botón "Consultar por WhatsApp" integrado — no reemplaza WhatsApp, lo profesionaliza.

**LOCUCIÓN (VO):**
> "Una plataforma propia. Rápida, segura, y disponible las 24 horas — incluso cuando el local está cerrado."

**TEXTO EN PANTALLA:** `Disponible 24/7`

**SFX:** whoosh suave al aparecer el mockup.

---

### ESCENA 4 — Características clave (0:26 – 0:38)
**VISUAL:** Secuencia rápida de 4 micro-planos (2-3s cada uno), scroll real de la web con transición de "wipe" cian entre cada uno:
1. Catálogo de productos (celulares, componentes PC, notebooks y monitores, audio, accesorios).
2. Sección de servicios técnicos (diagnóstico avanzado, armado de PCs a medida, reparación de smartphones).
3. Sección "Por qué elegirnos" con los stats reales: **+15 años**, **+4.000 personas en la comunidad**, **2 sucursales en Lobos**, **mismo día de respuesta**.
4. Formulario de presupuesto que arma el mensaje de WhatsApp automáticamente.

**LOCUCIÓN (VO):**
> "Catálogo completo, taller técnico profesional, presupuestos automáticos por WhatsApp — y un diseño mobile-first que se siente premium en cualquier pantalla."

**TEXTO EN PANTALLA (rotando):** `Catálogo` → `Taller técnico` → `+15 años de trayectoria` → `Diseño mobile-first`

---

### ESCENA 5 — Comparativa de alto impacto (0:38 – 0:48)
**VISUAL:** Split screen cinematográfico: izquierda en tonos apagados/grises (Instagram + WhatsApp desordenado), derecha a pantalla completa con la estética oscura y el cian de Silicon PC. Aparece una tabla comparativa animada, fila por fila.

**LOCUCIÓN (VO):**
> "Una red social te presta el espacio. Tu propia web te pertenece."

**TABLA EN PANTALLA:**

| | Redes sociales | Plataforma propia |
|---|---|---|
| Disponibilidad | Depende del algoritmo | 24/7, siempre visible |
| Primera impresión | Feed genérico, compartido | Diseño exclusivo de marca |
| Autoridad ante cliente empresarial | Percepción informal | Percepción profesional |
| Velocidad de respuesta | Manual, uno por uno | Presupuesto automático |
| Control del mensaje | Ninguno (cambia el algoritmo) | Total |
| Confianza a primera vista | Variable | Alta, inmediata |

---

### ESCENA 6 — Cierre / CTA (0:48 – 0:52)
**VISUAL:** Vuelta al logo de Silicon PC sobre fondo negro, glow cian pulsando suave, línea divisoria animada como en el splash real del sitio.

**LOCUCIÓN (VO):**
> "Silicon PC. Tecnología que funciona, presencia que impone."

**TEXTO EN PANTALLA:** `silicon-pc.jl-digitalhub.workers.dev`

**SFX:** resolución del synth, fade out.

---

## Notas de producción

- Todo el copy en pantalla y en voz está tomado o parafraseado directamente del sitio real (hero, servicios, catálogo, sección de confianza) — nada se inventó desde cero, para que el cliente reconozca su propia marca.
- La escena 1 debe sentirse deliberadamente incómoda (ruido visual, notificaciones superpuestas) para que el contraste con la escena 3 en adelante se sienta como un alivio.
- Evitar cualquier mención a "Silicon Apple" en este material: el video es exclusivamente sobre la landing de Silicon PC.
- Versión corta para historias/reels: cortar a la escena 5 (comparativa) y saltar directo al cierre — deja el video en ~35s.
