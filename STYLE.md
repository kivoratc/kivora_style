# STYLE.md · Kivora TC

Guía permanente del estilo visual de Kivora TC. Aplica a todo lo que se publique bajo la marca: webs, apps de escritorio (Tauri) y móvil. Si algo de un proyecto contradice esta guía, gana esta guía.

## 1. Idea en una frase

Oscuro, monocromático y calmado. El logo es blanco y negro, así que la marca también lo es. La personalidad viene de la forma redondeada de las aspas y de la disolución en píxeles, no de colores ni de efectos.

## 2. Principios

1. **Un solo acento: el blanco.** Sin color de marca. El tema claro es la inversión exacta del oscuro.
2. **Neutral para que el logo hable.** Tipografía sobria, bordes finos, nada de sombras pesadas.
3. **Redondeado, como las aspas.** Ninguna esquina dura.
4. **La firma de píxeles se usa poco.** Aparece en la portada, en separadores y en estados vacíos o de carga. Si está en todas partes, deja de ser firma.
5. **Mismo diseño en todas las pantallas.** Móvil es el mismo diseño reorganizado en una columna, no otro diseño.
6. **Sencillo primero.** Cada elemento nuevo debe justificarse. Si no hace falta, no se añade.

## 3. Cómo usar la librería

La librería está en `kivora_style/`. Se copia tal cual a cada proyecto.

```
kivora_style/
├── kivora.css          punto de entrada (importa todo)
├── css/
│   ├── tokens.css      todos los valores (color, espacio, forma, tipografía, tiempo)
│   ├── base.css        reinicio, cuerpo, títulos, foco
│   ├── layout.css      contenedor, secciones, rejillas, portada
│   ├── logo.css        .k-mark, separador de píxeles, escenario del logo
│   ├── button.css      botones
│   ├── card.css        tarjetas y paneles
│   ├── chip.css        etiquetas
│   ├── form.css        campos
│   ├── toggle.css      interruptor y casilla
│   ├── header.css      cabecera, navegación, pie
│   ├── modal.css       ventana modal
│   ├── toast.css       aviso breve
│   ├── empty.css       estado vacío
│   └── motion.css      animaciones
├── js/
│   ├── theme.js        cambio claro/oscuro
│   └── dissolve.js     rellena el separador y el escenario de píxeles
├── assets/logo.png     logo blanco con fondo transparente
├── example/index.html  página mínima de referencia
├── index.html          catálogo de estilo en un solo archivo (guía viva)
└── catalog/            fuentes del catálogo; `python3 catalog/build.py` lo regenera
```

- **Web:** enlazar `kivora_style/kivora.css` y, si se quiere, los dos scripts.
- **React + Vite / Tauri:** `import "../kivora_style/kivora.css"` en el archivo de entrada.
- **Móvil:** si es web empaquetada (Tauri, Capacitor), igual que arriba. Si es nativo, usar los valores de `tokens.css` como referencia.
- Las fuentes son Inter (texto) y JetBrains Mono (etiquetas y datos). Cargarlas desde Google Fonts o empaquetarlas con la app.
- El logo se pinta con una máscara CSS. Hay que servir los archivos por HTTP (Vite, Tauri, GitHub Pages sirven). Abrir el HTML con `file://` puede dejar el logo invisible en algunos navegadores.

## 4. Color

| Token | Oscuro | Claro | Uso |
|---|---|---|---|
| `--k-bg` | `#0a0a0b` | `#fafafa` | fondo de página |
| `--k-surface` | `#131315` | `#ffffff` | tarjetas y paneles |
| `--k-surface-2` | `#1b1b1e` | `#f0f0f2` | miniaturas, hover, botón suave |
| `--k-line` | `#2a2a2e` | `#e2e2e6` | bordes |
| `--k-ghost` | `#1e1e21` | `#ececef` | espiral de fondo en miniaturas |
| `--k-fg` | `#f5f5f6` | `#0a0a0b` | texto principal y acento |
| `--k-muted` | `#a3a3a9` | `#5d5d64` | texto secundario |
| `--k-accent` / `--k-on-accent` | blanco / negro | negro / blanco | botón principal |

Reglas:

- Ningún color literal fuera de `tokens.css`. Se usan siempre los tokens.
- Los estados (activo, hover, error) se muestran con peso, borde o relleno gris, no con colores nuevos.
- Si algún día un estado necesita color de verdad (error, éxito), se añade un solo token semántico en `tokens.css` y se usa solo para eso. Nunca como decoración.

## 5. Tipografía

