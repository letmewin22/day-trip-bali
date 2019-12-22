import Highway from '@dogstudio/highway'
import MainLoader from './preloader.js'
import Slider from './slider.js'

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {
    MainLoader()
    Slider()
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
export default CustomRendererMain
