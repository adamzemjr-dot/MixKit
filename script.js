const images = [
  "MixKit_ Your All-in-One Smoothie Solution - visual selection.png",
  "MixKit_ Your All-in-One Smoothie Solution - visual selection(1).png"
];

let index = 0;
const img = document.getElementById("switchImage");

setInterval(() => {
  img.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
    img.style.opacity = 1;
  }, 400);
}, 3500);
