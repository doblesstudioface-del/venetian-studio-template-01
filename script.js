const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE =
  "Hola, vengo desde la web de Venetian Studio y me gustaría recibir información sobre un proyecto.";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const ctaLinks = document.querySelectorAll("[data-whatsapp-cta]");
const whatsappStatus = document.getElementById("whatsapp-status");
const revealTargets = document.querySelectorAll(
  ".trust, .services article, .portfolio-card, .process-list li, .final-cta-box"
);

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const whatsappUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "#contacto";

ctaLinks.forEach((link) => {
  link.setAttribute("href", whatsappUrl);
});

if (whatsappStatus && WHATSAPP_NUMBER) {
  whatsappStatus.textContent = "WhatsApp configurado y listo para captar leads desde la web.";
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
}
