import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="darkmode"
export default class extends Controller {
  static targets = ["button"]

  connect() {
    console.log("dark mode")
    // this.toggleDarkMode();
  }

  toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    ["navbar", "navlogo", "hello", "name", "subtitle", "withme"].forEach(className => {
      document.querySelectorAll(`.${className}`).forEach(element => {
        element.classList.toggle("dark-mode");
      });
    });

    ["navlink", "card", "h3", "social", "projectlink"].forEach(className => {
      document.querySelectorAll(`.${className}`).forEach(element => {
        element.classList.toggle("dark-mode");
      });
    });
  }
}
