# Tomás Aguirre Fotografía — template de portfolio para fotógrafos

Sitio estático de portfolio y captación de clientes para fotógrafos, hecho por **Estudio Nodo**.
Muestra el trabajo con calidad de galería y lleva a cada visita a pedir presupuesto o consultar
disponibilidad (formulario o WhatsApp).

> **Demo:** el fotógrafo "Tomás Aguirre", sus trabajos, precios y testimonios son ficticios. Las fotos
> son placeholders etiquetados o imágenes generadas con IA (ver [`CREDITS.md`](CREDITS.md)).

## Qué incluye

- **Home** con hero a sangre (secuencia lenta de 3 fotos, pausable), trabajos destacados, especialidades,
  sobre mí, proceso, paquetes con precios "desde", testimonios, clientes, preguntas frecuentes y
  formulario de presupuesto.
- **Portfolio** (`/trabajos`) con filtro por especialidad sin recargar la página.
- **Página por proyecto** (`/trabajos/[slug]`) con las fotos en su proporción real, lightbox con
  teclado, swipe y link directo a cada foto, y transición animada desde la card.
- **Política de privacidad** y página 404.
- Formulario que funciona en un sitio estático (Web3Forms o Formspree), con honeypot antispam,
  consentimiento y fallback a WhatsApp/email.
- SEO local: JSON-LD (`Person`, `ProfessionalService`, `ImageObject`), Open Graph por proyecto y sitemap.
- Accesibilidad AA, respeto de `prefers-reduced-motion` y Lighthouse ≥ 98 en las cuatro categorías.

## Stack

[Astro 7](https://astro.build) (salida estática) · TypeScript strict · Tailwind CSS v4 · `astro:assets`
con sharp (WebP con JPG de respaldo, sin metadatos EXIF) · Instrument Serif + Inter self-hosted · Lucide vía
`astro-icon`. Sin React ni librerías de galería: el JavaScript se limita a islands chicas.

Requiere **Node.js ≥ 22.23.4**.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Build estático en `dist/` (valida los proyectos: una imagen o un campo faltante rompe el build) |
| `npm run preview` | Sirve el build localmente |
| `npx astro check` | Chequeo de tipos |

## Personalizar el template

Todo lo que cambia entre fotógrafos está centralizado. Los componentes no tienen textos, precios ni
datos de contacto escritos a mano.

| Qué | Dónde |
| --- | --- |
| Marca, bajada, textos, navegación, especialidades, sobre mí, proceso, paquetes, FAQ, testimonios, contacto, redes, formulario | `src/config/site.ts` |
| Trabajos del portfolio (uno por archivo) | `src/content/projects/*.md` |
| Fotos de cada trabajo | `src/assets/projects/[slug]/` |
| Fotos del hero y de "sobre mí" | `src/assets/hero/`, `src/assets/about/` |
| Colores, tipografías y escala | `src/styles/global.css` (tokens en `@theme`) |

Para un cliente real:

1. Completá `src/config/site.ts`. Marcá los testimonios reales con `placeholder: false`.
2. Reemplazá las fotos y los proyectos (ver abajo).
3. Desactivá el aviso de demo con `demoNotice.enabled = false`.
4. Configurá el formulario: `form.provider`, `form.endpoint` y, para Web3Forms, `form.accessKey`.
   Con `endpoint` vacío, el formulario muestra un aviso de demostración en lugar de enviar.
5. Ajustá el crédito del footer con `studioCredit`.

### Agregar un trabajo

1. Elegí un slug en kebab-case, por ejemplo `ana-y-pablo-cacheuta`.
2. Creá `src/assets/projects/ana-y-pablo-cacheuta/` con `cover.jpg` y de 8 a 15 fotos (`01.jpg`, `02.jpg`…).
   Exportalas en sRGB, con el lado largo de 2400 a 3000 px. Astro genera los formatos y tamaños.
3. Copiá un archivo de `src/content/projects/` como `ana-y-pablo-cacheuta.md` y completá los campos:
   título, `slug`, `category` (`bodas`, `retratos` o `marcas`), lugar, fecha, resumen, `featured`
   (aparece en la home) y la orientación de cada foto, con un `alt` que describa la escena.
4. Corré `npm run build`: si falta una imagen, un `alt` o un campo, el build falla e indica dónde.

## Deploy en Vercel

Importá el repositorio en Vercel: detecta Astro solo (build `npm run build`, salida `dist`).

La URL pública del sitio (canonical, sitemap, Open Graph) se resuelve sola:

1. La variable de entorno `SITE_URL`, si está definida. Usala para un dominio propio, por ejemplo
   `SITE_URL=https://www.tomasaguirre.com`.
2. Si no, el dominio de producción que Vercel asigna al proyecto.
3. En builds locales, un dominio de ejemplo.

## Documentación del proyecto

- [`CLAUDE.md`](CLAUDE.md): reglas de diseño, contenido y comportamiento del sitio.
- [`DESIGN.md`](DESIGN.md): sistema visual (tokens, componentes, movimiento).
- [`PRODUCT.md`](PRODUCT.md): contexto de producto y audiencias.
- [`CREDITS.md`](CREDITS.md): origen de cada imagen.

---

Hecho por Estudio Nodo.
