import Highway from '@dogstudio/highway'
import ReviewsLoader from './preloaderReviews.js'
import FormInputs from './form/FormInputs'
import Review from'./reviews/Review.js'
import Star from './reviews/Star.js'
import Validation from './reviews/Validation.js'

class CustomRendererReviews extends Highway.Renderer {
  onEnterCompleted() {
    new FormInputs()
    ReviewsLoader()
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

  }
}
// Don`t forget to export your renderer
export default CustomRendererReviews
