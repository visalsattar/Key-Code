const keyContainers = document.querySelectorAll(".keySection .key-container .key-content");
const extraContainers = document.querySelectorAll(".extraSection .key-container .key-content");

let clickCount = 0;
let lastKeyPressed = '';

window.addEventListener("keydown", (e) => {
  if (e.key !== lastKeyPressed) {
    clickCount = 0;
  }
  clickCount++;
  lastKeyPressed = e.key;

  const isAlphabet = /^[a-zA-Z]$/.test(e.key);
  const isNumber = /^[0-9]$/.test(e.key);
  const isSpecialSymbol = /[^a-zA-Z0-9\s]/.test(e.key);

  keyContainers[0].textContent = e.key === " " ? "Space" : e.key;
  keyContainers[1].textContent = e.code;
  keyContainers[2].textContent = e.key.charCodeAt(0);

  extraContainers[0].textContent = clickCount;
  extraContainers[1].textContent = isAlphabet ? e.key : "-";
  extraContainers[2].textContent = isNumber ? e.key : "-";
  extraContainers[3].textContent = isSpecialSymbol ? e.key : "-";
});
