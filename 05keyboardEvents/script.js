const input = document.querySelector("#input");
const key = document.querySelector("#key");
const keycode = document.querySelector("#keycode");
const code = document.querySelector("#code");

input.addEventListener("keydown", (e) => {
  key.textContent = `key: ${e.key === " " ? "Space" : e.key}`;
  keycode.textContent = `keycode: ${e.keyCode}`;
  code.textContent = `code: ${e.code}`;
  console.log("alt: ", e.altKey);
  console.log("ctrl: ", e.ctrlKey);
  console.log("shift: ", e.shiftKey);
});
