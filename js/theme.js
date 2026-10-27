// Kivora TC · cambio de tema
// Uso: <button data-k-theme-toggle>…</button> y cargar este archivo.
// Guarda la elección del visitante; sin elección sigue al sistema.

const KEY = "k-theme";
const root = document.documentElement;

function systemTheme() {
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function save(value) {
  try { localStorage.setItem(KEY, value); } catch { /* sin almacenamiento */ }
}

function load() {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

function apply(theme) {
  root.setAttribute("data-theme", theme);
}

const saved = load();
if (saved) apply(saved);

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-k-theme-toggle]")) return;
  const current = root.getAttribute("data-theme") || systemTheme();
  const next = current === "dark" ? "light" : "dark";
  apply(next);
  save(next);
});
