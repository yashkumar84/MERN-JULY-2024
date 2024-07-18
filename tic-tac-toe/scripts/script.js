console.log("Hello the scriptt iss running");

window.addEventListener("load", bindEvents);

function bindEvents() {
  const buttons = document.querySelectorAll(".board-btn");
  for (let button of buttons) {
    button.addEventListener("click", () => markXor0(button));
  }
}

let flag = true;

function markXor0(button) {
  if (!button.innerText) {
    flag ? (button.innerText = "X") : (button.innerText = "0");
    flag = !flag;
  }
}
