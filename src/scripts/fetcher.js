/*
On user click of list item
Make a request to the API for one of the callsigns
*/

import map from "./map";

class Fetcher {
  constructor(callsign) {
    this.callsign = callsign;
    this.csString = this.callsign.innerHTML.toLowerCase();
    this.callsign.addEventListener("click", this.getLicenseData.bind(this));
    this.license;
  }

  getLicenseData(e) {
    // console.log(this.csString)
    // let license;
    fetch(`https://callook.info/${this.csString}/json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((data) => {
        this.setLicense(data);
        this.createDataSection(this.license);
        let loc = this.snatchCoordz(this.license);
        let marker = L.marker(loc).addTo(map);
        marker.bindPopup(this.csString).openPopup();
        map.flyTo(marker.getLatLng());
      })
      .catch((error) => console.error(error));
  }

  setLicense(obj) {
    console.log(obj.status);
    if (obj.status === "INVALID") {
      this.license = {
        status: "Invalid",
        Note: "Sometimes the public FCC data I have collected does not match that of other automated systems. This callsign is one such instance and does not have a current valid record. Try another callsign on the left",
      };
    } else this.license = obj;
  }

  // validate(obj) {}

  createDataSection(obj) {
    let list = document.getElementById("licenseData");
    list.className = "activated";
    list.innerHTML = "";
    // console.log(obj);

    for (let property in obj) {
      let dataItem = document.createElement("li");
      if (!obj[property]) continue;
      if (obj[property] instanceof Object) {
        console.log("Unpacking Object");
        // dataItem.innerHTML = `${titleize(property)}: `;
        this.objLister(obj[property], dataItem);
      } else {
        dataItem.innerHTML = `${titleize(property)}: ${obj[property]}`;
      }

      list.appendChild(dataItem);
    }
  }

  objLister(obj, node) {
    let subList = document.createElement("ul");

    for (let property in obj) {
      if (!obj[property]) continue;
      let subItem = document.createElement("li");
      subItem.innerHTML = `${titleize(property)}: ${obj[property]}`;
      subList.appendChild(subItem);
    }
    node.append(subList);
  }

  snatchCoordz(pojo) {
    let lat = pojo.location.latitude;
    let long = pojo.location.longitude;
    // console.log([lat, long]);
    return [lat, long];
  }

  setMarker(loc) {
    let marker = L.marker(loc).addTo(map);
    marker.bindPopup(this.csString).openPopup();
    map.flyTo(marker.getLatLng());
  }
}

function titleize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default Fetcher;
export { titleize };
