function buy(item) {
  const list = document.getElementById("purchase-list");

  // Prevent duplicate buys
  for (let li of list.children) {
    if (li.textContent.includes(item)) {
      alert(`You already own the ${item}!`);
      return;
    }
  }

  // Add purchased item to list
  const li = document.createElement("li");
  li.textContent = `✔️ Purchased: ${item}`;
  list.appendChild(li);
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
