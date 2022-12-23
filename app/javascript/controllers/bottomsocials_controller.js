import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bottomsocials"
export default class extends Controller {
  static targets = ["bottomsocials"]

  connect() {
  }

  update() {
    if (window.scrollY >= window.innerHeight / 3) {
      this.element.classList.add("socials-b-show")
    } else {
      this.element.classList.remove("socials-b-show")
    }
  }
}
