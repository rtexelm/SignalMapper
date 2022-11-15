/*
On user click of list item
Make a request to the API for one of the callsigns
*/

import map from "./map"

class Fetcher {
  constructor (callsign) {
    // debugger;
    this.callsign = callsign;
    this.csString = this.callsign.innerHTML.toLowerCase();
    this.callsign.addEventListener("click", this.getLicenseData.bind(this));
    this.license;
  }

  getLicenseData (e) {
    console.log(this.csString)
    // let license;
    fetch(`https://callook.info/${this.csString}/json`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(data => {
        console.log(data);
        // debugger;
        this.setLicense(data);
        this.createDataSection(this.license);
        this.snatchCoordz(this.license)
        L.marker([40.742, -74.006]).addTo(map);
      })
      .catch(error => console.error(error));
      
  }

  setLicense (obj) {
    this.license = obj
    // console.log(this.license.location)
  }

  createDataSection (obj) {
    let list = document.getElementById("licenseData")
    list.innerHTML = "";
    let dataItem = document.createElement("li");

    for (const property in obj) {

      let dataItem = document.createElement("li");

      if (obj[property] instanceof Object) {
        console.log("Unpacking Object")
        dataItem.innerHTML = `${titleize(property)}: `
        this.objLister(obj[property], dataItem)
      } else {
        dataItem.innerHTML = `${titleize(property)}: ${obj[property]}`;
        }
      list.appendChild(dataItem);
    }
  }

  objLister (obj, node) {
    let subList = document.createElement("ul");

    for (const property in obj) {
      let subItem = document.createElement("li");
      subItem.innerHTML = `${titleize(property)}: ${obj[property]}`;
      subList.appendChild(subItem);
    }
    node.append(subList);
  }

  snatchCoordz (pojo) {
    let lat = pojo.location.latitude
    let long = pojo.location.longitude
    console.log([lat,long])
  }

}

function titleize(str) {
  return str.toLowerCase().split(' ').map((word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

export default Fetcher