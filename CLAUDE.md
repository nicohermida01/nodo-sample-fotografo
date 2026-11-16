# Tomás Aguirre Fotografía — landing de fotógrafo (demo / template)

Sitio estático de demostración y template para vender a fotógrafos. Fotógrafo, trabajos y precios
son **ficticios**. Dos objetivos: mostrar el trabajo con calidad de galería y convertir visitas en
consultas ("Consultar disponibilidad" / WhatsApp). Ver también `AGENTS.md` (convenciones de Astro) y `PRODUCT.md` (contexto de producto para Impeccable).

## Stack

- Astro 7 (`output: "static"`), TypeScript strict (`astro/tsconfigs/strict`)
- Tailwind CSS v4 vía `@tailwindcss/vite` — tokens en `src/styles/global.css` (`@theme`)
- Imágenes: `astro:assets` con sharp (`<Image />`, `<Picture />`); sharp elimina EXIF/GPS
- `@astrojs/sitemap`, `astro-icon` + `@iconify-json/lucide` (íconos locales en `src/assets/icons`)
- Fuentes self-hosted: `@fontsource/instrument-serif` (display) y `@fontsource-variable/inter` (cuerpo/UI)
- JS solo en islands chicas; si hace falta animación por JS, Motion (motion.dev)

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Dev server en `localhost:4321` |
| `npm run build` | Build estático en `dist/` (valida la collection: un error de imagen o schema rompe el build) |
| `npm run preview` | Sirve `dist/` localmente |
| `npx astro check` | Typecheck de `.astro` y `.ts` |

## Dónde viven los datos

- **`src/config/site.ts`** (tipado, `SiteConfig`): marca, bajada, copy global, navegación, credenciales,
  hero (imágenes), especialidades, sobre mí, proceso, paquetes y precios, testimonios, clientes y
  publicaciones, FAQ, contacto, redes, formulario (proveedor + endpoint) y aviso de demo.
  Helpers: `whatsappUrl()`, `formatPrice()`, `getSpecialty()`.
- **`src/content/projects/*.md`**: un archivo por trabajo (Content Collection `projects`).
  Esquema Zod en **`src/content.config.ts`**; imágenes validadas en build con `image()`.
- **`src/assets/projects/[slug]/`**: `cover.jpg` + `01.jpg … NN.jpg` de cada proyecto.
- **`src/assets/hero/`**, **`src/assets/about/`**: fotos referenciadas desde `site.ts`.
- Ruta de proyecto: `src/pages/trabajos/[slug].astro` (`getStaticPaths` sobre la collection).
- Créditos de fotos de bancos libres: `CREDITS.md` + campo `credit` de cada imagen.

Nunca hardcodear copy, precios ni datos de contacto en componentes: siempre desde `site.ts`.
Nunca cargar trabajos en `site.ts`: solo en la collection.

### Esquema de un proyecto

| Campo | Tipo | Notas |
| --- | --- | --- |
| `title` | string | |
| `slug` | kebab-case | URL `/trabajos/[slug]` y id de la entrada |
| `category` | `bodas` \| `retratos` \| `marcas` | ids de `SPECIALTY_IDS` en `site.ts` |
| `location` | string | ej. "Tupungato, Valle de Uco, Mendoza" |
| `date` | fecha `YYYY-MM-DD` | |
| `summary` | string ≤ 320 | texto breve del proyecto |
| `featured` | boolean (default `false`) | aparece en la grilla de la home |
| `orientation` | `vertical` \| `horizontal` | orientación de la portada (layout de card) |
| `cover` | `{ src, alt, credit? }` | `src` relativo al .md, validado con `image()` |
| `gallery` | 8–15 × `{ src, alt, orientation, credit? }` | `alt` descriptivo obligatorio (≥ 10 caracteres) |
| `seoDescription` | string ≤ 160, opcional | si falta, se usa `summary` |
| `draft` | boolean (default `false`) | `true` lo excluye del build |

### Cómo agregar un proyecto nuevo

1. Elegí un slug en kebab-case, ej. `ana-y-pablo-cacheuta`.
2. Creá `src/assets/projects/ana-y-pablo-cacheuta/` y poné `cover.jpg` y `01.jpg`, `02.jpg`… (8 a 15 fotos).
   Exportá en sRGB, lado largo ~2400–3000 px, calidad alta: Astro genera AVIF/WebP y los tamaños.
