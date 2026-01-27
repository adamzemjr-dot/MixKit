const slides = [
  {
    title: "MixKit",
    subtitle: "The all-in-one smoothie starter box",
    content: "A premium box with a blender, extra batteries, and a smoothie recipe book.",
    theme: "pink"
  },
  {
    title: "What’s Inside",
    subtitle: "",
    content: "• Portable blender cup\n• Extra batteries\n• Recipe book",
    theme: "purple"
  },
  {
    title: "Why MixKit?",
    subtitle: "",
    content: "Healthy smoothies anywhere. No mess. No stress.",
    theme: "green"
  },
  {
    title: "Perfect For",
    subtitle: "",
    content: "Students • Gym lovers • Families • Travelers",
    theme: "blue"
  },
  {
    title: "Dragons’ Den Ready",
    subtitle: "",
    content: "One box. One blend. Huge potential.",
    theme: "yellow"
  }
];

let index = 0;

const app = document.getElementById("app");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const contentEl = document.getElementById("content");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");

function render() {
  const slide = slides[index];

  titleEl.textContent = slide.title;
  subtitleEl.textContent = slide.subtitle;
  contentEl.textContent = slide.content;

  app.className = "";
  app.classList.add(slide.theme);

  backBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

backBtn.onclick = () => {
  if (index > 0) {
    index--;
    render();
  }
};

nextBtn.onclick = () => {
  if (index < slides.length - 1) {
    index++;
    render();
  }
};

render();
