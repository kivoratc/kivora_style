// Kivora TC · firma de píxeles
// Rellena .k-dissolve (separador) y .k-stage (cuadritos que derivan).
// Las posiciones salen de una semilla fija: la página siempre se ve igual.

let seed = 7;

function rnd() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

function fillDissolve(el) {
  const count = 70;
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const dot = document.createElement("i");
    const size = Math.max(2, Math.round(12 - t * 9 + (rnd() - 0.5) * 3));
    dot.style.width = dot.style.height = `${size}px`;
    dot.style.opacity = Math.max(0.06, (1 - t) * (0.5 + rnd() * 0.5)).toFixed(2);
    dot.style.transform = `translateY(${Math.round((rnd() - 0.5) * t * 10)}px)`;
    el.appendChild(dot);
  }
}

function fillStage(el) {
  for (let i = 0; i < 16; i++) {
    const bit = document.createElement("span");
    const size = 4 + Math.round(rnd() * 9);
    const angle = rnd() * Math.PI * 2;
    const radius = 36 + rnd() * 13;
    bit.className = "k-bit";
    bit.style.width = bit.style.height = `${size}px`;
    bit.style.left = `${50 + Math.cos(angle) * radius}%`;
    bit.style.top = `${50 + Math.sin(angle) * radius}%`;
    bit.style.setProperty("--dx", `${Math.cos(angle) * (10 + rnd() * 22)}px`);
    bit.style.setProperty("--dy", `${Math.sin(angle) * (10 + rnd() * 22)}px`);
    bit.style.setProperty("--t", `${6 + rnd() * 7}s`);
    bit.style.setProperty("--o2", (0.08 + rnd() * 0.12).toFixed(2));
    bit.style.opacity = (0.25 + rnd() * 0.45).toFixed(2);
    el.appendChild(bit);
  }
}

document.querySelectorAll(".k-dissolve").forEach(fillDissolve);
document.querySelectorAll(".k-stage").forEach(fillStage);
