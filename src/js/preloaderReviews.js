import { TimelineMax } from 'gsap'
const charming = require('charming')
// import 'splitting/dist/splitting.css';
// import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting'

const ReviewsLoader = () => {

  const loading = () => {
    const target = document.querySelector('h2')
    const results = Splitting({ target: target, by: 'words' })

    let h1Splitter = [...document.querySelectorAll('h2 span')]
    let h1Desc = document.querySelector('.review-header-desc')
    let reviewsContent = document.querySelector('.reviews-content-wrapper')

    for (let i = 0; i < h1Splitter.length; i++) {
      charming(h1Splitter[i])
    }


    setTimeout(() => {
      for (let i = 0; i < h1Splitter.length; i++) {
        target.style.opacity = '1'
        let splitterSpan = h1Splitter[i].querySelectorAll('span')
        let tl = new TimelineMax
        tl
          .staggerTo(splitterSpan, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.07)
      }
      let tl2 = new TimelineMax()
      tl2
        .to(h1Desc, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0)
        .to(reviewsContent, 1.2, { opacity: 1, ease: Power2.easeOut }, 0.2)
    }, 500)

  }
  loading()

}

export default ReviewsLoader
