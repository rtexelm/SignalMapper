import Example from "./scripts/example";
import DataRender from "./scripts/dataRender";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  new Example(main);


  const zipForm = document.getElementById("zipForm");
  const zipButton = document.getElementById("zipButton");
  new DataRender(zipButton, zipForm);

});