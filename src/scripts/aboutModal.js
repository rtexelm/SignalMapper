// Control about page
class Modal {
  constructor (trigger) {
    this.trigger = trigger;
    this.trigger.addEventListener("click", this.controlModal.bind(this));
  }

  controlModal (e) {
    e.preventDefault();
    const aboutModal = document.getElementById("about")
    const close = document.getElementById("close")
    // const hideMap = document.getElementById("map")

    aboutModal.style.display = "block";
    // hideMap.style.display = "none";

    close.addEventListener("click", () => {
      aboutModal.style.display = "none";
      // hideMap.style.display = "block";
    })

    window.onclick = e => {
      if (e.target == aboutModal) {
        aboutModal.style.display = "none";
        // hideMap.style.display = "block";
      }
    }
  }

}

export default Modal