import Highway from '@dogstudio/highway'
import tab from './tabs.js'
import Gallery from './gallery.js'
import imagesLoaded from 'imagesloaded'
import TourLoader from './tourLoader.js'
// import Accordeon from './accordeon.js';

class CustomRendererTours extends Highway.Renderer {
  onEnterCompleted() {
    let img = document.querySelector('.tour-header')

    let loader = document.querySelector('.loader')

    tab()

    Gallery()

    // const days = document.querySelector('.white-block__item.first span')
    // if (days.innerHTML !== '2 day') {
    //   days.style.display = 'none'
    // }

    if (loader.classList.contains('loaded') === true) {
      let navI = document.querySelectorAll('.nav__item')
      if (screen.width > 850) { 
        for (let i = 0; i < navI.length; i++) {
          navI[i].classList.add('inverse')
        }
      }
      TourLoader()
    } else {
      window.onload = (e) => {
        imagesLoaded(img, { background: true }, function() {
          let loader = document.querySelector('.loader')
          loader.classList.add('loaded')

          loader.style.opacity = 0
          loader.style.pointerEvents = 'none'
          TourLoader()

        })
        let navI = document.querySelectorAll('.nav__item')
        if (screen.width > 850) { 
          for (let i = 0; i < navI.length; i++) {
            navI[i].classList.add('inverse')
          }
        }
      }
    }


    let burger = document.querySelector('.burger')

    burger.classList.add('tour')

  }

}
// Don`t forget to export your renderer
export default CustomRendererTours
