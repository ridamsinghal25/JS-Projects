const url = "https://api.thecatapi.com/v1/images/search";
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      if (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const catUrl = res[0].url;

      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", catUrl);
      imgElement.classList.add("cats");
      imgElement.classList.add("random_cats");

      container.appendChild(imgElement);
    });
});
