
class Example {
  constructor(ele) {
    this.ele = ele;
    // this.ele.innerHTML = "<h1>Signal Mapper</h1>"

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    const origin = this.ele.innerText;
    this.ele.innerText = "Enter a zipcode, please";
    setTimeout(() => {
      this.ele.innerText = origin
    }, "1000")
  }
}

export default Example;