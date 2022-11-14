// Handle the list creation by fetching info from the JSON file of zips
class DataRender {
  constructor (button, form) {
    this.button = button;
    this.form = form;
    this.form.addEventListener("submit", this.handleClick.bind(this));
    this.form.addEventListener("formdata", this.handleForm.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    console.log("clicccccked");
    const formData = new FormData(this.form)
    // for (let [k, v] of formData.entries()) {
    //   console.log([k, v]);
    // }

  }

  handleForm(e) {
    console.log("formdata begins");
    const data = e.formData;
    console.log(data)
  }

}

export default DataRender;