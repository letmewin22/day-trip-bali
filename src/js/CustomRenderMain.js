import Highway from '@dogstudio/highway'
import MainLoader from './preloader.js'
import Slider from './slider.js'

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {
    MainLoader()
    Slider()

    let navI = document.querySelectorAll('.nav__item')
    for (let i = 0; i < navI.length; i++) {
      navI[i].classList.remove('inverse')
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererMain
