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
    let koef = 12
    if (this.review.value.length < koef) {

      this.thislabel1 = document.querySelectorAll('.label')[1]
      this.validateTextReview.style.opacity = '1'
      this.validateTextReview.innerHTML = `review must be at least 12 characters. Left: ${koef - this.review.value.length}`
      this.review.focus()
      this.thislabel1.pseudoStyle('after', 'border-color', '#F44336!important')
    } else {
      this.validateTextReview.style.opacity = '0'
      this.thislabel1.pseudoStyle().classList = 'label'
    }
  }

  nameInput() {
    let koef = 3
    if (this.name.value.length < koef) {
      this.thislabel0 = document.querySelectorAll('.label')[0]
      this.validateTextName.style.opacity = '1'
      this.validateTextName.innerHTML = `name must be at least 3 characters. Left: ${koef - this.name.value.length}`
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
