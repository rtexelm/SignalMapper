import Data from "../assets/NY_callsigns.json";

// Select zip codes from the list at random
// Display as clickable buttons

class Suggester {
  constructor(buttons) {
    this.buttons = buttons;
    this.keys = Object.keys(Data);
    this.zips = this.getZips();
    console.log(this.zips);
  }

  getZips() {
    const zips = [];
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * this.keys.length);
      zips.push(this.keys[random]);
    }
    return zips;
  }

  handleClick(e, zip) {
    e.preventDefault();

    const input = document.getElementById("zipcode");
    const submit = document.getElementById("zipButton");
    input.value = zip;
    submit.click();
    input.value = "";
  }

  buttonGenerator(zipcodes) {
    zipcodes.forEach((zip) => {
      let zipButton = document.createElement("li");
      zipButton.innerHTML = zip;
      zipButton.addEventListener("click", this.handleClick(zip).bind(this));
      this.buttons.append(zipButton);
    });
  }
}

export default Suggester;
