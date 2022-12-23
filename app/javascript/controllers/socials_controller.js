import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="socials"
export default class extends Controller {
  static targets = ["social"]
  connect() {
  }

  update() {
    if (window.scrollY >= window.innerHeight / 3) {
      this.element.classList.add("socials-back")
    } else {
      this.element.classList.remove("socials-back")
    }
  }
}
