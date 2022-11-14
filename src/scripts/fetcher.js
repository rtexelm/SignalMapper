/*
Get a set of data from a key in NY_full_json
Make a request to the API for one of the callsigns
*/

// fetch('https://callook.info/KD2QOQ/json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

class Fetcher {
  constructor (callsign) {
    this.callsign = callsign
    this.callsign.addEventListener("click", this.getLicenseData.bind(this))
  }

  getLicenseData (callsign) {
    fetch(`https://callook.info/${callsign}/json`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw response;
        }
      })
      .then(check => console.log(check))
      .catch(error => console.error(error))
  }

}

export default Fetcher