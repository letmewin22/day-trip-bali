import Rate from './rate.js'

export default class Star {
	
  constructor() {
    
    this.validateTextRate = document.querySelector('.form-validate-text.rate')
    this.starsWrapper = document.querySelector('.reviews-rate.assessment')
    this.stars = this.starsWrapper.querySelectorAll('svg')
    this.rate = this.starsWrapper.getAttribute('data-rate')

    this.starsWrapper.addEventListener('click', () => this.starActivate())


    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].setAttribute('position', i + 1)
      this.stars[i].addEventListener('mouseenter', () => this.starOver(this.stars[i]))
      this.stars[i].addEventListener('mouseleave', () => this.starleave())
    }
  }

  starOver(theStar) {

    this.starsWrapper.dataset.rate = theStar.getAttribute('position')
    Rate()
  }

  starleave() {

    if (this.starsWrapper.classList.contains('stars-clicked')) {
      return false
    } else {
      for (let star of this.stars) star.classList.remove('active')
      this.starsWrapper.dataset.rate = 0
      Rate()
    }
  }

  starActivate() {
    this.validateTextRate.style.opacity = 0
    this.starsWrapper.classList.toggle('stars-clicked')
    for (let star of this.stars) star.classList.toggle('disabled')
  }
}
