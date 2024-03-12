// Method 1

/*

const inputField = document.querySelector("#input-field");
const outputBtn = document.querySelector("#output-field");

const upperCaseBtn = document.querySelector(".btn-uppercase");
const lowerCaseBtn = document.querySelector(".btn-lowercase");
const capitalizeBtn = document.querySelector(".btn-capitalize");
const boldBtn = document.querySelector(".btn-bold");
const italicBtn = document.querySelector(".btn-italic");
const underlineBtn = document.querySelector(".btn-underline");

upperCaseBtn.addEventListener("click", () => {
  outputBtn.textContent = inputField.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", () => {
  outputBtn.textContent = inputField.value.toLowerCase();
});

capitalizeBtn.addEventListener("click", () => {
  outputBtn.textContent = capitalizeFirstLetter(inputField.value);
});

boldBtn.addEventListener("click", () => {
  outputBtn.innerHTML = `<strong>${inputField.value}</strong>`;
});

italicBtn.addEventListener("click", () => {
  outputBtn.innerHTML = `<em>${inputField.value}</em>`;
});

underlineBtn.addEventListener("click", () => {
  outputBtn.innerHTML = `<u>${inputField.value}</u>`;
});

function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

*/

// Method 2

const input = document.querySelector("#input-field");
const output = document.querySelector("#output-field");

const btns = document.querySelectorAll(".btn");
// console.log(btns);

// console.log("Outside button");

btns.forEach((btn) => {
  // console.log("Inside button");
  btn.addEventListener("click", () => {
    // console.log("Inside addEventListener", Math.floor(Math.random() * 100));
    let value = input.value;
    switch (checkClass(btn)) {
      case "uppercase":
        output.textContent = value.toUpperCase();
        break;
      case "lowercase":
        output.textContent = value.toLowerCase();
        break;
      case "capitalize":
        output.textContent = capitalizeLetter(value);
        break;
      case "bold":
        output.innerHTML = `<strong>${value}</strong>`;
        break;
      case "italic":
        output.innerHTML = `<em>${value}</em>`;
        break;
      case "underline":
        output.innerHTML = `<u>${value}</u>`;
        break;
      case "clear":
        output.textContent = "Output";
        input.value = "";
        break;
    }
  });
});

function checkClass(btnClass) {
  let className = "default";
  if (btnClass.classList.contains("uppercase")) className = "uppercase";
  else if (btnClass.classList.contains("lowercase")) className = "lowercase";
  else if (btnClass.classList.contains("capitalize")) className = "capitalize";
  else if (btnClass.classList.contains("bold")) className = "bold";
  else if (btnClass.classList.contains("italic")) className = "italic";
  else if (btnClass.classList.contains("underline")) className = "underline";
  else if (btnClass.classList.contains("clear")) className = "clear";

  return className;
}

function capitalizeLetter(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
