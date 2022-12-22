import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="socials"
export default class extends Controller {
  static targets = ["social"]
  connect() {
  }

  update() {
    console.log("update runs")
    if (window.scrollY >= window.innerHeight - (window.innerHeight * 0.1)) {
      this.element.classList.add("socials-back")
    } else {
      this.element.classList.remove("socials-back")
    }
  }
}
