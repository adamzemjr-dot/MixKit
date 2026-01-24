let credits = 1000;

function buy(item, price) {
  if (credits < price) {
    alert("Not enough credits");
    return;
  }

  credits -= price;
  document.getElementById("credits").textContent = credits;

  const log = document.getElementById("log");
  const li = document.createElement("li");
  li.textContent = `✓ ${item} purchased for ${price} credits`;
  log.prepend(li);
}
