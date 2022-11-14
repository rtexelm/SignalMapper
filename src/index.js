import Example from "./scripts/example";
import DataRender from "./scripts/dataRender";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  new Example(main);


  const zipForm = document.getElementById("zipForm");
  const zipButton = document.getElementById("zipButton");
  new DataRender(zipButton, zipForm);


  // fetch('https://callook.info/KD2QOQ/json')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
});