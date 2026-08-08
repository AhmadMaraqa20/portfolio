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
      if (card.classList.contains("open")) {
        body.style.maxHeight = body.scrollHeight + "px";
        requestAnimationFrame(() => (body.style.maxHeight = null));
        card.classList.remove("open");
      } else {
        card.classList.add("open");
        const fit = () => {
          if (card.classList.contains("open")) {
            body.style.maxHeight = body.scrollHeight + "px";
          }
        };
        fit();
        // images finish loading after the card opens — regrow to fit them
        body.querySelectorAll("img").forEach((img) => {
          if (!img.complete) img.addEventListener("load", fit, { once: true });
        });
      }
    });
  });

  // Click a project image to view it full size
  document.querySelectorAll(".proj-media img").forEach((img) => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      const box = document.createElement("div");
      box.className = "lightbox";
      const big = document.createElement("img");
      big.src = img.src;
      big.alt = img.alt;
      box.appendChild(big);
      box.addEventListener("click", () => box.remove());
      document.addEventListener(
        "keydown",
        (ev) => ev.key === "Escape" && box.remove(),
        { once: true }
      );
      document.body.appendChild(box);
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
