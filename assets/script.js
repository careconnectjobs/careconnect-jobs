const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menü öffnen");
    }
  });
}

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

const email = "info@careconnect-jobs.de";
const emailStatus = document.querySelector("[data-email-status]");

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.addEventListener("click", () => {
    if (!navigator.clipboard?.writeText) {
      return;
    }

    navigator.clipboard.writeText(email).then(() => {
      if (!emailStatus) {
        return;
      }

      emailStatus.textContent = "E-Mail-Adresse kopiert.";
      window.setTimeout(() => {
        emailStatus.textContent = "";
      }, 3200);
    });
  });
});
