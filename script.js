let credits = 1000;

function buy(item, price) {
  if (credits >= price) {
    credits -= price;
    document.getElementById("credits").textContent = credits;

    const log = document.getElementById("log");
    const li = document.createElement("li");
    li.textContent = `✅ Bought ${item} for ${price} credits`;
    log.appendChild(li);
  } else {
    alert("❌ Not enough credits!");
  }
}
