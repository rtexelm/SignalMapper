// Handle the list creation by fetching info from the JSON file of zips

import Data from "../assets/NY_callsigns.json"

class DataRender {
  constructor (button, form) {
    this.button = button;
    this.form = form;
    this.form.addEventListener("submit", this.handleClick.bind(this));
    // this.form.addEventListener("formdata", this.handleForm.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    console.log("clicccccked");
    const formData = new FormData(this.form);
    const zipcodeField = document.getElementById("zipcode");
    const zipcode = zipcodeField.value;
    zipcodeField.value = "";
    console.log(zipcode)

    const callsigns = this.getSigns(Data, zipcode)
    console.log(callsigns)
    this.populateList(callsigns)
    // for (let [k, v] of formData.entries()) {
    //   console.log([k, v]);
    // }
  }

  getSigns(data, key) {
    let signs = []
    let licenses = data[key]
    licenses.forEach( license => {
      signs.push(license.cs);
    })
    return signs
  }

  populateList(arr) {
    let list = document.getElementById("csList")
    arr.forEach( sign => {
      let csItem = document.createElement("li");
      csItem.innerHTML = sign;
      list.appendChild(csItem);
    })
  }



  // handleForm(e) {
  //   console.log("formdata begins");
  //   const data = e.formData;
  //   console.log(data);
  // }

}

export default DataRender;