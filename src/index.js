import Example from "./scripts/example";
import DataRender from "./scripts/dataRender";
// import Fetcher from "./scripts/fetcher";
// import map from "./scripts/map";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  new Example(title);


  const zipForm = document.getElementById("zipForm");
  window.dataRender = new DataRender(zipForm);

  // const zipButton = document.getElementById("zipButton");
  // const cselement = document.createElement("li")
  // cselement.innerHTML = "KB2CUE"
  // window.fetcher = new Fetcher(cselement);

});