- **Inter** para todo el texto. **JetBrains Mono** para etiquetas, fechas, versiones y datos.
- Escala fija: 12, 14, 16, 18, 28, 40 px y el tamaño de portada (`--k-text-hero`).
- Títulos con peso 600 a 650 y espaciado de letras ligeramente negativo. Etiquetas en mayúsculas con espaciado positivo.
- Líneas de lectura de unos 65 caracteres como máximo.
- Nada de fuentes pixeladas, ni siquiera en juegos.

## 6. Forma y espacio

- Radios: 10 px en campos, 14 px en tarjetas, píldora completa en botones, chips e iconos.
- Bordes de 1 px con `--k-line`. Sin sombras.
- Espaciado solo con la escala de múltiplos de 4 (`--k-space-1` a `--k-space-9`).
- Los grupos se separan con `gap`, no con márgenes sueltos.

## 7. Componentes disponibles

| Clase | Qué es |
|---|---|
| `.k-wrap` | contenedor centrado de 1120 px |
| `.k-section`, `.k-section__head` | sección y su cabecera |
| `.k-grid`, `.k-grid--2`, `.k-grid--3` | rejillas que se apilan en móvil |
| `.k-hero`, `.k-stage` | portada con logo grande |
| `.k-stack`, `.k-row` | pilas verticales y filas que se envuelven |
| `.k-h1`, `.k-h2`, `.k-h3`, `.k-lead`, `.k-eyebrow`, `.k-muted` | texto |
| `.k-btn` + `--primary`, `--secondary`, `--soft` | botones |
| `.k-icon-btn` | botón redondo de icono |
| `.k-card`, `.k-card__thumb`, `.k-card__body`, `.k-card__tag` | tarjeta de proyecto |
| `.k-panel` | bloque con borde, sin miniatura |
| `.k-chip`, `.k-chip--solid`, `.k-chips` | etiquetas |
| `.k-field`, `.k-input`, `.k-hint` | formularios |
| `.k-switch`, `.k-check` | interruptor y casilla (un `<input type="checkbox">` real dentro) |
| `.k-header`, `.k-header__bar`, `.k-brand`, `.k-nav`, `.k-footer` | cabecera y pie |
| `.k-modal`, `.k-modal__actions` | ventana modal sobre el elemento nativo `<dialog>` |
| `.k-toast`, `.k-toast-region` | aviso breve que se invierte para destacar |
| `.k-empty`, `.k-empty__art` | estado vacío con la espiral fantasma |
| `.k-mark` | logo pintado con el color del tema |
| `.k-dissolve` | separador que se deshace en píxeles |
| `.k-spin` | giro lento de la espiral |

Si hace falta un componente nuevo, se crea como archivo propio en `css/`, con prefijo `k-`, y se añade a `kivora.css`, a esta tabla y al catálogo (`catalog/sections/03-componentes.html`). Después se regenera `index.html`.

## 8. Móvil, tableta y escritorio

- Puntos de corte: 880 px (dos columnas), 720 px (portada y cabecera de una columna) y 560 px (una columna, botones a todo el ancho).
- Zonas táctiles de al menos 44 px (`--k-tap`).
- Márgenes laterales de al menos 16 px, respetando las zonas seguras del teléfono.
- En escritorio, apps con barra lateral y paneles usan los mismos tokens y componentes. No se inventa otro estilo para apps.

## 9. Firma de píxeles

- Usos permitidos: portada (`.k-stage`), separador (`.k-dissolve`), estados vacíos, pantallas de carga y miniaturas con la espiral fantasma.
- Usos no permitidos: fondos de texto, bordes de todos los elementos, tipografía.
- Los cuadritos son pequeños y de esquinas redondeadas, como en el logo. No es pixel art clásico.
- Con `prefers-reduced-motion` todo queda quieto, y la página debe verse completa así.

## 10. Reglas para mantener la librería

Siguen las buenas prácticas del kit (`buenas-practicas.md`):

- Cada archivo hace una sola cosa y se mantiene corto (menos de 100 líneas en CSS, menos de 60 en JS).
- Los valores viven en `tokens.css`. Los componentes solo los consumen.
- Cada tema (claro y oscuro) se define completo en tokens; los componentes nunca preguntan por el tema.
- Sin selectores profundos ni `!important`. Una clase por componente, con elementos `__x` y variantes `--x`.
- Todo componente nuevo debe verse bien en claro, en oscuro y a 400 px de ancho.

## 11. Lista de revisión antes de publicar

- [ ] Se ve bien en oscuro y en claro.
- [ ] Se ve bien a 400 px, sin scroll horizontal.
- [ ] No hay colores ni tamaños literales fuera de `tokens.css`.
- [ ] Las esquinas son redondeadas y no hay sombras.
- [ ] Los botones y enlaces tienen foco visible y 44 px de zona táctil.
- [ ] La firma de píxeles aparece solo donde la guía lo permite.
- [ ] El nombre en pantalla es Kivora TC.
