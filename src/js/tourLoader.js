import { TimelineMax, Power2, Expo } from 'gsap'
import imagesLoaded from 'imagesloaded'
const charming = require('charming')
import Splitting from 'splitting'

const TourLoader = () => {
  const h1 = document.querySelector('h1')
  Splitting({ target: h1, by: 'words' })

  let h1Splitter = [...document.querySelectorAll('h1 span')]
  // const p = document.querySelector('.tour-header__tour-content p');
  const whiteBlock = document.querySelector('.white-block')
  const img = document.querySelector('.tour-header__img')
  for (let i = 0; i < h1Splitter.length; i++) {
    charming(h1Splitter[i])
  }

  const loader = () => {
    for (let i = 0; i < h1Splitter.length; i++) {
      h1.style.opacity = '1'
      let splitterSpan = h1Splitter[i].querySelectorAll('span')
      let tl = new TimelineMax
      tl
        .staggerTo(splitterSpan, 1.5, { opacity: 1, x: 0, ease: Expo.easeOut }, 0.07, 0)
    }
    let tl2 = new TimelineMax()
    tl2
      .to(img, 0.5, { opacity: 1, ease: Power2.easeInOut }, 0)
      .to(whiteBlock, 1, { bottom: 0, ease: Power2.easeInOut }, 0.4)
  }
  imagesLoaded(img, { background: true }, function() {
    loader()
  })


}

export default TourLoader
