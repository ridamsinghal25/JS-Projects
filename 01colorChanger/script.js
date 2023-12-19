const grey = document.getElementById("grey");
const white = document.getElementById("white");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");

grey.addEventListener("click", () => {
  document.body.style.backgroundColor = "grey";
});

white.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

yellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
