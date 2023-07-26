import Data from "../assets/NY_callsigns.json";

// Select zip codes from the list at random
// Display as clickable buttons

class Suggester {
  constructor(buttons) {
    this.buttons = buttons;
    this.keys = Object.keys(Data);
    this.zips = this.getZips();
  }

  getZips() {
    const zips = [];
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * this.keys.length);
      zips.push(this.keys[random]);
    }
    return zips;
  }

  handleClick(e) {
    e.preventDefault();
  }

  buttonGenerator(zipcodes) {}
}

export default Suggester;
