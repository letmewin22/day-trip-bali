import Rate from './rate'
import { HTML } from './HTML'
import ReviewsLoader from '../preloaderReviews'

let isLoad = false
const url = 'https://daytripbali-reviews.firebaseio.com/reviews.json'

export class Database {

  static create(review) {

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        review.id = response.name
        return review
      })
      .then(Database.renderList)
  }


  static renderList() {
    const reviewsArr = []

    Database.fetchReviews(reviewsArr)
      .then(() => {
        const reviews = reviewsArr
        const reviewsItem = reviews.length ?
          reviews.map(HTML.addToHTML).join('') :
          '<span>No reviews yet</span>'

        const wrapper = document.querySelector('.reviews-items')
        wrapper.innerHTML = reviewsItem
        Rate()

        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        if (!isLoad) {
          ReviewsLoader()
          isLoad = true
        }

      })
  }

  static fetchReviews(arr) {

    return fetch(url)
      .then(response => response.json())
      .then(response => {
        return response ?
          Object.keys(response).map(key => {
            arr.push(response[key])
          }) : []
      })
  }
}
