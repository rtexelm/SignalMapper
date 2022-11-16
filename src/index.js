import Example from "./scripts/example";
import DataRender from "./scripts/dataRender";
import Modal from "./scripts/aboutModal";
// import Fetcher from "./scripts/fetcher";
// import map from "./scripts/map";

document.addEventListener("DOMContentLoaded", () => {

  const title = document.getElementById("title");
  new Example(title);

  const zipForm = document.getElementById("zipForm");
  window.dataRender = new DataRender(zipForm);

  // About modal

  // const aboutModal = document.getElementById("about")
  const aboutLink = document.getElementById("modalTrigger");
  // const close = document.getElementById("close")
  // const hideMap = document.getElementById("map")
  // aboutLink.addEventListener("click", () =>{
  //   aboutModal.style.display = "block";
  //   hideMap.style.display = "none";
  // })
  // close.addEventListener("click", () =>{
  //   aboutModal.style.display = "none";
  //   hideMap.style.display = "block";
  // })
  // window.onclick = e => {
  //   if (e.target == aboutModal) {
  //     aboutModal.style.display = "none";
  //     hideMap.style.display = "block";
  //   }
  // }
  window.aboutModal = new Modal(aboutLink);

  // const zipButton = document.getElementById("zipButton");
  // const cselement = document.createElement("li")
  // cselement.innerHTML = "KB2CUE"
  // window.fetcher = new Fetcher(cselement);

});