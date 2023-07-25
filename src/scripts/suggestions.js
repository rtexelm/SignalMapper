// Select 4 zip codes from the list at random
class Suggester {
  constructor(data) {
    this.data = data;
    this.keys = Object.keys(data);
    this.zips = [];
  }

  getFourZips(data) {
    const zips = [];
    const keys = Object.keys(data);
    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * keys.length);
      zips.push(keys[random]);
    }
    return zips;
  }
}

export default Suggester;
