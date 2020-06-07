export default class ShowBtn {

  constructor() {

    this.items = document.querySelectorAll('.details-section__item')
    this.btn = document.querySelector('.details-section__more-btn')
    this.toggle = false

    this.mql = window.matchMedia('(max-width: 970px)')

    this.btnFunc = () => {
      this.btnHandler()
    }
  }

  init() {
    this.mql.addListener(this.mqHandler.bind(this))
    this.mqHandler()
  }

  hide() {

    this.items.forEach(el => el.classList.remove('show'))
    this.btn.innerHTML = 'show more'

    for (let i = 0; i < 7; i++) {
      this.items[i].classList.add('show')
    }

    this.toggle = false
  }

  show() {

    this.items.forEach(el => el.classList.add('show'))
    this.btn.innerHTML = 'hide'
    this.toggle = true
  }

  btnHandler() {
    !this.toggle ? this.show() : this.hide()
  }

  mqHandler() {

    if (this.mql.matches) {
      this.hide()
      this.btn.addEventListener('click', this.btnFunc)
    } else {
      this.show()
      this.btn.removeEventListener('click', this.btnFunc)
    }
  }
}

