import Highway from '@dogstudio/highway'
import reviewsLoader from './preloaderReviews'
import Sticky from './Sticky'

class CustomRendererReviews extends Highway.Renderer {
  onEnterCompleted() {
    reviewsLoader()

    document.querySelectorAll('.a-sticky').forEach((el) => {
      const sticky = new Sticky(el, { breakpoint: 960, offset: 100 })
      sticky.init()
    })

    const $rewiewsWrapper = document.querySelector('.review-embed')

    if ($rewiewsWrapper) {
      $rewiewsWrapper.innerHTML =
        '<rw-widget-masonry data-rw-masonry="21147"></rw-widget-masonry>'
    }

    const links = document.querySelectorAll('.nav__item a')
    let navI = document.querySelectorAll('.nav__item')
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.remove('inverse')
    }

    for (let i = 0; i < links.length; i++) {
      const link = links[i]

      link.classList.remove('is-current')

      if (link.href === location.href) {
        link.classList.add('is-current')
      }
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererReviews
