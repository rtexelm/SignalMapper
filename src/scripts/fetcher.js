/*
On user click of list item
Make a request to the API for one of the callsigns
*/
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
        dataItem.innerHTML = `${property}: `
        this.objLister(obj[property], dataItem)
      } else {
        dataItem.innerHTML = `${property}: ${obj[property]}`;
        }
      list.appendChild(dataItem);
    }
  }

  objLister (obj, node) {
    let subList = document.createElement("ul");
    // subList.innerHTML = "";
    for (const property in obj) {
      let subItem = document.createElement("li");
      subItem.innerHTML = `${property}: ${obj[property]}`;
      subList.appendChild(subItem);
    }
    node.append(subList);
  }


}

export default Fetcher