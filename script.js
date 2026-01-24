function buy(item) {
  const log = document.getElementById("log");

  // prevent duplicate buys
  for (let li of log.children) {
    if (li.textContent.includes(item)) {
      alert("You already bought this item!");
      return;
    }
  }

  const li = document.createElement("li");
  li.textContent = `✅ You bought the ${item}`;
  log.appendChild(li);
}
