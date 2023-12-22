// const grey = document.getElementById("grey");
// const white = document.getElementById("white");
// const blue = document.getElementById("blue");
// const yellow = document.getElementById("yellow");

// grey.addEventListener("click", () => {
//   document.body.style.backgroundColor = "grey";
// });

// white.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });

// blue.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

// yellow.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// Approach 2

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
