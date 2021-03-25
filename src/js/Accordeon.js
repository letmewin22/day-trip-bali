export default class Accordeon {
  constructor({ elem, child, multi }) {
    this.elem = document.querySelectorAll(elem)
    this.child = child
    this.multi = multi ?? false
    this.elem.forEach((el) => {
      el.addEventListener('click', this.render.bind(this, el))
    })
  }

  render(elem) {
    if (elem.classList.contains('opened')) elem.classList.remove('opened')
    else {
      !this.multi && this.elem.forEach((el) => el.classList.remove('opened'))

      const h = elem.querySelector(this.child).scrollHeight * 0.01
      elem.style.setProperty('--h', `${h}px`)

      window.addEventListener('resize', () => {
        const h = elem.querySelector(this.child).scrollHeight * 0.01
        elem.style.setProperty('--h', `${h}px`)
      })

      elem.classList.add('opened')
    }
  }
}