3. Copiá un `.md` existente de `src/content/projects/` como `ana-y-pablo-cacheuta.md`.
4. Completá `title`, `slug` (igual al nombre de archivo), `category`, `location`, `date`, `summary`,
   `featured` y `orientation` de la portada.
5. En `cover` y `gallery` apuntá cada `src` a `../../assets/projects/ana-y-pablo-cacheuta/XX.jpg`,
   con un `alt` que describa la escena (qué pasa, quién, dónde) y la `orientation` real de cada foto.
6. Si alguna foto es de un banco libre, agregá `credit: { author, url }` y registrala en `CREDITS.md`.
7. Corré `npm run build`: si falta una imagen, un alt o un campo, el build falla y dice dónde.

### Rebrandear el template

1. Editá `src/config/site.ts` completo (marca, contacto, paquetes, FAQ, testimonios reales con
   `placeholder: false`, `form.endpoint`/`accessKey`) y `site` en `astro.config.mjs`.
2. Reemplazá las fotos de `src/assets/hero`, `src/assets/about` y la collection de proyectos.
3. Con un cliente real: `demoNotice.enabled = false`. El crédito "Sitio por Estudio Nodo" se controla con `studioCredit`.
4. Ajustá los tokens de color/tipografía en `src/styles/global.css` si la marca lo pide.

---

## ESTÉTICA

Galería contemporánea / editorial de autor: silenciosa, cinematográfica, con mucho aire, precisa,
cálida y atemporal; la interfaz casi desaparece.

Ajustado con `referencias/`: **base clara y cálida** (papel hueso, como 3 de las 4 referencias),
tipografía editorial serif grande para el nombre y los títulos, metadatos en versalitas chicas con
mucho tracking, fotos sin marco ni decoración en grillas ordenadas, líneas finas de 1 px como único
ornamento y un acento terracota muy apagado. El tema oscuro (inspirado en la referencia
"Urban Culture") queda como alternativa por tokens, no como default.

Se descarta explícitamente de las referencias: marcos tipo polaroid, fotos inclinadas, recortes tipo
sticker, pastillas redondeadas, fondos rosados y titulares en minúscula "cute" (referencia
"amanda rosa"): contradicen el tono silencioso y profesional.

## REFERENCIA

Las imágenes de `referencias/`: igualá la sensación y el estilo (fondo, ritmo de las grillas, tamaño
y márgenes de las fotos, peso tipográfico, interacciones), no el contenido. No copies textos, logos,
fotos ni marcas. No muevas, renombres ni borres `referencias/`.

Qué tomar de cada una:

- **Minimal Photography Portfolio** (la más cercana): fondo hueso, serif editorial de alto contraste,
  hero asimétrico texto + foto vertical grande, grillas de 3 con gutter chico, botón rectangular sólido.
- **Mary Kvitkova**: hero a sangre con nombre grande en display fino, nav en versalitas chicas,
  credenciales en fila bajo el hero (años / bodas / lugares), títulos de sección con una línea de 1 px
  que se extiende, "Sobre mí" con dos fotos superpuestas, paquetes en cards con bordes de 1 px y filas
  separadas por divisores finos, acento terracota.
- **Urban Culture (oscuro)**: metadatos verticales en mayúsculas con tracking muy amplio, líneas
  cortas de 1 px como acentos, sensación de
  profundidad al scrollear (perspectiva sutil sobre una pila de fotos).
- **amanda rosa**: solo la idea de filtros por categoría sobre la grilla (rediseñados como texto con
  subrayado, no pastillas).

## INTENCIÓN

Quien entra tiene que ver en segundos que el trabajo es bueno y tiene una mirada propia: las fotos
hablan primero, y el diseño las enmarca sin competir con ellas. Después tiene que sentir que con él
trabaja una persona cercana y profesional, entender qué ofrece y cuánto sale aproximadamente, y pedir
presupuesto sin fricción. Quien compra el template tiene que percibir un portfolio terminado, al que
solo le falta cargar sus fotos.

## JERARQUÍA Y LAYOUT

Lo que más tiene que destacar: las fotos, el nombre del fotógrafo con su especialidad y el botón
"Consultar disponibilidad" (WhatsApp como acción secundaria).

Páginas previstas (no se crean hasta que se pidan):

