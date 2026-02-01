const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const liquid = card.querySelector(".liquid");
    liquid.style.height = "88%";
  });

  card.addEventListener("mouseleave", () => {
    const liquid = card.querySelector(".liquid");
    liquid.style.height = "0%";
  });
});
