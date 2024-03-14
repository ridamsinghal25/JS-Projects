const url = "https://api.chucknorris.io/jokes/random";
const button = document.querySelector(".btn");
const container = document.querySelector("#display-joke");
let blocked = false;

function fetchJokes() {
  if (!blocked) {
    blocked = true;
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        container.innerText = response.value;
        console.log("fetch called first");
      })
      .catch((err) => {
        console.error("Error: ", err.message);
      })
      .finally(() => {
        blocked = false;
      });
  }
}

function xmlJokes() {
  if (!blocked) {
    blocked = true;
    const xhr = new XMLHttpRequest();

    xhr.open("get", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.response);
          container.innerHTML = response.value;
          console.log("XMLhttpRequest called first");
        } else {
          console.error("Error fetching jokes");
        }
        blocked = false;
      }
    };

    xhr.send();
  }
}

button.addEventListener("click", () => {
  xmlJokes();
  fetchJokes();
});
