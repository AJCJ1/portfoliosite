import { Controller } from "@hotwired/stimulus"

let scroll_position = 0;
let scroll_direction;
// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
  }

  update() {
    if (window.scrollY >= window.innerHeight - (window.innerHeight * 0.1)) {
      this.element.classList.add("contraster")
    } else {
      this.element.classList.remove("contraster")
    }

    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;

    if (scroll_direction == 'down') {
      this.element.classList.add("hider")
    } else {
      this.element.classList.remove("hider")
    };

  }
}
