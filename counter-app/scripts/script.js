window.addEventListener("load", bindEvent);
let output;
let count = 0;
function bindEvent() {
  document.querySelector("#btn-plus").addEventListener("", plusCount);
  document.querySelector("#btn-minus").addEventListener("click", minusCount);
  document.querySelector("#btn-reset").addEventListener("click", resetCount);
  output = document.getElementById("output");
  printOutput();
}

function printOutput() {
  output.innerText = count;
}

function plusCount() {
  count += 1;
  printOutput();
}

function minusCount() {
  if (count <= 0) return;
  count -= 1;
  printOutput();
}

function resetCount() {
  count = 0;
  printOutput();
}
