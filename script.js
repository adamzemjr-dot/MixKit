// Smooth scroll + nav active
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

// Info card reveal
const cards = document.querySelectorAll(".info-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

cards.forEach(card => observer.observe(card));
