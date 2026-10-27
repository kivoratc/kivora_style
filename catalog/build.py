"""Ensambla index.html (el catálogo): un solo archivo con CSS, JS y logo incrustados.

Uso (desde la carpeta kivora_style):  python3 catalog/build.py
"""
import base64
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CAT = ROOT / "catalog"
JS_FILES = [ROOT / "js/theme.js", ROOT / "js/dissolve.js", CAT / "catalog.js"]


def read(path):
    return path.read_text(encoding="utf-8")


def library_css_files():
    """Archivos CSS en el orden de kivora.css."""
    imports = re.findall(r'@import url\("\./(.+?)"\)', read(ROOT / "kivora.css"))
    return [ROOT / name for name in imports]


def build_css():
    logo = base64.b64encode((ROOT / "assets/logo.png").read_bytes()).decode()
    parts = [read(path) for path in library_css_files()]
    parts.append(f':root {{ --k-logo: url("data:image/png;base64,{logo}"); }}')
    parts.append(read(CAT / "catalog.css"))
    parts.append(read(CAT / "catalog-screens.css"))
    return "\n".join(parts)


def build_js():
    """Cada script va en su propia función para que no choquen sus nombres."""
    return "\n".join(f"(function () {{\n{read(path)}\n}})();" for path in JS_FILES)


def build_body():
    return "\n".join(read(path) for path in sorted((CAT / "sections").glob("*.html")))


def main():
    page = read(CAT / "shell.html")
    page = page.replace("__CSS__", build_css())
    page = page.replace("__BODY__", build_body())
    page = page.replace("__JS__", build_js())
    out = ROOT / "index.html"
    out.write_text(page, encoding="utf-8")
    print(f"{out.name}: {out.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
