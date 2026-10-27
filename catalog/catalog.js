// Catálogo · demos interactivas: abrir ventana modal y mostrar avisos breves.

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-cat-open]");
  if (opener) {
    const dialog = document.getElementById(opener.dataset.catOpen);
    if (dialog && dialog.showModal) dialog.showModal();
    return;
  }

  const trigger = event.target.closest("[data-cat-toast]");
  if (!trigger) return;

  const region = document.getElementById("toasts");
  const toast = document.createElement("div");
  toast.className = "k-toast";
  toast.textContent = trigger.dataset.catToast;
  region.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
});
