const cursor = document.querySelector(".cursor");
const container = document.querySelector(".container");
console.log(cursor.style);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursor.style.backgroundColor = generateColor();
  // cursor width
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

document.addEventListener("mousedown", () => {
  cursor.style.backgroundColor = "#e74c3c";
});

document.addEventListener("mouseup", () => {
  cursor.style.backgroundColor = "#3498db";
});

function generateColor() {
  let hexValue = "#";
  const colorCodes = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    const str = colorCodes[Math.floor(Math.random() * 16)];
    hexValue += str;
  }
  return hexValue;
}
