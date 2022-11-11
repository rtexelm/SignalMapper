import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  new Example(main);

  fetch('https://callook.info/KD2QOQ/json')
    .then((response) => response.json())
    .then((data) => console.log(data));
});