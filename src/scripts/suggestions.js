import Data from "../assets/NY_callsigns.json";

// Select zip codes from the list at random
// Display as clickable buttons

class Suggester {
  constructor(data) {
    this.keys = Object.keys(Data);
    this.zips = [];
  }

  getZips(data) {
    const zips = [];
    const keys = Object.keys(data);
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * keys.length);
      this.zips.push(keys[random]);
    }
    return zips;
  }

  buttonGenerator(zipcodes) {}
}

export default Suggester;
