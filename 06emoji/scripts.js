const btn = document.querySelector("#emoji");
const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "👀",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

// Basic Method

// let counter = 30;

// btn.addEventListener("mouseover", (e) => {
//   if (counter === 34) {
//     counter = 0;
//   }
//   e.target.innerText = emojis[counter];
//   counter++;
//   console.log(counter);
// });

// Standard Method

btn.addEventListener("mouseover", (e) => {
  const randomNum = Math.floor(Math.random() * emojis.length);
  e.target.innerText = emojis[randomNum];
  console.log("random number: ", randomNum);
});