- **Home (landing)**: header minimal (nombre, navegación en versalitas, CTA) → hero (foto a sangre o
  secuencia lenta de 3 fotos con crossfade, pausable, con nombre en display grande y bajada; en
  desktop se admite la variante asimétrica texto + foto vertical de la referencia "Minimal") → fila de
  credenciales (9 años · +150 bodas · Mendoza, San Juan y destino) → trabajos destacados (grilla curada
  con ritmo variado: verticales, horizontales y alguna a todo el ancho) → especialidades (bodas,
  retratos, marcas) con foto y link → sobre mí (retrato + foto secundaria superpuesta + texto en
  primera persona) → cómo trabajo (pasos numerados) → paquetes con precios "desde" → testimonios →
  clientes y publicaciones → preguntas frecuentes → contacto con formulario → footer (con aviso de demo).
- **Portfolio** (`/trabajos`): todos los trabajos con filtro por especialidad del lado del cliente,
  sin recargar; filtros como texto con subrayado.
- **Proyecto** (`/trabajos/[slug]`): portada grande, título, lugar y fecha, texto breve, galería
  completa con lightbox, CTA de consulta al final y navegación anterior/siguiente.
- **Legales**: política de privacidad (`/privacidad`, por los datos del formulario).

Títulos de sección: display + línea de 1 px que se extiende hasta el borde del contenedor. Sin
kickers/eyebrows encima de los títulos y sin números de sección decorativos (solo se numeran los pasos
del proceso, porque la secuencia informa). Las credenciales van como una frase en una línea fina, no
como bloque de métricas grandes.

Las fotos se muestran respetando su proporción original (nunca recortadas a la fuerza en la galería
del proyecto). En cards y grillas de la home/portfolio se puede usar un `aspect-ratio` fijo por
orientación (4:5 vertical, 3:2 horizontal). El texto va en un contenedor de 1200–1360 px; las fotos
pueden ir a todo el ancho o con márgenes amplios.

## SISTEMA VISUAL

- **Tipografía**:
  - Display: **Instrument Serif** (self-hosted, 400 + itálica). Serif editorial de alto contraste,
    levemente condensada; sentence case; itálica solo para apartes en primera persona. Tracking
    −0.01 a −0.02em en tamaños grandes. Titular del hero `clamp(3.25rem, 1.75rem + 6vw, 6rem)`
    (máx. 6rem), h2 `clamp(2.25rem, 1.5rem + 3vw, 4rem)`. Se descartó Fraunces por ser el default
    más predecible del rubro.
  - Cuerpo y UI: **Inter** (variable). 400/500, cuerpo `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`,
    interlineado 1.6, medida máx. ~65ch.
  - Metadatos (lugar, fecha, categoría, nav, labels): Inter 11–12 px, MAYÚSCULAS, tracking 0.18–0.24em,
    color `muted`. No se usa monoespaciada.
  - Escala fluida con `clamp()`. Fuentes con `font-display: swap`; precargar solo el display del hero.
- **Color** (neutro, nunca tiñe las fotos; tokens en `@theme`, nunca hex en componentes):

  | Token | Claro (default) | Oscuro | Uso |
  | --- | --- | --- | --- |
  | `--color-bg` | `#F4EFE8` hueso cálido | `#1C1B19` | fondo |
  | `--color-surface` | `#ECE6DD` | `#252321` | bandas alternas, cards |
  | `--color-ink` | `#1F1C19` | `#EDE7DF` | texto principal, botón sólido |
  | `--color-muted` | `#6B645C` | `#A39B91` | metadatos, texto secundario |
  | `--color-line` | `#D8D0C5` | `#3A3733` | divisores 1 px, bordes de cards |
  | `--color-accent` | `#9A5536` terracota apagada | `#D08A66` | links, foco, detalles del CTA |

  Verificar contraste AA de cada par texto/fondo al definir los tokens (muted y accent sobre bg y surface).
- **Bordes**: fotos sin radio (máx. 2 px) y sin bordes ni sombras sobre ellas. Divisores y bordes de
  card de 1 px en `--color-line`. Botones rectangulares sobrios: primario sólido `ink` sobre `bg`,
  secundario con borde de 1 px o subrayado. Sin pastillas redondeadas.
- **Espaciado**: escala de 4/8 px; secciones separadas por 96–160 px en desktop (64–96 px en mobile);
  gutters de grilla de fotos chicos y constantes (8–16 px), como en las referencias.
- **Fotografía**: placeholders neutros con proporciones reales y variadas (2:3, 3:2, 4:5, 16:9),
  claramente marcados ("FOTO: boda, ceremonia, vertical"), intercambiables desde la collection. Si se
  usan fotos de bancos libres (Unsplash/Pexels): autor y link en `CREDITS.md` y en el campo `credit`.
