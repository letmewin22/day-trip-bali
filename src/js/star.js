import Rate from './rate.js'

let starsWrapper = document.querySelector('.reviews-rate.assessment')
let stars = starsWrapper.querySelectorAll('svg')
let rate = starsWrapper.getAttribute('data-rate')

const starFun = function() {
  starsWrapper.dataset.rate = this.getAttribute('position')
  Rate()
}

const starleave = () => {
  if (starsWrapper.classList.contains('stars-clicked')) {
    return false
  } else {
    for (let star of stars) star.classList.remove('active')
    starsWrapper.dataset.rate = 0
    Rate()
  }

}
const starActivate = () => {
  starsWrapper.classList.toggle('stars-clicked')
  for (let star of stars) star.classList.toggle('disabled')
}

starsWrapper.addEventListener('click', starActivate)

for (let i = 0; i < stars.length; i++) {
  stars[i].setAttribute('position', i + 1)
  stars[i].addEventListener('mouseenter', starFun)
  stars[i].addEventListener('mouseleave', starleave)
}
