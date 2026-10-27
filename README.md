# kivora_style

Librería de estilo de **Kivora TC**: CSS puro, oscuro y monocromático, para webs, apps de escritorio (Tauri) y móvil.

**Catálogo en vivo:** https://kivoratc.github.io/kivora_style/

## Qué hay aquí

- `kivora.css`: punto de entrada, importa toda la librería.
- `css/`: tokens y un archivo por componente.
- `js/`: cambio de tema claro/oscuro y firma de píxeles.
- `assets/logo.png`: logo blanco con fondo transparente.
- `index.html`: catálogo de todos los componentes en un solo archivo.
- `STYLE.md`: guía completa del estilo y sus reglas.

## Uso rápido

Copia esta carpeta a tu proyecto y enlaza `kivora.css`. En proyectos con Vite o Tauri, impórtala en el archivo de entrada. Los detalles están en `STYLE.md`, sección 3.

## Regenerar el catálogo

Después de cambiar tokens o componentes, desde esta carpeta:

```
python3 catalog/build.py
```

Eso reescribe `index.html`.