- **Iconografía**: mínima, Lucide vía astro-icon, stroke 1.25–1.5; solo flechas, cerrar, redes,
  WhatsApp.

## RESTRICCIONES

Siempre:

- HTML semántico y accesibilidad AA (contraste, foco visible con `--color-accent`, alt descriptivo de
  cada foto desde la collection, lightbox con teclado, focus trap y cierre con Esc, formulario con
  labels reales y errores accesibles, áreas táctiles ≥ 44 px).
- Optimización de imágenes: `<Image />` / `<Picture />` con AVIF/WebP, `srcset` y `sizes` correctos
  para cada layout, `width`/`height` para evitar CLS, `loading="lazy"` salvo el hero
  (`fetchpriority="high"`, `loading="eager"`), placeholder de color dominante o LQIP mientras carga.
  EXIF eliminado (sharp lo hace por defecto; no usar `withMetadata`).
- Formulario de presupuesto (nombre, email, WhatsApp opcional, tipo de servicio, fecha estimada, lugar,
  mensaje) vía servicio configurable en `site.form` (Web3Forms o Formspree), honeypot, checkbox de
  consentimiento con link a privacidad, estados de envío y fallback a WhatsApp/mailto. Con `endpoint`
  vacío (demo) muestra `form.demoMessage` en vez de enviar.
- JSON-LD: `Person` + `ProfessionalService` con `areaServed`, e `ImageObject` con `creator` y
  `copyrightNotice` en las fotos destacadas. Open Graph por proyecto con su portada, sitemap, SEO local
  (especialidad + Mendoza en títulos y descripciones).
- Copy y datos en `site.ts`, trabajos solo en la collection, cero JS fuera de las islands que lo
  necesiten (lightbox, filtros, formulario, hero con secuencia).
- Lighthouse ≥ 95 en performance, accesibilidad, buenas prácticas y SEO, aun con galerías pesadas.

Nunca:

- Bloquear el click derecho, marcas de agua invasivas ni elementos superpuestos para "proteger" fotos.
- Recortar o deformar fotos en la página del proyecto, comprimir hasta ver artefactos, ni aplicar
  filtros de color de la interfaz sobre las fotos.
- Testimonios, clientes o publicaciones inventados presentados como reales (los de ejemplo tienen
  `placeholder: true` en `site.ts` y deben mostrarse como tales), ni fotos de marcas o personas reales
  identificables sin autorización.
- Carruseles automáticos rápidos, sliders con flechas en el hero, popups al entrar, música automática,
  librerías de galería pesadas, jQuery, React/Vue salvo que sea imprescindible, emojis como íconos,
  lorem ipsum, gradientes genéricos de "IA", pastillas redondeadas ni marcos tipo polaroid.

## COMPORTAMIENTO

- Responsive mobile-first (sm/md/lg/xl/2xl); mucho tráfico llega desde Instagram en el celular. En
  mobile: fotos a todo el ancho en una columna (o dos para verticales), menú en panel a pantalla
  completa, lightbox con swipe y pinch-zoom nativo, botón de consulta/WhatsApp visible sin tapar fotos.
- Hover (solo `@media (hover: hover)`): en cards de proyecto, zoom ≤ 1.03 de la foto dentro de su marco
  y aparición de título y categoría en versalitas; cursor personalizado opcional ("Ver"); links con
  subrayado animado.
- Animaciones: reveal on scroll de fotos con máscara (`clip-path`) o fade + translate de 16–24 px, con
  stagger en grillas, vía CSS scroll-driven animations con fallback en IntersectionObserver; crossfade
  lento en el hero; parallax muy sutil en fotos a todo el ancho; texto del hero línea por línea. Opcional
  (referencia "Urban Culture"): una sola sección con perspectiva sutil (`rotateX`/`scale` ligados al
  scroll) sobre una pila de fotos. Duraciones 300–900 ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
  Solo animar `transform`, `opacity` y `clip-path`. JS de animación solo con Motion en islands chicas.
- Lightbox: `<dialog>` nativo, flechas del teclado y swipe, contador (3 / 12), precarga de la foto
  siguiente y anterior, hash por foto en la URL para compartir una imagen puntual.
- Transiciones entre páginas con View Transitions de Astro (`<ClientRouter />`) y `transition:name`
  para que la portada de la card se transforme en la portada del proyecto.
- `prefers-reduced-motion`: sin parallax, sin secuencia automática en el hero (queda la primera foto),
  sin desplazamientos ni perspectiva; solo fades instantáneos.
