import Highway from '@dogstudio/highway'
import AboutLoader from './preloaderAbout.js'
import Slider from './slider.js'
import imagesLoaded from 'imagesloaded'

class CustomRendererAbout extends Highway.Renderer {
  onEnterCompleted() {
    const img = document.querySelector('.header__photo')
    imagesLoaded(img, { background: true }, function() {
      AboutLoader()
    })


    let navI = document.querySelectorAll('.nav__item')
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.remove('inverse')
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererAbout
