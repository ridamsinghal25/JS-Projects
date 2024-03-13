const baseURL = "https://source.unsplash.com/all/300x300";

const content = document.querySelector(".content");
const btn = document.querySelector(".button");

btn.addEventListener("click", (e) => {
  if (content.firstElementChild) {
    content.removeChild(content.firstElementChild);
  }

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", baseURL);
  content.appendChild(imageElement);
});
