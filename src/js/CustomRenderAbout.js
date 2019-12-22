import Highway from '@dogstudio/highway'
import AboutLoader from './preloaderAbout.js'
import Slider from './slider.js'

class CustomRendererAbout extends Highway.Renderer {
  onEnterCompleted() {
    AboutLoader()

    let navI = document.querySelectorAll('.nav__item')
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.remove('inverse')
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererAbout
