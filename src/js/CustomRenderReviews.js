import Highway from '@dogstudio/highway'
import FormInputs from './form/FormInputs'
import Review from './reviews/Review.js'
import Star from './reviews/Star.js'
import Validation from './reviews/Validation.js'


class CustomRendererReviews extends Highway.Renderer {
  onEnterCompleted() {
    new FormInputs()
    new Star()
    new Review()
    const valid = new Validation()
    valid.validator()


    const links = document.querySelectorAll('.nav__item a')
    let navI = document.querySelectorAll('.nav__item')
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.remove('inverse')
    }

    for (let i = 0; i < links.length; i++) {
      const link = links[i]

      link.classList.remove('is-current')

      if (link.href === location.href) {
        link.classList.add('is-current')
      }
    }

    function getPageMaxScroll() {
      // Cross browser page height detection is ugly
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight // Subtract viewport height
    }

    let btn = document.querySelector('#href-btn')

    function scrollTo(event) {
      // event.preventDefault()
      const link = btn.getAttribute('href')
      let targetLink = link.slice(1)

      let target = document.getElementById(targetLink)

      let targetPos = +target.getBoundingClientRect().y

      const maxScroll = getPageMaxScroll()

      if (targetPos > maxScroll) {
        targetPos = maxScroll
      }

      window.scrollTo(0, targetPos)
      // window.location.hash = ''
      // window.location.href = (window.location.href).slice(0, -1)
    }
    btn.addEventListener('click', scrollTo)


  }
}
// Don`t forget to export your renderer
export default CustomRendererReviews
