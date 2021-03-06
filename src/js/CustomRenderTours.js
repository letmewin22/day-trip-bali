import Highway from '@dogstudio/highway'
import imagesLoaded from 'imagesloaded'
import TourLoader from './tourLoader.js'
import Swiper from 'swiper'
import ripplyScott from './btn.js'
import popUp from './popup.js'
import YTplayer from './YTplayer.js'
import Details from './Details.js'


class CustomRendererTours extends Highway.Renderer {
  onEnterCompleted() {

    // const showBtn = new ShowBtn(document.querySelector('.details-section__more-btn'))

    // showBtn.init()

    YTplayer.startVideo()
    popUp({
      btn: document.querySelector('.tour-header__video-btn'),
      window: document.querySelector('.video-pop-up'),
      untouchable: document.querySelector('.video-pop-up__video'),
      cb: {
        open: () => YTplayer.startVideo(),
        close: () => YTplayer.stopVideo()
      }
    })

    popUp({
      btn: document.querySelector('.details-section__more-btn'),
      window: document.querySelector('.details-pop-up'),
      untouchable: document.querySelector('.details-pop-up .details-section__container'),
      cb: {
        open: () => Details.open(),
        close: () => Details.close()
      }
    })

    const items = document.querySelectorAll('.details-pop-up .details-section__item')
    items[items.length - 1].classList.add('last')
   

    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 28,
      speed: 600,
      grabCursor: true,
      loop: true,
      loopedSlides: 3,
      freeMode: true,
      navigation: {
        nextEl: '.gallery-section__nav-item--right',
        prevEl: '.gallery-section__nav-item--left'
      },
      breakpoints: {
        550: {
          spaceBetween: 66
        }
      }
    })

    if (document.querySelector('.gallery-section__view-more span'))
      document.querySelector('.gallery-section__view-more span').innerHTML = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length.toString()

    ripplyScott().init('white-block__btn', 0.75)

    const it = document.querySelector('.white-block')
    const height = window.innerHeight - it.getBoundingClientRect().height

    const cb = () => {
 
      const st = document.body.scrollTop || document.documentElement.scrollTop
      if (document.body.getBoundingClientRect().width > 1140)
        if (it.getBoundingClientRect().y <= 0 && st >= height)
          it.classList.add('fixed')
        else
          it.classList.remove('fixed')
      else
        it.classList.add('fixed')
      this.raf = requestAnimationFrame(cb)
    }

    cb()

    let img = document.querySelector('.tour-header__img')
    let loader = document.querySelector('.loader')

    if (loader.classList.contains('loaded') === true) {
      let navI = document.querySelectorAll('.nav__item')
      if (screen.width > 1190) {
        for (let i = 0; i < navI.length; i++) {
          navI[i].classList.add('inverse')
        }
      }
      TourLoader()
    } else {
      window.onload = () => {
        imagesLoaded(img, { background: true }, function() {
          let loader = document.querySelector('.loader')
          loader.classList.add('loaded')

          loader.style.opacity = 0
          loader.style.pointerEvents = 'none'
          TourLoader()

        })
        let navI = document.querySelectorAll('.nav__item')
        if (screen.width > 1190) {
          for (let i = 0; i < navI.length; i++) {
            navI[i].classList.add('inverse')
          }
        }
      }
    }

    document.querySelector('.burger').classList.add('tour')

  }

  onLeave() {
    cancelAnimationFrame(this.raf)
  }

}
// Don`t forget to export your renderer
export default CustomRendererTours
