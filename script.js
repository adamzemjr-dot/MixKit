function goTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");
const navButtons = document.querySelectorAll("nav button");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });

  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      navButtons.forEach(btn => {
        btn.classList.toggle(
          "active",
          btn.dataset.link === sec.id
        );
      });
    }
  });
});
