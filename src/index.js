import Example from "./scripts/example";
import DataRender from "./scripts/dataRender";
import Fetcher from "./scripts/fetcher";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  new Example(main);


  const zipForm = document.getElementById("zipForm");
  const zipButton = document.getElementById("zipButton");
  window.dataRender = new DataRender(zipButton, zipForm);
  // const cselement = document.createElement("li")
  // cselement.innerHTML = "KB2CUE"
  // window.fetcher = new Fetcher(cselement);


});