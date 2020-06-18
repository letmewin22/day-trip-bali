export default class ShowBtn {

  constructor(btn) {

    this.btn = btn
    this.items = this.btn.parentNode.querySelectorAll('.details-section__item')
    this.wrapper = this.btn.parentNode

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
    console.log(this.items.length)
    
    if (this.items.length >= 6) {

      this.items.forEach(el => el.classList.remove('show'))
      this.btn.innerHTML = 'show more'

      for (let i = 0; i < 7; i++) {
        this.items[i].classList.add('show')
      }
      this.wrapper.style.height = this.height + 'px'

      this.toggle = false
    } else {
      this.btn.style.display = 'none'
    }

  }

  show() {

    this.items.forEach(el => el.classList.add('show'))
    this.btn.innerHTML = 'hide'
    this.wrapper.style.height = this.wrapper.scrollHeight + 'px'
    this.toggle = true
  }

  btnHandler() {
    !this.toggle ? this.show() : this.hide()
  }

  mqHandler() {

    if (this.mql.matches) {
      this.hide()
      this.height = this.wrapper.scrollHeight
      this.hide()
      this.btn.addEventListener('click', this.btnFunc)
    } else {
      this.show()
      this.wrapper.style.height = 'auto'
      this.btn.removeEventListener('click', this.btnFunc)
    }
  }
}

