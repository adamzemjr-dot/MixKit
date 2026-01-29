// Smooth scroll to content
document.getElementById("learnBtn").addEventListener("click", () => {
  document.getElementById("inside").scrollIntoView({
    behavior: "smooth"
  });
});

// Card click interaction
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.background = "#ff6a3d";
    card.style.color = "white";
    setTimeout(() => {
      card.style.background = "white";
      card.style.color = "#222";
    }, 600);
  });
});
