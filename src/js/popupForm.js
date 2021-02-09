import { TimelineMax } from 'gsap'

export class PopUpForm {
  constructor() {
    this.popUp = document.querySelector('.form-pop-up')
    this.popUpContent = document.querySelector('.form-pop-up__content')
    this.popUpOpen = document.querySelector('#cta')
    this.popUpClose = document.querySelectorAll('[data-pp-close]')

    this.init()
  }

  init() {
    this.bounds()

    this.popUpOpen && this.popUpOpen.addEventListener('click', this.open)
    this.popUpClose.length &&
      this.popUpClose.forEach((el) => el.addEventListener('click', this.close))
  }

  bounds() {
    const methods = ['open', 'close']
    methods.forEach((fn) => (this[fn] = this[fn].bind(this)))
  }

  open() {
    const tl = new TimelineMax()

    this.popUp.style.display = 'flex'

    const padding =
      window.innerWidth - document.body.getBoundingClientRect().width
    document.body.classList.add('fixed')

    document.body.style.setProperty('--padding', `${padding}px`)

    tl.to(this.popUp, 0.5, { opacity: 1 })
    tl.to(this.popUpContent, 0.5, { opacity: 1, y: 0 }, 0.2)
  }

  close() {
    const tl = new TimelineMax({
      onComplete: () => {
        this.popUp.style.display = 'none'
        document.body.classList.remove('fixed')
        document.body.style.removeProperty('--padding')
      },
    })

    tl.to(this.popUpContent, 0.5, { opacity: 0, y: 60 })
    tl.to(this.popUp, 0.5, { opacity: 0 }, 0.2)
  }
}
