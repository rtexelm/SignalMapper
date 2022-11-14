
class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1>Signal Mapper</h1>"

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.ele.children[0].innerText = "Enter a zipcode, please";
  }
}

export default Example;