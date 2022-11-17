import Example from "./scripts/example";
import DataRender from "./scripts/dataRender";
import Modal from "./scripts/aboutModal";
// import Fetcher from "./scripts/fetcher";
// import map from "./scripts/map";

document.addEventListener("DOMContentLoaded", () => {

  // Show title
  const title = document.getElementById("title");
  new Example(title);

  // Display page
  const zipForm = document.getElementById("zipForm");
  window.dataRender = new DataRender(zipForm);

  // About modal
  const aboutLink = document.getElementById("modalTrigger");
  window.aboutModal = new Modal(aboutLink);

  // const zipButton = document.getElementById("zipButton");
  // const cselement = document.createElement("li")
  // cselement.innerHTML = "KB2CUE"
  // window.fetcher = new Fetcher(cselement);

});