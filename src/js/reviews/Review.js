import svgStar from './svgStar'
import Rate from './rate'
import {BD} from './BD'
import timeConverter from './timeConverter'
export default class Review {

  constructor() {

    this.validateTextRate = document.querySelector('.form-validate-text.rate')
    this.validateTextReview = document.querySelector('.form-validate-text.review')
    this.validateTextName = document.querySelector('.form-validate-text.name')
    this.comments = []
    this.formButton = document.querySelector('.form .button')
    this.review = document.getElementById('review')
    this.name = document.getElementById('name')
    this.starsWrapper = document.querySelector('.reviews-rate.assessment')
    this.items = document.querySelector('.reviews-items')
    this.stars = this.starsWrapper.querySelectorAll('svg')
    this.formButton.addEventListener('click', (e) => this.click(e))
    window.addEventListener('load', BD.renderList)

  }

  click(event) {

    event.preventDefault()
    
    if (this.review.value.length > 12 &&
      this.name.value.length > 2 &&
      this.starsWrapper.getAttribute('data-rate') > 0) {

      this.comment = {
        name: this.name.value,
        review: this.review.value,
        time: timeConverter(Math.floor(Date.now() / 1000)),
        rate: this.starsWrapper.getAttribute('data-rate')
      }

      this.name.value = ''
      this.review.value = ''
      
      BD.create(this.comment)
      Rate()
      
      this.reset()
    }
  }

  reset() {
    
    this.name.blur()
    this.review.blur()
    
    this.name.classList.remove('focus')
    this.review.classList.remove('focus')

    this.starsWrapper.dataset.rate = 0
    this.validateTextRate.style.opacity = 0
    for (let star of this.stars) {
      star.classList.remove('active')
      star.classList.remove('disabled')
    }

    this.starsWrapper.classList.remove('stars-clicked')

  }

}
