import Review from './Review'
import pseudoPrototype from '../lib/pseudo.prototype.js'

export default class Validation extends Review {

  validator() {

    pseudoPrototype()

    this.review.oninput = () => this.reviewInput()
    this.name.oninput = () => this.nameInput()
    
    this.formButton.onmouseup = (event) => {
    	event.preventDefault()
    	this.rateInput()
    	this.reviewInput()
    	this.nameInput()
    } 

  }

  reviewInput() {
    if (this.review.value.length < this.koefReview) {

      this.thislabel1 = document.querySelectorAll('.label')[1]
      this.validateTextReview.style.opacity = '1'
      this.validateTextReview.innerHTML = `review must be at least ${this.koefReview} characters. Left: ${this.koefReview - this.review.value.length}`
      this.review.focus()
      this.thislabel1.pseudoStyle('after', 'border-color', '#F44336!important')
    } else {
      this.validateTextReview.style.opacity = '0'
      this.thislabel1.pseudoStyle().classList = 'label'
    }
  }

  nameInput() {
    if (this.name.value.length < this.koefName) {
      this.thislabel0 = document.querySelectorAll('.label')[0]
      this.validateTextName.style.opacity = '1'
      this.validateTextName.innerHTML = `name must be at least ${this.koefName} characters. Left: ${this.koefName - this.name.value.length}`
      this.name.focus()
      this.thislabel0.pseudoStyle('after', 'border-color', '#F44336!important')
    } else {
      this.validateTextName.style.opacity = '0'
      this.thislabel0.pseudoStyle().classList = 'label'
    }
  }

  rateInput() {

    if (+this.starsWrapper.getAttribute('data-rate') < 1) {
      this.validateTextRate.style.opacity = '1'
    } else {
      this.validateTextRate.style.opacity = '0'
    }
  }

}
