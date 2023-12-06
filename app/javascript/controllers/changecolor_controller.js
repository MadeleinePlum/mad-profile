import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="changecolor"
export default class extends Controller {
  static targets = ["clickableElement", "clickableButton"]
  static colors = ["#FF6C22", "#1D5B79", "#1A5D1A", "#EA906C", "#5C8984"]
  static buttonColors = ["#E55807", "#1B9C85", "#245953", "#E14D2A", "#5F9DF7"]
  connect() {
    console.log("hello");
    this.change();
    this.changeButton();
  }

  change() {
    const button = this.clickableElementTarget;
    const random = Math.floor(Math.random() * this.constructor.colors.length);
    const randomColor = this.constructor.colors[random];
    button.style.backgroundColor = randomColor;
  }

  changeButton() {
    const click = this.clickableButtonTarget;
    const rndm = Math.floor(Math.random() * this.constructor.buttonColors.length);
    const randomButton = this.constructor.buttonColors[rndm];
    click.style.backgroundColor = randomButton
  }
}
