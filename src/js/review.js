import svgStar from './svgStar.js'
import Rate from './rate.js'

export default class Review {

  constructor() {

    this.comments = []
    this.formButton = document.querySelector('.form .button')
    this.review = document.getElementById('review')
    this.name = document.getElementById('name')
    this.starsWrapper = document.querySelector('.reviews-rate.assessment')
    this.items = document.querySelector('.reviews-items')
    this.loadComments()

    this.formButton.addEventListener('click', (e) => this.click(e))

  }

  click(event) {

    event.preventDefault()

    this.comment = {
      name: this.name.value,
      review: this.review.value,
      time: Math.floor(Date.now() / 1000),
      rate: this.starsWrapper.getAttribute('data-rate')
    }

    this.name.value = ''
    this.review.value = ''

    this.comments.push(this.comment)

    this.saveComments()
    this.loadComments()
    Rate()
  }

  saveComments() {
    localStorage.setItem('comments', JSON.stringify(this.comments))
  }

  loadComments() {
    if (localStorage.getItem('comments')) this.comments = JSON.parse(localStorage.getItem('comments'))
    this.items.innerHTML = ''
    this.showComments()
  }


  showComments() {
    let reviewsItem = ''
    this.comments.forEach((item) => {
      reviewsItem = `<div class="reviews-item">
            <div class="reviews-interface">
              <div class="reviews-name-and-rate">
                <span class="reviews-name">${item.name}</span>
                <div data-rate="${item.rate}" class="reviews-rate">
                ${svgStar}
                </div>
              </div>
              <span class="reviews-date">${timeConverter(item.time)}</span>
            </div>
            <div class="reviews-review">${item.review}</div>
          </div>`
      this.items.innerHTML += reviewsItem
    })
    
  }

}

const timeConverter = (UNIX_timestamp) => {
  const a = new Date(UNIX_timestamp * 1000),
    months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    year = a.getFullYear(),
    month = months[a.getMonth()],
    date = a.getDate(),
    hour = a.getHours(),
    min = a.getMinutes(),
    sec = a.getSeconds(),
    time = `${date}.${month}.${year}`
  return time
}
