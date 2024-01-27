const canvas = document.querySelector("#drawing-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "red";

canvas.addEventListener("click", (e) => {
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 202, 0, 2 * Math.PI);
  ctx.stroke();
});
