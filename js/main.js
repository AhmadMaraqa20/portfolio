// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // Project card expand/collapse
  document.querySelectorAll(".proj-head").forEach((head) => {
    head.addEventListener("click", () => {
      const card = head.closest(".proj-card");
      const body = card.querySelector(".proj-body");
      const isOpen = card.classList.contains("open");
      if (isOpen) {
        body.style.maxHeight = null;
        card.classList.remove("open");
      } else {
        card.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // Category filter on projects page
  const catBtns = document.querySelectorAll(".cat-btn");
  const groups = document.querySelectorAll(".cat-group");
  if (catBtns.length) {
    catBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        catBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.dataset.cat;
        groups.forEach((g) => {
          g.style.display = target === "all" || g.dataset.cat === target ? "" : "none";
        });
      });
    });
  }
});
