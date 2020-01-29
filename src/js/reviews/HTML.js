import svgStar from './svgStar'

export class HTML {
  static addToHTML(review) {
    return `<div class="reviews-item">
            <div class="reviews-interface">
              <div class="reviews-name-and-rate">
                <span class="reviews-name">${review.name}</span>
                <div data-rate="${review.rate}" class="reviews-rate">
                ${svgStar.join('')}
                </div>
              </div>
              <span class="reviews-date">${review.time}</span>
            </div>
            <div class="reviews-review">${review.review}</div>
          </div>`
  }
}
