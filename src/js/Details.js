import {TimelineMax, Power3, Power4} from 'gsap'

export default class Details {
  constructor() {
    Details.getItems()
  }

  static getItems() {
    this.overlay = document.querySelector('.details-pop-up')
    this.items = this.overlay.querySelectorAll('.details-section__item')
    this.img = this.overlay.querySelector('.details-section__right')
    this.h = this.overlay.querySelector('h2')
  }

  static open() {
    this.getItems()
    this.overlay.style.visibility = 'visible'
    const tl = new TimelineMax()
    tl
      .fromTo(this.overlay, 1, {y: '-110%'}, {y: '0%', ease: Power4.easeOut})
      .fromTo(this.h, 1, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease: Power3.easeOut}, 0.6)
      .staggerFromTo(this.items, 1, {opacity: 0, y: 30, ease: Power3.easeOut}, {opacity: 1, y: 0, ease: Power3.easeOut}, 0.1, 0.8)
      .fromTo(this.img, 1, {opacity: 0}, {opacity: 1}, 1.2)
  }

  static close() {
    this.getItems()

    const tl = new TimelineMax({onComplete: () => this.overlay.style.visibility = 'hidden'})
    tl
      .fromTo(this.img, 1, {opacity: 1}, {opacity: 0})
      .fromTo(this.h, 1, {y: 0, opacity: 1}, {y: -30, opacity: 0, ease: Power3.easeOut}, 0.2)
      .staggerFromTo(this.items, 1, {opacity: 1, y: 0, ease: Power3.easeOut}, {opacity: 0, y: -30, ease: Power3.easeOut}, 0.1, 0.4)
      .fromTo(this.overlay, 1, {y: '0%'}, {y: '-110%', ease: Power4.easeOut}, 1.2)
  }
}
